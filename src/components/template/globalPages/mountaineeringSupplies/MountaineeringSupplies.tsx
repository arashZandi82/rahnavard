const ShowProducts = dynamic(() => import("@/module/ShowProducts"), { ssr: false });

import ProductsPagesFilterSection from '@/elements/filter/ProductsPagesFilterSection';
import Product from '@/models/Product';
import connectDB from '@/utils/connectDB';
import dynamic from 'next/dynamic';
import React from 'react';

const MountaineeringSupplies = async () => {


    await connectDB()

    const Allbrands = await Product.distinct("brand")
    const normalizedBrands = Allbrands.map(b => b.trim().replace(/\s+/g, " ").toLowerCase());
    const uniqueBrands = Array.from(new Set(normalizedBrands));
    

    return (
        <div className=''>
            <div className="bg-MountaineeringSupplies-texture bg-cover bg-bottom lg:bg-center py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">لوازم کوهنوردی</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">
                        در رهنورد می‌توانید انواع لوازم و تجهیزات کوهنوردی را با بهترین کیفیت و قیمت مناسب خریداری کنید. 
                        از کفش و لباس فنی گرفته تا چادر، باتوم و کوله‌پشتی — همه آنچه برای یک صعود ایمن و لذت‌بخش نیاز دارید، 
                        در یک‌جا فراهم شده است تا تجربه‌ای حرفه‌ای و مطمئن از خرید داشته باشید.
                    </p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <div className='lg:flex items-center justify-center'>
                    <ProductsPagesFilterSection PATH="/mountaineering-supplies" brands={uniqueBrands} />
                </div>
                <ShowProducts url='لوازم کوهنوردی'/>
            </div>
        </div>
    );
};

export default MountaineeringSupplies;