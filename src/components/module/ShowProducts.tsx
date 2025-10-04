"use client"

import PaginationButtonsProducts from "@/elements/buttons/PaginationButtonsProduts";
import ProductCard from "@/elements/cards/ProductCard";
import ProductCardSkeleton from "@/elements/cards/ProductCardSkeleton";
import ProductsDashboardFilterSection from "@/elements/filter/ProductsDashboardFilterSection";
import { Product_interface } from "@/types/modelTypes";
import { useSearchParams } from "next/navigation";
import { useProducts } from "src/hook/useproduts";

const ShowProducts = () => {
    const searchParams = useSearchParams();
    const page = searchParams.get("page") || "15"; 
    const limit = 15;
    
    const { data, isLoading, isError } = useProducts(page, limit, searchParams);

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
            <ProductsDashboardFilterSection PATH="/mountaineering-supplies" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 my-10">
                {isLoading && !products.length
                    ? Array.from({ length: limit }, (_, i) => (
                        <ProductCardSkeleton key={i} />
                    ))
                    : products.map((product) => (
                        <ProductCard key={product._id} product={product} targetPage={'/products'} />
                ))}
            </div>
            {
                products.length == 0 ? <p className="text-Regular-Normal-text-1 my-8">محصولی یافت نشد!</p> :null
            }
            {products.length > 0 && (
                <PaginationButtonsProducts
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                />
            )}
        </div>
    );
    
};

export default ShowProducts;