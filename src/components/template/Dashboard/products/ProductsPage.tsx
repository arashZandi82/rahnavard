"use client"

import ProductCard from '@/elements/cards/ProductCard';
import ProductCardSkeleton from '@/elements/cards/ProductCardSkeleton';
import { Product_interface } from '@/types/modelTypes';
import { useEffect, useState } from 'react';


const ProductsPage = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [Products, SetProducts] = useState<Product_interface[]>([]);
    const [pagination , setpagination] = useState({
        totalProducts : 0, 
        totalPages : 0, 
        currentPage : 0, 
        limit : 15})


    useEffect(() => {
        const fetchProducts = async () => {
          try {
            setLoading(true);
            const res = await fetch("/api/product");
            if (!res.ok) throw new Error("Failed to fetch properties");
    
            const data = await res.json();
            SetProducts(data.products);
            setpagination(data.pagination)
            
          } catch (error) {
            console.error("Error fetching properties:", error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchProducts();        
      }, []);

    return (
        <div className='px-5 py-5 md:px-7'>
            {/* Page title */}
            <h1 className='text-Bold-Normal-title-3 mb-6'>محصولات</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    loading && !Products.length ? 
                        [...Array(pagination?.limit)].map((_, i) => (
                            <div key={i} className="">
                                <ProductCardSkeleton />
                            </div>
                        ))
                    : Products.map((Product : Product_interface ) => (
                        <div key={Product._id} className="">
                            <ProductCard product={Product} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;