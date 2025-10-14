import { authOptions } from "@/lib/auth";
import Product from "@/models/Product";
import User from "@/models/user";
import { ERROR } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  try {

    await connectDB();


    const session = await getServerSession(authOptions);
    if (!session)
      return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });


    const user = await User.findById(session.user.id);
    if (!user)
      return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });

    const userCart = user.cart;
    const products: any[] = [];


    const populatedProducts = await Promise.all(
      userCart.products.map(async (cartProduct: any) => {
        const product = await Product.findById(cartProduct.productId);
        if (!product) return null; 
        return {
          product,
          cartItemData: {
            color: cartProduct.color,
            quantity: cartProduct.quantity,
          },
        };
      })
    );
    const filteredProducts = populatedProducts.filter(Boolean);

    const data = {
      products: filteredProducts,
      totalFee: userCart.totalFee,
    };

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.error("Error fetching cart products:", error);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
}