

const ShowProducts = dynamic(() => import("@/module/ShowProducts"), { ssr: false });
const ProductsPagesFilterSection = dynamic(() => import("@/elements/filter/ProductsPagesFilterSection"), { ssr: false });

import Product from '@/models/Product';
import connectDB from '@/utils/connectDB';
import dynamic from 'next/dynamic';
import React from 'react';

const HardcaseCampingSupplies = async () => {
    await connectDB()

    const Allbrands = await Product.distinct("brand")
    const normalizedBrands = Allbrands.map(b => b.trim().replace(/\s+/g, " ").toLowerCase());
    const uniqueBrands = Array.from(new Set(normalizedBrands));
    
    const text: string = "در رهنورد می‌توانید انواع هاردکیس‌ها و باکس‌های پلیمری را با کیفیت بالا و طراحی مقاوم تهیه کنید. این باکس‌ها برای محافظت از تجهیزات حساس مانند دوربین، ابزار یا لوازم کمپینگ در برابر ضربه، رطوبت و گرد و غبار طراحی شده‌اند تا وسایل شما در هر شرایطی ایمن باقی بمانند.";

    return (
        <div className=''>
            <div className="bg-campingSupplies-hardcase-texture bg-cover bg-center lg: py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">هاردکیس (باکس پلیمری)</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">{text}</p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <div className='lg:flex items-center justify-center'>
                    <ProductsPagesFilterSection PATH="/mountaineering-supplies" brands={uniqueBrands} />
                </div>
                <ShowProducts url='لوازم کمپینگ/هاردکیس (باکس پلیمری)'/>
            </div>
        </div>
    );
};

export default HardcaseCampingSupplies;