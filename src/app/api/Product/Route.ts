import { authOptions } from "@/lib/auth"; // NextAuth configuration
import Product from "@/models/Product"; // Product mongoose model
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum"; // Error/Message enums
import { Product_interface } from "@/types/modelTypes"; // Product interface
import connectDB from "@/utils/connectDB"; // MongoDB connection utility
import { getServerSession } from "next-auth"; 
import { NextResponse } from "next/server";
import { join } from "path";
import Log from "@/models/log"; 
import { LogsActions } from "@/types/enums/generalEnums";
import { ensureDirExists, processAndSaveImageForProperties } from "@/utils/files";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectDB();

    // Extract formData from request
    const formData = await req.formData();
    const dataRaw = formData.get("data")?.toString();
    const thumbnail = (formData.get("thumbnail") as File) || null;
    const images = (formData.getAll("images") as File[]) || [];

    let parsedData;
    let thumbnail_Name: string | undefined;
    let images_Names: string[] = [];

    // Get user session
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });
    }

    // Only admins are allowed to add products
    const isAdminRole = session?.user?.role?.includes("Admin");
    if (!isAdminRole) {
      return NextResponse.json({ error: ERROR.ACCESS_DENIED }, { status: 403 });
    }

    // Parse product data
    if (dataRaw) {
      parsedData = JSON.parse(dataRaw) as Product_interface;
    } else {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    // Required fields validation
    const {
      sku,
      title,
      englishTitle,
      shortDescription,
      description,
      brand,
      category,
      information,
      extraInformation,
      status,
    } = parsedData;

    const requiredFields = [
      sku,
      title,
      englishTitle,
      shortDescription,
      description,
      brand,
      category,
      information,
      status,
    ];
    if (requiredFields.some((field) => !field)) {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    // Create a new product document
    const newProduct = await Product.create({
      ...parsedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Use product _id for folder naming
    const safeTitle = newProduct._id.toString();

    // Thumbnail storage directory
    const thumbnail_dir = `/store/products/${safeTitle}/thumbnail`;
    const thumbnail_upload_dir = join(process.cwd(), "public", thumbnail_dir);
    await ensureDirExists(thumbnail_upload_dir);

    // Images storage directory
    const images_dir = `/store/products/${safeTitle}/images`;
    const images_upload_dir = join(process.cwd(), "public", images_dir);
    await ensureDirExists(images_upload_dir);

    // Process and save square thumbnail (e.g., 400x400)
    if (thumbnail) {
      if (!thumbnail.type.startsWith("image/")) {
        return NextResponse.json({ error: ERROR.INVALID_FORMAT }, { status: 400 });
      }
      thumbnail_Name = await processAndSaveImageForProperties(
        thumbnail,
        thumbnail_upload_dir,
        safeTitle,
        400,
        400 // square thumbnail
      );
    }

    // Process and save gallery images
    if (images.length) {
      for (const image of images) {
        if (!image.type.startsWith("image/")) {
          return NextResponse.json({ error: ERROR.INVALID_FORMAT }, { status: 400 });
        }
        let image_Name = await processAndSaveImageForProperties(
          image,
          images_upload_dir,
          safeTitle
        );
        images_Names.push(image_Name);
      }
    }

    // Attach image paths to product document
    if (thumbnail_Name) newProduct.thumbnail = `${thumbnail_dir}/${thumbnail_Name}`;
    if (images_Names.length) {
      newProduct.images = images_Names.map((name) => `${images_dir}/${name}`);
    }

    await newProduct.save();

    // Log the action
    await Log.create({
      title: `New product with id ${newProduct._id} by user ${session.user?.email} added`,
      action: LogsActions.NEW_PRODUCT,
      user_id: session.user.id,
      createdAt: new Date(),
    });

    // Return success response
    return NextResponse.json({ message: MESSAGE.NEW_PRODUCT }, { status: 200 });
  } catch (error) {
    console.log("Error in adding product:", error);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
}