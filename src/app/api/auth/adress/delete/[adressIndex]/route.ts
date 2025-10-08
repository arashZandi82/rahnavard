import { authOptions } from "@/lib/auth";
import User from "@/models/user";
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum";
import { User_address_interface, User_Interface } from "@/types/modelTypes";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request , { params }: { params: { adressIndex: string } }) => {
	try {
		// Connect to the database
		await connectDB();

        const addressIndex = +params.adressIndex
        
		// Get the user session
		const session = await getServerSession(authOptions);
		if (!session) return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });
		

		// Find the user in the database based on role
		const user = await User.findOne({_id: session.user.id });	
		
		if (!user) return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });

        const newAddress : User_address_interface[] = user.addresses.filter((_: User_address_interface, index: number) => index !== addressIndex);
		// Update user fields
		user.addresses = newAddress;
		user.updatedAt = new Date();


		// Save the updated user to the database
		await user.save();


		// Return success response with updated user info
		return NextResponse.json(
			{
				message: MESSAGE.NEW_ADRESS,
			},
			{ status: 201 }
		);
	} catch (err) {
		console.log(err);

		// Return server error response in case of failure
		return NextResponse.json(
			{ error: ERROR.SERVER_ERROR },
			{ status: 500 }
		);
	}
};