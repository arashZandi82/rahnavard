import Logo from '@/elements/Logo';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-Neutral-500'>
            <div className=' container py-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 '>
                <div className='text-Neutral-100 col-span-1 md:col-span-2 lg:col-span-1 '>
                    <h3 className='text-Bold-Normal-text-1 mb-3'>درباره ما</h3>
                    <p className='text-Regular-Caption-1'>رهنورد، همراه مطمئن شما در مسیر کشف ناشناخته‌هاست. ما با ارائه لوازم تخصصی کوهنوردی، کمپینگ و سفر، کیفیت  و ایمنی را در کنار هیجان ماجراجویی به شما هدیه می‌دهیم. از طبیعت الهام می‌گیریم تا شما با خیال آسوده،  قدم به دل کوه و جنگل بگذارید.</p>
                </div>
                <div className='text-Neutral-100 lg:mr-10'>
                    <h3 className='text-Bold-Normal-text-1 mb-3'>دسترسی سریع</h3>
                    <ul className='text-Regular-Caption-1 list-disc mr-3 grid grid-cols-1 gap-y-2'>
                        <li><Link href='/'>صفحه اصلی</Link></li>
                        <li><Link href='/'>محصولات</Link></li>
                        <li><Link href='/'>بلاگ</Link></li>
                        <li><Link href='/'>تماس باما</Link></li>
                        <li><Link href='/'>درباره ما</Link></li>
                    </ul>
                </div>
                <div className='text-Neutral-100'>
                    <h3 className='text-Bold-Normal-text-1 mb-3'>دسترسی سریع</h3>
                    <ul className='text-Regular-Caption-1 list-disc mr-3 grid grid-cols-1 gap-y-2'>
                        <li><Link href='/'>لوازم کوهنوردی</Link></li>
                        <li><Link href='/'>لوازم کمپینگ</Link></li>
                        <li><Link href='/'>چادر کوهنودری</Link></li>
                        <li><Link href='/'>کیف کوهنوردی</Link></li>
                    </ul>
                </div>
                {/* <Logo className='lg:w-20' pathClass='group-hover:fill-primary-50' /> */}
            </div>
        </div>
    );
};

export default Footer;