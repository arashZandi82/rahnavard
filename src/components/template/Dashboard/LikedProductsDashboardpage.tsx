import ProductCard from '@/elements/cards/ProductCard';
import { Product_interface } from '@/types/modelTypes';
import React from 'react';

const LikedProductsDashboardpage = ({products}: {products: Product_interface[]}) => {
    return (
        <div className="px-5 py-5 md:px-7">
            <h1 className="text-Bold-Normal-title-3 mb-6">علاقه‌مندی ها</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    products.length ? products.map((product) => (
                        <ProductCard targetPage={'/products'}  key={product._id} product={product} isDashboard={true} isliked={ true } />
                    )) : <p className='text-Bold-Normal-text-1'>محصولی یافت نشد!</p>
                }
            </div>
        </div>
    );
};

export default LikedProductsDashboardpage;