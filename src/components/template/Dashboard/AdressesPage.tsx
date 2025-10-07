"use client"

import INPUT from '@/elements/INPUT';
import Loader from '@/elements/Loader';
import { ERROR } from '@/types/enums/MessageUnum';
import { User_address_interface } from '@/types/modelTypes';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';


const AdressesPage = ({adresses , id} : {adresses: User_address_interface[] , id:string}) => {

    const hasMounted = useRef(false);
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    const [ showForm , setShowForm ] = useState<boolean>(false)
    const [ data , setData] = useState<User_address_interface>({
        title : '' ,
        estate: '',           
        city: '',        
        text_address: '',      
        postalCode: ''
    })

    const [ DATA_Error , setDataError] = useState<User_address_interface>({
        title : '' ,
        estate: '',           
        city: '',        
        text_address: '',      
        postalCode: ''
    })

    const showHandler = () => setShowForm(!showForm)

    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });        
    };
    
    const { title , estate , city , postalCode , text_address} = data

    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return;
        }

        setDataError(prev => ({
            ...prev,
            title: title ? '' : ERROR.REQUIRED_FIELD,
            estate: estate ? '' : ERROR.REQUIRED_FIELD,
            city: city ? '' : ERROR.REQUIRED_FIELD,
            postalCode: postalCode ? '' : ERROR.REQUIRED_FIELD,
            text_address: text_address ? '' : ERROR.REQUIRED_FIELD
        }));
    }, [data]);

    const addAdressHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        
        const formData = new FormData();
        formData.append("data", JSON.stringify({
            title  ,
            estate,           
            city,        
            text_address,      
            postalCode,
            _id : id
        }));

        try {
            const response = await axios.patch('/api/auth/adress', formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const resData = response.data;
            setLoading(false);

            if (resData.error) {
                toast.error(resData.error);
            } else {
                toast.success(resData.message);
                window.location.reload();
            }
        } catch (err: any) {
            setLoading(false);
            toast.error(ERROR.PROBLEM);
        }


    }

    return (
        <div className='px-5 py-5 md:px-7'>
            <div className='flex items-center justify-between'>
                <h1 className='text-Bold-Normal-title-2 mb-6'>آدرس ها</h1>
                <p onClick={showHandler} className='px-3 py-2 text-Regular-Caption-1 rounded-lg bg-Secondary-600 cursor-pointer lg:hover:bg-Secondary-500 text-Secondary-100'>{showForm ? 'بستن': 'افزودن آدرس'}</p>
            </div>
            {
                showForm ? <div className='my-5'>
                    <h2 className='text-Bold-Normal-text-1'>آدرس جدید:</h2>
                    <div className="lg:w-1/2 mt-8 flex flex-col gap-y-5 mb-5">

                        <INPUT
                            label="تایتل:"
                            type="text"
                            name="title"
                            value={title}
                            placeholder="تایتل را وارد کنید"
                            changeHandler={changeHandler}
                            textarea={false}
                            error={DATA_Error?.title || ""}
                        />
                        <INPUT
                            label="استان:"
                            type="text"
                            name="estate"
                            value={estate}
                            placeholder="استان را وارد کنید"
                            changeHandler={changeHandler}
                            textarea={false}
                            error={DATA_Error?.estate || ""}
                        />
                        <INPUT
                            label="شهر:"
                            type="text"
                            name="city"
                            value={city}
                            placeholder="شهر را وارد کنید"
                            changeHandler={changeHandler}
                            textarea={false}
                            error={DATA_Error?.city || ""}
                        />
                        <INPUT
                            label="آدرس:"
                            type="text"
                            name="text_address"
                            value={text_address}
                            placeholder="آدرس را وارد کنید"
                            changeHandler={changeHandler}
                            textarea={true}
                            error={DATA_Error?.text_address || ""}
                        />
                        <INPUT
                            label="کدپستی:"
                            type="text"
                            name="postalCode"
                            value={postalCode}
                            placeholder="کد پستی را وارد کنید"
                            changeHandler={changeHandler}
                            textarea={false}
                            error={DATA_Error?.postalCode || ""}
                        />
                    </div>
                    {loading ? (
                            <Loader />
                        ) : (
                            <button
                                onClick={addAdressHandler}
                                className="text-primary-200 bg-primary-600 rounded-xl py-3 text-Bold-Normal-text-2 w-full hover:bg-primary-500"
                            >
                                افزودن
                            </button>
                    )}
                </div> : <div>
                            {
                                adresses.length ? <ul className='grid grid-cols-1 gap-y-3 mt-3'>
                                    {
                                        adresses.map((address : User_address_interface , index : number) => <li className=' rounded-xl bg-primary-200 px-4 py-3 lg:hover:bg-Secondary-100'>
                                            <div>
                                                <p className='text-Bold-Normal-text-1'>{address.title}</p>
                                            </div>
                                            <ul className='mt-4 '>
                                                <li className='flex gap-x-2 items-center'>
                                                    <p className='text-Bold-Normal-text-2'>استان:</p>
                                                    <p className='text-Regular-Caption-1'>{address.estate}</p>
                                                </li>
                                                <li className='flex gap-x-2 items-center'>
                                                    <p className='text-Bold-Normal-text-2'>شهر:</p>
                                                    <p className='text-Regular-Caption-1'>{address.city}</p>
                                                </li>
                                                <li className='flex gap-x-2 items-center'>
                                                    <p className='text-Bold-Normal-text-2'>کدپستی:</p>
                                                    <p className='text-Regular-Caption-1'>{address.postalCode}</p>
                                                </li>
                                                <li className='flex gap-x-2 items-center'>
                                                    <p className='text-Bold-Normal-text-2'>آدرس:</p>
                                                    <p className='text-Regular-Caption-1'>{address.text_address}</p>
                                                </li>
                                            </ul>
                                        </li>)
                                    }
                                </ul> : <div>
                                    <p>آدرسی یافت نشد!</p>
                                </div>
                            }
                        </div>
            }
        </div>
    );
};

export default AdressesPage;