"use client";

import PaginationButtons from "@/elements/buttons/PaginationButtons";
import PaginationButtonsProduts from "@/elements/buttons/PaginationButtonsProduts";
import ProductCard from "@/elements/cards/ProductCard";
import ProductCardSkeleton from "@/elements/cards/ProductCardSkeleton";
import { Product_interface } from "@/types/modelTypes";
import { useSearchParams } from "next/navigation";
import { useProducts } from "src/hook/useproduts";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") || "15"; // صفحه فعلی
  const limit = 15;

  const { data, isLoading, isError } = useProducts(page, limit);

  if (isError) return <div className="text-red-500">خطا در دریافت محصولات</div>;

  const products: Product_interface[] = data?.products ?? [];
  const pagination = data?.pagination ?? {
    totalProducts: 0,
    totalPages: 1,
    currentPage: 1,
    limit,
  };

  return (
    <div className="px-5 py-5 md:px-7">
      <h1 className="text-Bold-Normal-title-3 mb-6">محصولات</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {isLoading && !products.length
          ? Array.from({ length: limit }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))
          : products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
      </div>

      {products.length > 0 && (
        <PaginationButtonsProduts
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </div>
  );
};

export default ProductsPage;