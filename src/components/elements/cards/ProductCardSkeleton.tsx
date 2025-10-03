import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full h-full p-4 border border-gray-200 bg-primary-0 rounded-2xl shadow-sm">
      <div className="relative">
        <div className="w-full h-48 rounded-2xl bg-gray-200 animate-pulse" />
        <div className="absolute top-2 right-2 flex flex-col gap-y-1">
          <div className="w-12 h-5 rounded-full bg-gray-200 animate-pulse" />
          <div className="w-10 h-5 rounded-full bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="mt-3 px-1 flex flex-col gap-y-2">
        <div className="w-3/4 h-4 bg-gray-200 rounded-md animate-pulse" />
        <div className="w-1/2 h-4 bg-gray-200 rounded-md animate-pulse" />

        <div className="flex flex-row-reverse justify-between items-center mt-3">
          <div className="flex flex-col gap-y-2">
            <div className="w-16 h-3 bg-gray-200 rounded-md animate-pulse" />
            <div className="w-20 h-4 bg-gray-200 rounded-md animate-pulse" />
          </div>
          <div className="flex">
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse" />
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse -mr-2" />
            <div className="w-5 h-5 rounded-full bg-gray-200 animate-pulse -mr-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;