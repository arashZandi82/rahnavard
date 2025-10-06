"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import INPUT from "../INPUT";
import { LuListFilter } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { MdOutlineFilterListOff } from "react-icons/md";
import Link from "next/link";
import { GrPowerReset } from "react-icons/gr";
import { TiArrowSortedDown } from "react-icons/ti";
import { ProductStatus } from "@/types/enums/generalEnums";


const ProductsPagesFilterSection = ({ PATH , brands }: { PATH: string  , brands:string[]}) => {
    const searchParams = useSearchParams();
    const router = useRouter();


    const initialFilters = {
        search: searchParams.get("search") || "",
        status: searchParams.get("status") || "",
        minPrice: searchParams.get("minPrice") || "",
        maxPrice: searchParams.get("maxPrice") || "",
        sortBy: searchParams.get("sortBy") || "date",
        sort: searchParams.get("sort") || "desc",
        isFeatured: searchParams.get("isFeatured") || "",
        isNew: searchParams.get("isNew") || "",
        brand: searchParams.get("brand") || "",
    };

    const [filters, setFilters] = useState(initialFilters);
    const [ openMore , setOpenMore ] = useState<boolean>(false)

    const OpenHandler = () => setOpenMore( !openMore ) 


    const changeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = event.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        const query: Record<string, string> = {};

        Object.entries(filters).forEach(([key, val]) => {
        if (val && val !== "") query[key] = val;
        });

        OpenHandler()

        router.push(`${PATH}?${new URLSearchParams(query).toString()}`);
    };


    const resetFilters = () => {
        setFilters({
        search: "",
        status: "",
        minPrice: "",
        maxPrice: "",
        sortBy: "date",
        sort: "desc",
        isFeatured: "",
        isNew: "",
        brand : ""
        });
        router.push(PATH);
    };

    const selectStyle = "w-full ml-6 appearance-none !text-Regular-Caption-1 px-3 !py-2 border border-Neutral-400 rounded-lg focus:text-Neutral-900 focus:border-Neutral-900 focus:outline-none bg-white";

    return (
        <div className="bg-Neutral-200 p-2 xl:mx-36 border lg:w-fit  border-Greyscale-100 rounded-2xl">
            <div className=" lg:flex lg:gap-x-2 items-center ">
                <div className="flex flex-col lg:flex-1  lg:flex-row lg:gap-y-0 gap-y-2 lg:gap-x-2">
                    <INPUT
                        name="search"
                        type="text"
                        value={filters.search}
                        placeholder="جستجو."
                        changeHandler={changeHandler}
                        label=""
                        error=""
                        textarea={false}
                        style="!px-3 !py-2 !min-w-52 !text-Regular-Caption-1"
                    />
                    <div className="relative inline-block">
                        <select
                            name="brand"
                            value={filters.brand}
                            onChange={changeHandler}
                            className={selectStyle}
                        >
                            <option value="">برند</option>
                            {brands.map((br , index) => (
                                <option key={index} value={br}>
                                {br}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                            <TiArrowSortedDown/>
                        </div>
                    </div>
                    <div className="relative inline-block">
                        <select
                            name="isFeatured"
                            value={filters.isFeatured}
                            onChange={changeHandler}
                            className={selectStyle}
                        >
                            <option value="">ویژه؟</option>
                            <option value="true">بله</option>
                            <option value="false">خیر</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                            <TiArrowSortedDown/>
                        </div>
                    </div>

                    <div className="relative inline-block">
                        <select
                            name="isNew"
                            value={filters.isNew}
                            onChange={changeHandler}
                            className={selectStyle}
                        >
                            <option value="">جدید؟</option>
                            <option value="true">بله</option>
                            <option value="false">خیر</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                            <TiArrowSortedDown/>
                        </div>
                    </div>
                     {
                        openMore && <div className="lg:hidden flex flex-col gap-y-2">
                            <div className="relative inline-block">
                                <select
                                    name="status"
                                    value={filters.status}
                                    onChange={changeHandler}
                                    className={selectStyle}
                                >
                                    <option value="">وضعیت</option>
                                    {Object.entries(ProductStatus).map(([key, val]) => (
                                        <option key={key} value={val}>
                                        {val}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                                    <TiArrowSortedDown/>
                                </div>
                            </div>
                            <INPUT
                                name="minPrice"
                                value={filters.minPrice}
                                placeholder="حداقل قیمت"
                                changeHandler={changeHandler}
                                type="number"
                                label=""
                                error=""
                                textarea={false}
                                style="!px-3 !py-2 !text-Regular-Caption-1"
                            />
                            <INPUT
                                name="maxPrice"
                                value={filters.maxPrice}
                                placeholder="حداکثر قیمت"
                                changeHandler={changeHandler}
                                type="number"
                                label=""
                                error=""
                                textarea={false}
                                style="!px-3 !py-2 !text-Regular-Caption-1"
                            />

                            <div className="relative inline-block">
                                <select
                                    name="sortBy"
                                    value={filters.sortBy}
                                    onChange={changeHandler}
                                    className={selectStyle}
                                >
                                    <option value="date">تاریخ</option>
                                    <option value="price">قیمت</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                                    <TiArrowSortedDown/>
                                </div>
                            </div>

                            <div className="relative inline-block">
                                <select
                                    name="sort"
                                    value={filters.sort}
                                    onChange={changeHandler}
                                    className={selectStyle}
                                >
                                    <option value="desc">نزولی</option>
                                    <option value="asc">صعودی</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                                    <TiArrowSortedDown/>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="mt-2 lg:mt-0 flex flex-col !text-Bold-Caption-1 lg:flex-row lg:gap-y-0 gap-y-2 lg:gap-x-2">
                    { openMore && <button onClick={resetFilters} className=" lg:hidden flex justify-center items-center gap-x-1 p-2 w-full rounded-xl border border-Neutral-800 hover:bg-Neutral-300 hover:text-Neutral">
                                        <span><GrPowerReset /></span>
                                        <span className="text-Body-MD-Small">ریست</span>
                                    </button>}
                    <button onClick={OpenHandler} className=" lg:min-w-40 flex justify-center items-center gap-x-1 p-2 w-full rounded-xl border border-Neutral-800 hover:bg-Neutral-800 hover:text-Neutral-200">
                        <span>{ openMore ? <MdOutlineFilterListOff /> : <LuListFilter />}</span>
                        <span className="text-Body-MD-Small">فیلتر ها</span>
                    </button>
                    <button
                    onClick={applyFilters}
                    className="flex lg:min-w-40 justify-center items-center gap-x-1 p-2 w-full rounded-xl border bg-Neutral-800 border-Neutral-800 text-Neutral-200 hover:bg-Neutral-700">
                        <span><IoSearch /></span>
                        <span className="text-Body-MD-Small">جستجو</span>
                    </button>
                </div>
            </div>
            {
                openMore && <div className="lg:flex hidden lg:mt-2 flex-col gap-y-2">
                    <div className="relative inline-block">
                        <select
                            name="status"
                            value={filters.status}
                            onChange={changeHandler}
                            className={selectStyle}
                        >
                            <option value="">وضعیت</option>
                            {Object.entries(ProductStatus).map(([key, val]) => (
                                <option key={key} value={val}>
                                {val}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                            <TiArrowSortedDown/>
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 gap-x-2 w-full">
                        <INPUT
                                name="minPrice"
                                value={filters.minPrice}
                                placeholder="حداقل قیمت"
                                changeHandler={changeHandler}
                                type="number"
                                label=""
                                error=""
                                textarea={false}
                                style="!px-3 !py-2 !text-Regular-Caption-1"
                            />
                            <INPUT
                                name="maxPrice"
                                value={filters.maxPrice}
                                placeholder="حداکثر قیمت"
                                changeHandler={changeHandler}
                                type="number"
                                label=""
                                error=""
                                textarea={false}
                                style="!px-3 !py-2 !text-Regular-Caption-1"
                            />
                    </div>
                    <div className=" grid grid-cols-2 gap-x-2 w-full">
                        <div className="relative inline-block">
                            <select
                                name="sortBy"
                                value={filters.sortBy}
                                onChange={changeHandler}
                                className={selectStyle}
                            >
                                <option value="date">تاریخ</option>
                                <option value="price">قیمت</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                                <TiArrowSortedDown/>
                            </div>
                        </div>
                        <div className="relative inline-block">
                            <select
                                name="sort"
                                value={filters.sort}
                                onChange={changeHandler}
                                className={selectStyle}
                            >
                                <option value="desc">نزولی</option>
                                <option value="asc">صعودی</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                                <TiArrowSortedDown/>
                            </div>
                        </div>
                    </div>
                    <button onClick={resetFilters} className="flex justify-center !text-Bold-Caption-1  items-center gap-x-1 p-2 w-full rounded-xl border border-Neutral-800 hover:bg-Neutral-800 hover:text-Neutral-300">
                        <span><GrPowerReset /></span>
                        <span className="text-Body-MD-Small">ریست</span>
                     </button>
                </div>
            }
        </div>
    );
};

export default ProductsPagesFilterSection;