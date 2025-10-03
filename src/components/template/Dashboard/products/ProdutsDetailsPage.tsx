"use client"

import DeleteProduct from '@/elements/buttons/DeleteProduct';
import Loader from '@/elements/Loader';
import PropertyGallery from '@/module/PropertyGallery';
import { Product_ExtraInformation_interface } from '@/types/modelTypes';
import { replaceDescriptionImageSrc } from '@/utils/BlogDescriptionImageHandler';
import { formatPriceWithSlash } from '@/utils/price';
import Link from 'next/link';
import useproduct from 'src/hook/useproduct';

const ProdutsDetailsPage = ({productId}:{productId: string}) => {

    const { data, isLoading, isError } = useproduct(productId);

    
    if (isLoading) return(<div className='flex items-center justify-center h-full'><Loader w={50} /></div>);
    if (isError || !data?.product || !data?.product?.images ) return(<div className='flex items-center justify-center h-full'><p>Something went wrong</p></div>);

    const { _id , title , englishTitle ,brand , shortDescription ,  description ,thumbnail , images , descriptionImages ,extraInformation , weight  , dimensions} = data?.product
    const { colors , price ,quantity ,discount } = data?.product?.information

    const discountedPrice = discount.haveDiscount ? (price * (100 - discount.discountPercent)) / 100 : null;

    let finalDescription 

    descriptionImages && description ? finalDescription = replaceDescriptionImageSrc(description , descriptionImages) : null

    return (
        <div className="px-5 py-5 md:px-7">
            <div className='flex flex-col lg:flex-row w-full h-fit gap-8'>
                <PropertyGallery className='lg:w-5/12 p-4 rounded-xl border border-gray-200 bg-primary-0' images={[...images , ...images]} thumbnail={thumbnail}  description={description} id={_id} />
                <div className='border border-gray-200 bg-primary-0 flex-1 rounded-xl p-4 '>
                    <h1 className='text-Bold-Normal-text-1'>{title}</h1>
                    <h2 className='text-Bold-Normal-text-2 text-Neutral-700 mt-1'>{englishTitle}</h2>
                    <p className='my-3 flex items-center gap-x-2 text-Bold-Normal-text-2'>برند:<span className='text-Secondary-500'>{brand}</span></p>
                    <div className='mt-8 grid grid-cols-2 gap-4 text-Bold-Normal-text-2 text-neutral-900'>
                        <div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 items-center rounded-xl col-span-2'>
                            <p>رنگبندی:</p>
                            <div className="flex gap-x-2 items-center">
                                {colors.map((col: string, index: number) => (
                                    <div
                                        key={index}
                                        style={{ backgroundColor: col }}
                                        className="w-5 h-5 hover:w-6 hover:h-6 rounded-full shadow-sm"
                                    />
                                ))}
                            </div>
                        </div>
                        <div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                            <p>قیمت:</p>
                            <p>{formatPriceWithSlash(+price.toLocaleString())} تومان</p>
                        </div>
                        <div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                            <p>تعداد:</p>
                            <p>{quantity}</p>
                        </div>
                        {
                            discount.haveDiscount ?<div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                                <p>درصد تخفیف:</p>
                                <p>{discount.discountPercent}%</p>
                            </div> : null
                        }
                        {
                            discount.haveDiscount && discountedPrice ? <div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                                <p>قیمت با تخفیف:</p>
                                <p>{formatPriceWithSlash(+discountedPrice?.toLocaleString())} تومان</p>
                            </div> : null
                        }
                    </div>
                    <div className=' mt-12 flex gap-x-2'>
                        <h3 className='text-Bold-Normal-text-2 text-Secondary-500'>توضیحات:</h3>
                        <p className='text-Regular-Caption-1'>{shortDescription}</p>
                    </div>
                </div>
            </div>
            <div className='border border-gray-200 bg-primary-0 rounded-xl mt-6 p-4' >
                <h2 className='text-Bold-Normal-text-1 mb-4'>توضیحات محصول:</h2>
                <ul className='flex flex-col gap-4'>
                    {
                        extraInformation.map((info: Product_ExtraInformation_interface , index : number) => <li className='grid gap-x-5 grid-cols-5' key={index}>
                            <p className='py-2 px-3 col-span-2 bg-primary-200/65 rounded-md'>{info.key}</p>
                            <p className='py-2 px-3 col-span-3 bg-primary-200/65 rounded-md'>{info.value}</p>
                        </li>)
                    }
                </ul>
            </div>
            <div className='border border-gray-200 bg-primary-0 rounded-xl mt-6 p-4' >
                <h2 className='text-Bold-Normal-text-1 mb-4'>ویژگی ها:</h2>
                <div className="w-full">
                    <div
                        className="
                            prose 
                            prose-img:mx-auto 
                            prose-img:rounded-xl 
                            prose-img:w-2/3
                            prose-ul:list-disc 
                            prose-ol:list-decimal 
                            prose-ul:pl-5 
                            prose-ol:pl-5 
                            prose-li:marker:text-black 
                            max-w-none
                        "
                        dangerouslySetInnerHTML={{ __html: finalDescription || "" }}
                    />
                </div>
            </div>
            <div className='border border-gray-200 bg-primary-0 rounded-xl mt-6 p-4' >
                <h2 className='text-Bold-Normal-text-1 mb-4'>دیگر ویژگی ها:</h2>
                <ul className='flex flex-col gap-4'>
                    <li className='grid gap-x-5 grid-cols-5'>
                            <p className='py-2 px-3 col-span-2 bg-primary-200/65 rounded-md'>وزن</p>
                            <p dir='ltr' className='py-2 px-3 col-span-3 bg-primary-200/65 rounded-md'>{`${weight} kg`}</p>
                    </li>
                    <li className='grid gap-x-5 grid-cols-5'>
                            <p className='py-2 px-3 col-span-2 bg-primary-200/65 rounded-md'>طول جعبه</p>
                            <p dir='ltr' className='py-2 px-3 col-span-3 bg-primary-200/65 rounded-md'>{`${dimensions?.height} cm`}</p>
                    </li>
                    <li className='grid gap-x-5 grid-cols-5'>
                            <p className='py-2 px-3 col-span-2 bg-primary-200/65 rounded-md'>عرض جعبه</p>
                            <p dir='ltr' className='py-2 px-3 col-span-3 bg-primary-200/65 rounded-md'>{`${dimensions?.width} cm`}</p>
                    </li>
                    <li className='grid gap-x-5 grid-cols-5'>
                            <p className='py-2 px-3 col-span-2 bg-primary-200/65 rounded-md'>عمق جعبه</p>
                            <p dir='ltr' className='py-2 px-3 col-span-3 bg-primary-200/65 rounded-md'>{`${dimensions?.depth} cm`}</p>
                    </li>
                </ul>
            </div>
            <div className='border border-gray-200 bg-primary-0 rounded-xl mt-6 p-4' >
                <h2 className='text-Bold-Normal-text-1 mb-4'>اکشن ها:</h2>
                <ul className='flex items-center gap-x-2'>
                    <li><DeleteProduct id={_id || ''} /></li>
                    <li><Link href={`/dashboard/products/edit/${_id}`} className="bg-primary-300 hover:bg-primary-600 text-primary-800 hover:text-primary-50 w-fit text-Regular-Normal-text-2 px-2 py-1 rounded-md cursor-pointer" >ویرایش</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default ProdutsDetailsPage;