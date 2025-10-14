"use client";

import CartProductCard from "@/elements/cards/CartProductCard";
import CartProductCardSkeleton from "@/elements/cards/CartProductCardSkeleton";
import useCartProducts from "src/hook/useCartProducts";

const CartPage = () => {
	const { data, isLoading, isError } = useCartProducts();

	// Show an error message if fetching cart data fails
	if (isError)
		return <div className="text-red-500 text-center py-10">Error loading cart items</div>;

	// Extract product list and total fee from API response
	const products = data?.data?.products ?? [];
	const totalFee = data?.data?.totalFee ?? 0;

	return (
		<div className="px-5 py-5 md:px-7">
			<h1 className="text-Bold-Normal-title-2 mb-6">سبد خرید</h1>

			<div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
				{/* Cart Items Section */}
				<div className="grid grid-cols-1 gap-4 lg:col-span-3">
					{/* Show skeletons while loading */}
					{isLoading ? (
						Array.from({ length: 5 }, (_, i) => <CartProductCardSkeleton key={i} />)
					) : products.length > 0 ? (
						// Render product cards if products exist
						products.map((product: any, index: number) => (
							<CartProductCard
								productdata={product}
								key={product.product._id}
								index={index}
							/>
						))
					) : (
						// Show empty state if no products found
						<div className="text-center py-10 text-Neutral-600 text-Bold-Normal-text-2">
							محصولی در سبد یافت نشد
						</div>
					)}
				</div>

				{/* Order Summary Section */}
				{products.length > 0 && (
					<div className="px-4 grid gap-y-5 py-6 h-fit border border-gray-200 bg-primary-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
						{/* Total price */}
						<p className="flex justify-between text-Regular-Normal-text-1">
							<span>مجموع:</span>
							<span>{totalFee.toLocaleString()} تومان</span>
						</p>

						{/* Checkout button */}
						<button className="bg-Secondary-500 hover:bg-Secondary-400 hover:shadow-md py-2 w-full rounded-xl col-span-2 transition-all duration-200">
							ادامه خرید
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartPage;