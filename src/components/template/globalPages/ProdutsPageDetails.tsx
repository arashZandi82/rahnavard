"use client"

import Loader from "@/elements/Loader";
import PropertyGallery from "@/module/PropertyGallery";
import { Product_ExtraInformation_interface } from "@/types/modelTypes";
import { replaceDescriptionImageSrc } from "@/utils/BlogDescriptionImageHandler";
import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import useproduct from "src/hook/useproduct";
import { CiSquareMinus } from "react-icons/ci";


const ProdutsPageDetails = ({productId}:{productId: string}) => {

    const { data, isLoading, isError } = useproduct(productId);

    const [ amount , setAmount ] = useState<number>(1)
    const [ selectedColor , setColor ] = useState<number>(0)

    if (isLoading) return(<div className='flex items-center py-16 md:py-20 lg:py-40 md:px-7 justify-center h-screen'><Loader w={60} /></div>);
    if (isError || !data?.product || !data?.product?.images ) return(<div className='flex items-center justify-center h-full'><p>Something went wrong</p></div>);

    const { _id , title , englishTitle ,brand , shortDescription ,  description ,thumbnail , images , descriptionImages ,extraInformation , weight  , dimensions} = data?.product
    const { colors , price ,discount , quantity } = data?.product?.information

    const discountedPrice = discount.haveDiscount ? (price * (100 - discount.discountPercent)) / 100 : null;

    let finalDescription 

    descriptionImages && description ? finalDescription = replaceDescriptionImageSrc(description , descriptionImages) : null

    const amountHandler = (action : "+" | "-") => {
        if( action === "+" && amount != quantity ){
            setAmount( amount + 1)
        } else if ( amount != 1 ){
            setAmount( amount - 1)
        }
    }

    return (
        <div className="px-5 py-24 md:py-32 lg:py-40 md:px-7">
            <div className='flex flex-col lg:flex-row w-full h-fit gap-8'>
                <PropertyGallery className='lg:w-5/12 p-4 rounded-xl border border-gray-200 bg-primary-0' images={[...images , ...images]} thumbnail={thumbnail}  description={description} id={_id} />
                <div className='border border-gray-200 bg-primary-0 flex-1 rounded-xl p-4 '>
                    <h1 className='text-Bold-Normal-text-1'>{title}</h1>
                    <h2 className='text-Bold-Normal-text-2 text-Neutral-700 mt-1'>{englishTitle}</h2>
                    <p className='my-3 flex items-center gap-x-2 text-Bold-Normal-text-2'>برند:<span className='text-Secondary-500'>{brand}</span></p>
                    <div className='mt-8 grid md:grid-cols-2 grid-cols-1 gap-4 lg:text-Bold-Normal-text-2 text-Bold-Caption-1 text-neutral-900'>
                        <div className=' bg-Neutral-300 flex gap-x-2 py-3 px-4 w-full items-center rounded-xl col-span-2'>
                            <p>رنگبندی:</p>
                            <div className="flex gap-x-2 items-center">
                                {colors.map((col: string, index: number) => (
                                    <div
                                        key={index}
                                        style={{ backgroundColor: col  }}
                                        onClick={() => setColor(index)}
                                        className={`w-5 h-5 rounded-full shadow-sm ${index == selectedColor ? `ring-2 ring-Neutral-400 border` : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                        {
                            discount.haveDiscount && discountedPrice ? <div className=' bg-Neutral-300 col-span-2 lg:col-span-1 flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                                <p>قیمت :</p>
                                <p>{discountedPrice?.toLocaleString()} تومان</p>
                            </div> :  <div className=' bg-Neutral-300 col-span-2 lg:col-span-1  flex gap-x-2 py-3 px-4 items-center rounded-xl'>
                                <p>قیمت:</p>
                                <p>{price.toLocaleString()} تومان</p>
                            </div>
                        }
                        <div className="py-1 px-4 rounded-xl border-2 border-Secondary-500 lg:col-span-1 col-span-2 flex items-center justify-center gap-x-3">
                            <button onClick={()=> amountHandler("+")} disabled={amount == quantity} className="text-3xl hover:text-Secondary-300 disabled:hover:text-3xl disabled:text-Secondary-700 disabled:cursor-not-allowed text-Secondary-600"><CiSquarePlus/></button>
                            <p className="text-Regular-Normal-text-1">{amount}</p>
                            <button onClick={()=> amountHandler("-")} disabled={amount == 1} className="text-3xl hover:text-Secondary-300 disabled:hover:text-3xl disabled:text-Secondary-700 disabled:cursor-not-allowed text-Secondary-600"><CiSquareMinus/></button>
                        </div>
                        <button className="bg-Secondary-500 hover:bg-Secondary-400 hover:shadow-md py-3 px-4 rounded-xl col-span-2">افزودن به سبد خرید</button>
                    </div>
                    <div className=' mt-12 flex gap-x-2'>
                        <h3 className='text-Bold-Normal-text-2 text-Secondary-500'>توضیحات:</h3>
                        <p className='text-Regular-Caption-1'>{shortDescription}</p>
                    </div>
                </div>
            </div>
            <div className='border border-gray-200 bg-primary-0 rounded-xl mt-6 p-4' >
                <h2 className='text-Bold-Normal-text-1 mb-4'>توضیحات محصول:</h2>
                <ul className='flex flex-col gap-4 text-Regular-Caption-1 md:text-Regular-Normal-text-2 lg:text-Regular-Normal-text-1'>
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
                <ul className='flex flex-col gap-4 text-Regular-Caption-1 md:text-Regular-Normal-text-2 lg:text-Regular-Normal-text-1'>
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
        </div>
    );
};

export default ProdutsPageDetails;