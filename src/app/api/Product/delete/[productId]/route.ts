import { authOptions } from "@/lib/auth";
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextResponse } from "next/server";
import { LogsActions } from '@/types/enums/generalEnums';
import Log from "@/models/log";
import path from "path";
import { rm } from 'fs/promises';
import Product from "@/models/Product";

export async function PATCH(req: Request, { params }: { params: { productId: string } }) {
  try {
    await connectDB();
    const Product_id = params.productId;

    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });

    const PRODUCT = await Product.findOne({ _id: Product_id });
    if (!PRODUCT) return NextResponse.json({ error: ERROR.CANT_FIND_PRODUCT }, { status: 404 });

    const fullPath = path.resolve('public/store/products/', Product_id);

    // Delete files first
    try {
      await rm(fullPath, { recursive: true, force: true });
    } catch (error) {
      console.error("Error removing property files:", error);
      return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
    }

    // Then delete the property from DB
    await Product.deleteOne({ _id: Product_id });

    await Log.create({
      title: `product with id ${PRODUCT._id} by user ${session.user?.email} deleted`,
      action: LogsActions.PRODUCT_DELETED,
      user_id: session.user.id,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: MESSAGE.PRODUCT_DELETE }, { status: 200 });

  } catch (error) {
    console.log("Error in PATCH handler:", error);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
}