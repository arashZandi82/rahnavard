"use client"

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
            <div>
                {
                    loading && !Products.length ? 
                        [...Array(pagination?.limit)].map((_, i) => (
                            <div key={i} className="">
                                <h1>...</h1>
                            </div>
                        ))
                    : Products.map((Product : Product_interface ) => (
                        <div key={Product._id} className="">
                            {/* <PropertyCard property={property} /> */}
                            <p>{Product.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsPage;