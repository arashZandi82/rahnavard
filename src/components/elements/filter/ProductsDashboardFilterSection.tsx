"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import INPUT from "@/elements/INPUT";
import { ProductStatus } from "@/types/enums/generalEnums";

const ProductsDashboardFilterSection = ({ PATH }: { PATH: string }) => {
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
    };
    
    const [filters, setFilters] = useState(initialFilters);

    const changeHandler = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = event.target;
        setFilters((prev) => ({ ...prev, [name]: value }));
    };

    const applyFilters = () => {
        const query: Record<string, string> = {};

        Object.entries(filters).forEach(([key, val]) => {
        if (val && val !== "") query[key] = val;
        });

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
        });
        router.push(PATH);
    };

    const selectStyle = "w-full ml-6 appearance-none !text-Regular-Caption-1 px-3 !py-2 border border-Neutral-400 rounded-lg focus:text-Neutral-900 focus:border-Neutral-900 focus:outline-none bg-white";


  return (
    <div className="mb-6">
        <h4 className="text-Bold-Normal-text-2 mb-3">فیلتر محصولات:</h4>
        <div className="flex flex-wrap gap-3 items-center !text-Regular-Caption-1">
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
                style="!px-3 !py-2 !w-32 !text-Regular-Caption-1"
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
                style="!px-3 !py-2 !w-32 !text-Regular-Caption-1"
            />
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


            {/* Action */}
            <button
            onClick={applyFilters}
            className="bg-primary-600 hover:bg-primary-500 text-primary-100 px-4 py-2 rounded-lg"
            >
            اعمال
            </button>
            <button
            onClick={resetFilters}
            className="bg-Neutral-700 hover:bg-Neutral-600 text-Neutral-100 px-4 py-2 rounded-lg"
            >
            ریست
            </button>
        </div>
    </div>
  );
};

export default ProductsDashboardFilterSection;