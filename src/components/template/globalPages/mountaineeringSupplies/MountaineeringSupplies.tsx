import ShowProducts from '@/module/ShowProducts';
import React from 'react';

const MountaineeringSupplies = () => {
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
                <ShowProducts/>
            </div>
        </div>
    );
};

export default MountaineeringSupplies;