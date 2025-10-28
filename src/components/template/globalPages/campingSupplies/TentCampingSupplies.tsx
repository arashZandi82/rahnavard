
const ShowProducts = dynamic(() => import("@/module/ShowProducts"), { ssr: false });
const ProductsPagesFilterSection = dynamic(() => import("@/elements/filter/ProductsPagesFilterSection"), { ssr: false });

import Product from '@/models/Product';
import connectDB from '@/utils/connectDB';
import dynamic from 'next/dynamic';
import React from 'react';

const TentCampingSupplies = async () => {
    await connectDB()

    const Allbrands = await Product.distinct("brand")
    const normalizedBrands = Allbrands.map(b => b.trim().replace(/\s+/g, " ").toLowerCase());
    const uniqueBrands = Array.from(new Set(normalizedBrands));
    
    const text: string = "در رهنورد می‌توانید انواع چادرهای مسافرتی را با کیفیت بالا و طراحی ضد آب تهیه کنید. از مدل‌های سبک و جمع‌وجور برای سفرهای کوتاه گرفته تا چادرهای بزرگ خانوادگی، همه در یک مجموعه گردآوری شده‌اند تا در هر شرایطی اقامتی راحت، ایمن و دل‌پذیر در دل طبیعت داشته باشید.";

    return (
        <div className=''>
            <div className="bg-campingSupplies-tent-texture bg-cover bg-center lg: py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">چادر مسافرتی</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">{text}</p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <div className='lg:flex items-center justify-center'>
                    <ProductsPagesFilterSection PATH="/mountaineering-supplies" brands={uniqueBrands} />
                </div>
                <ShowProducts url='لوازم کمپینگ/چادر مسافرتی'/>
            </div>
        </div>
    );
};

export default TentCampingSupplies;