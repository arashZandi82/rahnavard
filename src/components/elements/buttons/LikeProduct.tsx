"use client"

import { ERROR } from "@/types/enums/MessageUnum";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../Loader";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const LikeProduct = ({id , isliked}: any) => {

    const [loading, setLoading] = useState(false);

    const likeHandler = async (e: React.FormEvent) =>{
        e.preventDefault();
        setLoading(true);
            
        try {
            // Sending the request to the server
            const res = await fetch(`/api/product/favourite/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
            });

            // Extract response data
            const resData = await res.json();
            setLoading(false);

            // Handle error or success response
            if (resData.error) {
                toast.error(resData.error);
            } else {
                toast.success(resData.message);
                window.location.reload();
            }
        } catch (err: any) {
            setLoading(false);
            const errorMessage = err.response?.data?.error || ERROR.PROBLEM;
            toast.error(errorMessage);
        }
    }

    return (
        <div className="">
        {

            loading ? <Loader w={4} /> : <p onClick={likeHandler} className="flex items-center px-2 py-1 rounded-md  text-lg gap-x-1 md:text-Body-MD-Small text-Error-700 hover:bg-primary-50">{isliked ? <IoIosHeart /> : <IoIosHeartEmpty /> }</p>
                                
        } 
        </div>
    );
};


export default LikeProduct;