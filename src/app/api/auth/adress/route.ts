import { authOptions } from "@/lib/auth";
import User from "@/models/user";
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum";
import { User_address_interface } from "@/types/modelTypes";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
	try {
		// Connect to the database
		await connectDB();

		// Parse form data from the request
		const formData = await req.formData();
		const dataRaw = formData.get("data")?.toString();

		let parsedData 

		// If data exists, parse it, else return error
		if(dataRaw) { 
			parsedData =  JSON.parse(dataRaw)
		} else { 
			return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
		}

		// Destructure the parsed data
		const {
			_id, title, estate, city , text_address , postalCode
		} = parsedData;

        if( !title || !estate || !city || !text_address || !postalCode ) return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
        
		// Get the user session
		const session = await getServerSession(authOptions);
		if (!session) return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });
		
		//Ensure the session user matches the submitted user ID
		if (session.user.id !== _id) {
			return NextResponse.json({ error: ERROR.UNAUTHORIZED }, { status: 403 });
		}

		// Find the user in the database based on role
		const user = await User.findOne({ _id });	
		
		if (!user) return NextResponse.json({ error: ERROR.CANT_FIND_USER }, { status: 404 });

        const newAddress : User_address_interface = { title, estate, city , text_address , postalCode , createdAt : new Date() , updatedAt : new Date()  }
		// Update user fields
		user.addresses = [ ...user.addresses , newAddress ];
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