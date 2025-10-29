"use client"

import INPUT from "@/elements/INPUT";
import { useState } from "react";
import { IoCall, IoLocationOutline } from "react-icons/io5";


const ContactUsPage = () => {

    const [data , setData] = useState({
        fullname : "",
        emailPhone : "",
        message : ""
    })

    const { fullname , emailPhone , message} = data

    const changeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
        const { name, value, type } = event.target;
        setData((prev) => ({
            ...prev,
            [name]: type === "number" ? Number(value) : value,
        }));
    };

    const clickHandler = ( ) => setData({
        fullname : "",
        emailPhone : "",
        message : ""
    }) 

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-y-3">
                <INPUT
                    label="نام و نام‌خانوادگی"
                    type="text"
                    name="fullname"
                    value={fullname}
                    placeholder= "نام و نام‌خانوداگی را وارد کنید"
                    changeHandler={changeHandler}
                    textarea={false}
                    error={ ''}
                    style={''}
                />
                <INPUT
                    label="ایمیل یا شماره همراه"
                    type="text"
                    name="emailPhone"
                    value={emailPhone}
                    placeholder= "ایمیل یا شماره همراه را وارد کنید"
                    changeHandler={changeHandler}
                    textarea={false}
                    error={ ''}
                    style={''}
                />
                <INPUT
                    label="پیام"
                    type="text"
                    name="message"
                    value={message}
                    placeholder= "پیام را وارد کنید"
                    changeHandler={changeHandler}
                    textarea={true}
                    error={ ''}
                    style={''}
                />
                <button
                    onClick={clickHandler}
                    className="bg-primary-600 hover:bg-primary-700 text-primary-50 rounded-xl py-3 text-Regular-Normal-text-2 w-full "
                >
                    ارسال
                </button>
            </div>
            <div className="p-8">
                <p className="">
                    <div className=" flex items-center gap-x-3">
                        <span className="text-3xl text-primary-500"><IoLocationOutline /></span>
                        <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">آدرس ما:</p>
                    </div>
                    <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                        آدرس: تهران، خیابان ولیعصر، بالاتر از میدان ونک،
                        <br />
                        پلاک ۲۴۵، واحد ۱۲ کد پستی: ۱۹۶۷۸۵۴۷۶۱
                    </p>
                </p>
                <div className="h-[1px] w-full bg-primary-700 my-9"></div>
                <p className="">
                    <div className=" flex items-center gap-x-3">
                        <span className="text-3xl text-primary-500 transform scale-x-[-1]"><IoCall /></span>
                        <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">تماس با ما:</p>
                    </div>
                    <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                        تلفن: ۰۲۱-۸۸۷۷۶۵۴۳                        
                        <br /> 
                        موبایل (پشتیبانی واتساپ/تلگرام): ۰۹۱۲-۳۴۵۶۷۸۹
                        <br />
                        ایمیل: support@mountcamp.ir
                    </p>
                </p>
            </div>
        </div>
    );
};

export default ContactUsPage;