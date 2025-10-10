import { authOptions } from "@/lib/auth";
import User from "@/models/user";
import { ERROR } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    // Connect to the database
    await connectDB();

    // Verify session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });
    }

    // Find the user
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });
    }

    // Calculate cart length
    const cartLength = user.cart?.products?.length || 0;

    // Respond success
    return NextResponse.json(
      { cartLength },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error fetching user cart length:", err);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
};