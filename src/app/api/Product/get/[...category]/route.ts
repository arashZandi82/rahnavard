import Product from "@/models/Product";
import { ERROR } from "@/types/enums/MessageUnum";
import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET( req: Request, { params }: { params: { category: string[] } }){
	try {
		const { searchParams } = new URL(req.url);

        const decoded = (params.category|| []).map(decodeURIComponent);
        const [levelOne, levelTwo] = decoded[0].split("/");           

		// Query params
		const page = Math.max(parseInt(searchParams.get("page") || "1"), 1);
		const limit = parseInt(searchParams.get("limit") || "15");

		// sorting => "date" | "price"
		const sortBy = searchParams.get("sortBy") || "date"; 
		const sortOrder = searchParams.get("sort") === "asc" ? 1 : -1;

		const search = searchParams.get("search") || "";
		const status = searchParams.get("status") || null;
		const minPrice = parseFloat(searchParams.get("minPrice") || "0");
		const maxPrice = parseFloat(searchParams.get("maxPrice") || "0");
		const isFeatured = searchParams.get("isFeatured");
		const isNew = searchParams.get("isNew");
		const brand = searchParams.get("brand");
		

		await connectDB();

		// Build filter
		const filter: Record<string, any> = {};

		if (levelOne) filter["category.levelOne"] = levelOne;
		if (levelTwo) filter["category.levelTwo"] = levelTwo;

		if(brand) filter["brand"] = { $regex: `${brand.trim()}`, $options: "i" }

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


		console.log(filter);
		

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