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
    // Connect to the database
    await connectDB();

    // Parse form data
    const formData = await req.formData();
    const dataRaw = formData.get("data")?.toString();

    if (!dataRaw) {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    const parsedData = JSON.parse(dataRaw);
    const { productId, color, quantity } = parsedData;

    //  Validate required fields
    if (!productId ||  typeof color === "undefined"  || !quantity) {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    //  Verify session
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });

    //  Find the user 
    const user = await User.findById(session.user.id);
    if (!user)  return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });

    //  Add new product to cart
    const newCartProduct: User_cart_Products_interface = { productId, color, quantity };
    user.cart.products.push(newCartProduct);

    //  Recalculate total cart price
    let userCartProductsTotalFee = 0;

    for (const cartProduct of user.cart.products) {
      const product = await Product.findById(cartProduct.productId);
      if (!product) continue;

      const info = product.information;
      const hasDiscount = info.discount?.haveDiscount;
      const basePrice = info.price;
      const finalPrice = hasDiscount
        ? (basePrice * (100 - info.discount.discountPercent)) / 100
        : basePrice;

      userCartProductsTotalFee += finalPrice * cartProduct.quantity;

      await product.save();
    }

    user.cart.totalFee = userCartProductsTotalFee;

    //  Save updated user
    await user.save();

    //  Respond success
    return NextResponse.json(
      { message: MESSAGE.NEW_PRODUCT_ADD_TO_CART },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error adding product to cart:", err);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
};