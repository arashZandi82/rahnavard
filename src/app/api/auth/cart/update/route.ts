import { authOptions } from "@/lib/auth";
import Product from "@/models/Product";
import User from "@/models/user";
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum";
import { User_cart_Products_interface } from "@/types/modelTypes";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
	try {
		await connectDB();

		const { index, newAmount } = await req.json();

		if (index == null || newAmount == null)
			return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });

		const session = await getServerSession(authOptions);
		if (!session)
			return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });

		const user = await User.findById(session.user.id);
		if (!user)
			return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });

		if (!user.cart.products[index])
			return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });

		user.cart.products[index].quantity = newAmount;

		const totalFeeList = await Promise.all(
			user.cart.products.map(async (cartProduct: User_cart_Products_interface) => {
				const product = await Product.findById(cartProduct.productId);
				if (!product) return 0;

				const info = product.information;
				const hasDiscount = info.discount?.haveDiscount;
				const basePrice = info.price;
				const finalPrice = hasDiscount
					? (basePrice * (100 - info.discount.discountPercent)) / 100
					: basePrice;

				return finalPrice * cartProduct.quantity;
			})
		);

		user.cart.totalFee = totalFeeList.reduce((acc, val) => acc + val, 0);

		await user.save();

		return NextResponse.json({ message: MESSAGE.CART_UPDATE_ITEM }, { status: 200 });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
	}
};