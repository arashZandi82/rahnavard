import Product from "@/models/Product";
import { ERROR } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: Params) {
    try {

        // Connect to the database
        await connectDB();
        
        // Extract the Product ID from route parameters
        const product_id = context?.params?.productId;

        // Fetch product
        const product = await Product.findById(product_id);
        
        if( !product ) return NextResponse.json({ error: ERROR.CANT_FIND_PRODUCT }, { status: 404 });

        return NextResponse.json({ product },{ status: 200 });

    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
    }
}