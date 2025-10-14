"use client"

import CartProductCard from "@/elements/cards/CartProductCard";
import ProductCard from "@/elements/cards/ProductCard";
import ProductCardSkeleton from "@/elements/cards/ProductCardSkeleton";
import useCartProducts from "src/hook/useCartProducts";

const CartPage = () => {

    const { data, isLoading, isError } = useCartProducts();
    
    if (isError) return <div className="text-red-500">خطا در دریافت محصولات</div>;


    const products = data?.data?.products ?? [];
    const totalfee = data?.data?.totalFee ?? 0;

    

    return (
        <div className='px-5 py-5 md:px-7'>
            <h1 className='text-Bold-Normal-title-2 mb-6'>سبد خرید</h1>
            <p>{data? data.totalFee :null}</p>
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="grid grid-cols-1  gap-4 lg:col-span-3">
                    {isLoading && !products.length
                    ? Array.from({ length: 5 }, (_, i) => (
                        <ProductCardSkeleton key={i} />
                        ))
                    : products.map((product:any) => ( <CartProductCard productdata={product} key={product.product._id} /> ))}
                </div>
                <div className="px-4 grid gap-y-5 py-6 h-fit border border-gray-200 bg-primary-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                    <p className="flex gap-x-2">
                        <span>مجموع:</span>
                        <span>{totalfee.toLocaleString()} تومان</span>
                    </p>
                    <button className="bg-Secondary-500 hover:bg-Secondary-400 hover:shadow-md py-2 w-full rounded-xl col-span-2">تایید سفارش</button>
                    
                </div>
            </div>
        </div>
    );
};

export default CartPage;