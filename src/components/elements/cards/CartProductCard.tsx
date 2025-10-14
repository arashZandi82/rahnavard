import { Product_interface } from "@/types/modelTypes";
import Link from "next/link";
import React from "react";
import slugify from "slugify";
import ImageWithFallback from "../ImageWithFallback";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { LuTrash } from "react-icons/lu";

type Props = {
	product: Product_interface;
	cartItemData: {
		color: number;
		quantity: number;
	};
};

const CartProductCard = ({ productdata }: { productdata: Props }) => {
	const {
		_id,
		title,
		englishTitle,
		thumbnail,
		description,
		isFeatured,
		isNew,
		information,
	} = productdata.product;

	const slug = slugify(`${_id}-${englishTitle}`, { lower: true, strict: true });

	const discountedPrice = information.discount.haveDiscount
		? (information.price * (100 - information.discount.discountPercent)) / 100
		: null;

	return (
		<div className="w-full p-4 border border-gray-200 bg-primary-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
			{/* تصویر محصول */}
			<div className="relative min-w-[140px]">
				<Link href={`/products/${slug}`} className="block overflow-hidden rounded-2xl">
					<ImageWithFallback
						src={thumbnail || ""}
						alt={description}
						type="thumbnail"
						style="w-36 h-36 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
					/>
				</Link>

				<div className="absolute top-2 right-2 flex flex-col gap-y-1">
					{isFeatured && (
						<span className="px-2 py-0.5 text-Bold-Caption-2 rounded-full bg-Secondary-400 shadow-sm">
							ویژه
						</span>
					)}
					{isNew && (
						<span className="px-2 py-0.5 text-Bold-Caption-2 rounded-full bg-Secondary-400 shadow-sm">
							جدید
						</span>
					)}
				</div>
			</div>

			{/* جزئیات محصول */}
			<div className="flex-1 flex flex-col justify-between">
				{/* بالا: عنوان و قیمت */}
				<div>
					<p className="text-Bold-Normal-text-2 font-semibold text-Neutral-900">{title}</p>
					<p className="text-Bold-Caption-2 text-Neutral-600 mt-0.5">{englishTitle}</p>

					{/* قیمت */}
					<div className="mt-3 flex flex-col items-start">
						{discountedPrice ? (
							<>
								<p className="text-Regular-Normal-text-2 text-Neutral-500 line-through">
									{information.price.toLocaleString()} تومان
								</p>
								<p className="text-Regular-Normal-text-1 text-primary-500 font-semibold">
									{discountedPrice.toLocaleString()} تومان
								</p>
							</>
						) : (
							<p className="text-Regular-Normal-text-1 text-Neutral-900 font-semibold">
								{information.price.toLocaleString()} تومان
							</p>
						)}
					</div>

					{/* رنگ انتخابی */}
					<div className="mt-3 flex items-center gap-x-2">
						<span className="text-Regular-Normal-text-2 text-Neutral-600">رنگ:</span>
						<div
							style={{
								backgroundColor: information.colors[productdata.cartItemData.color],
							}}
							className="w-5 h-5 hover:w-6 hover:h-6 rounded-full shadow-sm transition-all"
						/>
					</div>
				</div>

				{/* پایین: کنترل تعداد و حذف */}
				<div className="flex items-center justify-between mt-4">
					{/* کنترل تعداد */}
					<div className="py-1 px-3 rounded-xl border-2 border-Secondary-500 flex items-center justify-center gap-x-3">
						<button
							disabled={productdata.cartItemData.quantity === information.quantity}
							className="text-3xl text-Secondary-600 hover:text-Secondary-300 disabled:text-Secondary-700 disabled:cursor-not-allowed"
						>
							<CiSquarePlus />
						</button>
						<p className="text-Regular-Normal-text-1 font-medium">
							{productdata.cartItemData.quantity}
						</p>
						<button
							disabled={productdata.cartItemData.quantity === 1}
							className="text-3xl text-Secondary-600 hover:text-Secondary-300 disabled:text-Secondary-700 disabled:cursor-not-allowed"
						>
							<CiSquareMinus />
						</button>
					</div>

					{/* حذف از سبد */}
					<button
						className="p-2 rounded-full text-xl text-Error-500 hover:bg-Error-100 transition-all duration-200"
						title="حذف از سبد"
					>
						<LuTrash />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartProductCard;