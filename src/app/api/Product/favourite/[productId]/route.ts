import { authOptions } from "@/lib/auth";
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import User from "@/models/user";


export async function PATCH(req: Request, context: Params) {
	try {
		// Connect to MongoDB
		await connectDB();

		// Extract property ID from URL params
		const product_Id = context?.params?.productId;

		// Check if user session exists (is authenticated)
		const session = await getServerSession(authOptions);
		if (!session) return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });

		
		const existUser = await User.findOne({ _id: session.user.id })
	

		if (!existUser) {
			return NextResponse.json(
				{ error: ERROR.CANT_FIND_HANDLER },
				{ status: 422 }
			);
		}

		// Get current liked listings or initialize as empty array
		const liked = existUser.liked_products || [];

		// Check if the property is already liked
		const isLiked = liked.includes(product_Id);

		if (isLiked) {

			existUser.liked_products = liked.filter((id: any) => id !== product_Id);
			await existUser.save();

			return NextResponse.json(
				{ message: "محصول از لیست علاقه مندی ها حذف شد" },
				{ status: 200 }
			);
		} else {

			liked.push(product_Id);
			existUser.liked_products = liked;
			await existUser.save();

			return NextResponse.json(
				{ message: "محصول به لیست علاقه مندی ها اضافه شد" },
				{ status: 200 }
			);
		}
	} catch (error) {
		console.log("Error in PATCH handler:", error);
		return NextResponse.json(
			{ error: ERROR.SERVER_ERROR },
			{ status: 500 }
		);
	}
}