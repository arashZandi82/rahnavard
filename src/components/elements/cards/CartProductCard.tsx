import { Product_interface } from "@/types/modelTypes";
import Link from "next/link";
import React, { useState } from "react";
import slugify from "slugify";
import ImageWithFallback from "../ImageWithFallback";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { LuTrash } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import toast from "react-hot-toast";
import axios from "axios";
import { ERROR } from "@/types/enums/MessageUnum";

type CartItemProps = {
	product: Product_interface;
	cartItemData: {
		color: number;
		quantity: number;
	};
	index: number;
};

const CartProductCard = ({ productdata, index }: any) => {
  const { product, cartItemData } = productdata;

	const [loadingDelete, setLoadingDelete] = useState(false);
	const [loadingUpdate, setLoadingUpdate] = useState(false);
	const [amount, setAmount] = useState<number>(cartItemData.quantity);

	const {
		_id,
		title,
		englishTitle,
		thumbnail,
		description,
		isFeatured,
		isNew,
		information,
	} = product;

	const slug = slugify(`${_id}-${englishTitle}`, { lower: true, strict: true });

	const discountedPrice = information.discount.haveDiscount
		? (information.price * (100 - information.discount.discountPercent)) / 100
		: null;

	// Handle quantity increase/decrease
	const amountHandler = (action: "+" | "-") => {
		if (action === "+" && amount < information.quantity) setAmount(amount + 1);
		else if (action === "-" && amount > 1) setAmount(amount - 1);
	};

	// Delete product from cart
	const deleteHandler = async () => {
		if (!confirm("Are you sure you want to remove this product?")) return;
		setLoadingDelete(true);
		try {
			const res = await fetch(`/api/auth/cart/delete/${index}`, { method: "PATCH" });
			const data = await res.json();

			if (data.error) toast.error(data.error);
			else {
				toast.success(data.message);
				window.location.reload();
			}
		} catch {
			toast.error(ERROR.PROBLEM);
		} finally {
			setLoadingDelete(false);
		}
	};

	// Update cart item quantity
	const updateHandler = async () => {
	if (amount === cartItemData.quantity) return;
	setLoadingUpdate(true);

	try {
		const response = await fetch("/api/auth/cart/update", {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ index, newAmount: amount }),
		});

		const resData = await response.json(); // ✅ این خط اصلاح شد

		if (resData.error) toast.error(resData.error);
		else {
			toast.success(resData.message);
			window.location.reload();
		}
	} catch {
		toast.error(ERROR.PROBLEM);
	} finally {
		setLoadingUpdate(false);
	}
};
	return (
		<div className="w-full p-4 border border-gray-200 bg-primary-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
			{/* Product image */}
			<div className="relative min-w-[140px]">
				<Link href={`/products/${slug}`} className="block overflow-hidden rounded-2xl">
					<ImageWithFallback
						src={thumbnail || ""}
						alt={description}
						type="thumbnail"
						style="w-36 h-36 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
					/>
				</Link>

				{/* Badges */}
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

			{/* Product details */}
			<div className="flex-1 flex flex-col justify-between">
				{/* Top section: title & price */}
				<div>
					<p className="text-Bold-Normal-text-2 font-semibold text-Neutral-900">{title}</p>
					<p className="text-Bold-Caption-2 text-Neutral-600 mt-0.5">{englishTitle}</p>

					{/* Price */}
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

					{/* Selected color */}
					<div className="mt-3 flex items-center gap-x-2">
						<span className="text-Regular-Normal-text-2 text-Neutral-600">رنگ:</span>
						<div
							style={{
								backgroundColor: information.colors[cartItemData.color],
							}}
							className="w-5 h-5 hover:w-6 hover:h-6 rounded-full shadow-sm transition-all"
						/>
					</div>
				</div>

				{/* Bottom section: quantity controls & actions */}
				<div className="flex items-center justify-between mt-4">
					{/* Quantity controls */}
					<div className="py-1 px-3 rounded-xl border-2 border-Secondary-500 flex items-center justify-center gap-x-3">
						<button
							onClick={() => amountHandler("+")}
							disabled={amount === information.quantity}
							className="text-3xl text-Secondary-600 hover:text-Secondary-300 disabled:text-Secondary-700 disabled:cursor-not-allowed"
						>
							<CiSquarePlus />
						</button>
						<p className="text-Regular-Normal-text-1 font-medium">{amount}</p>
						<button
							onClick={() => amountHandler("-")}
							disabled={amount === 1}
							className="text-3xl text-Secondary-600 hover:text-Secondary-300 disabled:text-Secondary-700 disabled:cursor-not-allowed"
						>
							<CiSquareMinus />
						</button>
					</div>

					{/* Action buttons */}
					<div className="flex items-center gap-x-3">
						{amount !== cartItemData.quantity && (
							<button
								onClick={updateHandler}
								disabled={loadingUpdate}
								className="p-2 rounded-full text-xl text-Secondary-600 hover:bg-Secondary-100 transition-all duration-200"
								title="Update quantity"
							>
								{loadingUpdate ? "..." : <RxUpdate />}
							</button>
						)}

						<button
							onClick={deleteHandler}
							disabled={loadingDelete}
							className="p-2 rounded-full text-xl text-Error-500 hover:bg-Error-100 transition-all duration-200"
							title="Remove from cart"
						>
							{loadingDelete ? "..." : <LuTrash />}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProductCard;