import React from "react";

const CartProductCardSkeleton = () => {
	return (
		<div className="w-full p-4 border border-gray-200 bg-primary-0 rounded-2xl shadow-sm flex gap-4 animate-pulse">
			{/* Skeleton Image */}
			<div className="relative min-w-[140px]">
				<div className="w-36 h-36 bg-gray-200 rounded-2xl" />
			</div>

			{/* Skeleton Details */}
			<div className="flex-1 flex flex-col justify-between">
				{/* Top section */}
				<div className="space-y-3">
					<div className="h-4 w-2/3 bg-gray-200 rounded"></div>
					<div className="h-3 w-1/3 bg-gray-200 rounded"></div>

					{/* Price */}
					<div className="mt-4 space-y-2">
						<div className="h-3 w-1/2 bg-gray-200 rounded"></div>
						<div className="h-4 w-1/3 bg-gray-200 rounded"></div>
					</div>

					{/* Color */}
					<div className="mt-3 flex items-center gap-x-2">
						<div className="h-4 w-12 bg-gray-200 rounded"></div>
						<div className="w-5 h-5 bg-gray-200 rounded-full" />
					</div>
				</div>

				{/* Bottom section */}
				<div className="flex items-center justify-between mt-4">
					{/* Quantity controls */}
					<div className="py-2 px-4 rounded-xl border-2 border-gray-200 flex items-center justify-center gap-x-3">
						<div className="w-6 h-6 bg-gray-200 rounded"></div>
						<div className="w-6 h-4 bg-gray-200 rounded"></div>
						<div className="w-6 h-6 bg-gray-200 rounded"></div>
					</div>

					{/* Action buttons */}
					<div className="flex items-center gap-x-3">
						<div className="w-8 h-8 bg-gray-200 rounded-full"></div>
						<div className="w-8 h-8 bg-gray-200 rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartProductCardSkeleton;