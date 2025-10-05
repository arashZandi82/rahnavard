import { Category } from './../../../types/modelTypes';
import { authOptions } from "@/lib/auth"; 
import Product from "@/models/Product"; 
import { ERROR, MESSAGE } from "@/types/enums/MessageUnum"; 
import { Product_interface } from "@/types/modelTypes"; 
import connectDB from "@/utils/connectDB"; 
import { getServerSession } from "next-auth"; 
import { NextResponse } from "next/server";
import { join } from "path";
import Log from "@/models/log"; 
import { LogsActions, UserRole } from "@/types/enums/generalEnums";
import { ensureDirExists, processAndSaveImageForProperties } from "@/utils/files";

export async function POST(req: Request) {
  try {
    await connectDB();

    const formData = await req.formData();
    const dataRaw = formData.get("data")?.toString();
    const thumbnail = (formData.get("thumbnail") as File) || null;
    const images = (formData.getAll("images") as File[]) || [];
    const descriptionImages = (formData.getAll("descriptionImages") as File[]) || [];

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: ERROR.LOGIN }, { status: 401 });
    }

    if (session?.user?.role === UserRole.CLIENT) {
      return NextResponse.json({ error: ERROR.ACCESS_DENIED }, { status: 403 });
    }

    if (!dataRaw) {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    const parsedData = JSON.parse(dataRaw) as Product_interface;

    const requiredFields = [
      parsedData.title,
      parsedData.englishTitle,
      parsedData.shortDescription,
      parsedData.description,
      parsedData.brand,
      parsedData.category,
      parsedData.information,
      parsedData.status,
    ];

    if (requiredFields.some((field) => !field)) {
      return NextResponse.json({ error: ERROR.INVALID_DATA }, { status: 400 });
    }

    // Create product document
    const newProduct = await Product.create({
      ...parsedData,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const safeTitle = newProduct._id.toString();

    // Directories
    const thumbnailDir = `/store/products/${safeTitle}/thumbnail`;
    const thumbnailUploadDir = join(process.cwd(), "public", thumbnailDir);
    await ensureDirExists(thumbnailUploadDir);

    const imagesDir = `/store/products/${safeTitle}/images`;
    const imagesUploadDir = join(process.cwd(), "public", imagesDir);
    await ensureDirExists(imagesUploadDir);

    const descImagesDir = `/store/products/${safeTitle}/description`;
    const descImagesUploadDir = join(process.cwd(), "public", descImagesDir);
    await ensureDirExists(descImagesUploadDir);

    // Process thumbnail (square)
    if (thumbnail) {
      if (!thumbnail.type.startsWith("image/")) {
        return NextResponse.json({ error: ERROR.INVALID_FORMAT }, { status: 400 });
      }
      const thumbnailName = await processAndSaveImageForProperties(
        thumbnail,
        thumbnailUploadDir,
        safeTitle,
        400,
        400 // square
      );
      newProduct.thumbnail = `${thumbnailDir}/${thumbnailName}`;
    }

    // Process gallery images
    const imagesNames: string[] = [];
    for (const image of images) {
      if (!image.type.startsWith("image/")) {
        return NextResponse.json({ error: ERROR.INVALID_FORMAT }, { status: 400 });
      }
      const imageName = await processAndSaveImageForProperties(image, imagesUploadDir, safeTitle);
      imagesNames.push(`${imagesDir}/${imageName}`);
    }
    if (imagesNames.length) newProduct.images = imagesNames;

    // Process description images
    const descriptionImagesNames: string[] = [];
    for (const img of descriptionImages) {
      if (!img.type.startsWith("image/")) continue;
      const imgName = await processAndSaveImageForProperties(img, descImagesUploadDir, safeTitle);
      descriptionImagesNames.push(`${descImagesDir}/${imgName}`);
    }
    if (descriptionImagesNames.length) newProduct.descriptionImages = descriptionImagesNames;

    await newProduct.save();

    // Log creation
    await Log.create({
      title: `New product with id ${newProduct._id} by user ${session.user?.email} added`,
      action: LogsActions.NEW_PRODUCT,
      user_id: session.user.id,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: MESSAGE.NEW_PRODUCT }, { status: 200 });
  } catch (error) {
    console.error("Error in adding product:", error);
    return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
  }
}

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);

		// Query params
		const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);
		const limit = parseInt(searchParams.get("limit") || "15");

		// sorting => "date" | "price"
		const sortBy = searchParams.get("sortBy") || "date"; 
		const sortOrder = searchParams.get("sort") === "asc" ? 1 : -1;

		const levelOne = searchParams.get("levelOne") || null;
		const levelTwo = searchParams.get("levelTwo") || null;
		const search = searchParams.get("search") || "";
		const status = searchParams.get("status") || null;
		const minPrice = parseFloat(searchParams.get("minPrice") || "0");
		const maxPrice = parseFloat(searchParams.get("maxPrice") || "0");
		const isFeatured = searchParams.get("isFeatured");
		const isNew = searchParams.get("isNew");

		await connectDB();

		// Build filter
		const filter: Record<string, any> = {};

		if (levelOne) filter["category.levelOne"] = levelOne;
		if (levelTwo) filter["category.levelTwo"] = levelTwo;

		if (search) {
		filter.$or = [
			{ title: { $regex: search, $options: "i" } },
			{ englishTitle: { $regex: search, $options: "i" } },
			{ brand: { $regex: search, $options: "i" } },
			{ "extraInformation.value": { $regex: search, $options: "i" } },
		];
		}

		if (status) filter.status = status;
		if (minPrice > 0 || maxPrice > 0) {
			filter["information.price"] = {};
			if (minPrice > 0) filter["information.price"].$gte = minPrice;
			if (maxPrice > 0) filter["information.price"].$lte = maxPrice;
		}
		if (isFeatured) filter.isFeatured = isFeatured === "true";
    if (isNew) filter.isNew = isNew === "true"; 

		// Sorting
		let sortOption: Record<string, 1 | -1> = {};
		if (sortBy === "price") {
			sortOption = { "information.price": sortOrder };
		} else {
			sortOption = { createdAt: sortOrder };
		}

		// Total products matching filter
		const totalProducts = await Product.countDocuments(filter);
		const totalPages = Math.ceil(totalProducts / limit) || 1;
		const currentPage = Math.min(page, totalPages);

		// Fetch paginated products
		const products = await Product.find(filter)
			.sort(sortOption)
			.skip((currentPage - 1) * limit)
			.limit(limit)
			.lean();

		return NextResponse.json(
		{
			products,
			pagination: {
				totalProducts,
				totalPages,
				currentPage,
				limit,
			},
		},
		{ status: 200 }
		);
	} catch (error) {
		console.error("Error fetching products:", error);
		return NextResponse.json({ error: ERROR.SERVER_ERROR }, { status: 500 });
	}
}