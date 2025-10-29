import Blog from "@/models/Blog";
import Product from "@/models/Product";
import User from "@/models/user";
import { ERROR } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET( req: Request, { params }: { params: { category: string[] } }){
	try {
		
		await connectDB();


		// Fetch paginated products
		const products = await Product.find({isFeatured  : true})
		const blogs = await Blog.find({published : true})

        const authors_id = await Blog.distinct("autor_id");
        const userAuthors = await User.find({ _id: { $in: authors_id } });
        const authors = [...userAuthors];

		return NextResponse.json(
		{
			products,
			blogs,
            authors
		},
		{ status: 200 }
		);
	} catch (error) {
		console.error("Error fetching products:", error);
		return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
	}
}