"use client";
import React, { useState, useMemo, ChangeEvent } from "react";
import { navItems } from "@/constants/NavbarItems";
import INPUT from "../INPUT";
import { TiArrowSortedDown } from "react-icons/ti";
import { ProductStatus } from "@/types/enums/generalEnums";

interface Props {
  data: any;
  changeHandler: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  DATA_Error: any;
}

const Basicform = ({ data, changeHandler, handleCategoryChange, DATA_Error }: Props) => {
    const { title, englishTitle, brand, category , status } = data;

    // State for selected levelOne
    const [selectedLevelOne, setSelectedLevelOne] = useState(category?.levelOne || "");

    // Filter levelTwo options based on levelOne
    const levelTwoOptions = useMemo(() => {
        const parent = navItems.find((item: any) => item.name === selectedLevelOne);
        return parent ? parent.children : [];
    }, [selectedLevelOne]);

    const produtsStatus = Object.values(ProductStatus);

    // Shared select style (similar to INPUT)
    const selectStyle = "w-full appearance-none text-Regular-Normal-text-2 p-3 border border-Neutral-400 rounded-lg focus:text-Neutral-900 focus:border-Neutral-900 focus:outline-none bg-white";

    return (
        <div className="lg:w-1/2 mt-8 flex flex-col gap-y-5">
            {/* Title in Persian */}
            <INPUT
                label="تایتل فارسی:"
                type="text"
                name="title"
                value={title}
                placeholder="تایتل را وارد کنید"
                changeHandler={changeHandler}
                textarea={false}
                error={DATA_Error?.title || ""}
            />

            {/* Title in English */}
            <INPUT
                label="تایتل انگلیسی:"
                type="text"
                name="englishTitle"
                value={englishTitle}
                placeholder="تایتل را وارد کنید"
                changeHandler={changeHandler}
                textarea={false}
                error={DATA_Error?.englishTitle || ""}
            />

            {/* Brand */}
            <INPUT
                label="برند محصول:"
                type="text"
                name="brand"
                value={brand}
                placeholder="برند را وارد کنید"
                changeHandler={changeHandler}
                textarea={false}
                error={DATA_Error?.brand || ""}
            />

            {/* Level One (Parent Category) */}
            <div className="flex flex-col gap-y-2 text-Regular-Normal-text-1">
                <label className="">{`دسته‌بندی سطح یک`}</label>
                <div className="relative inline-block">
                    <select
                        name="category.levelOne" 
                        value={selectedLevelOne}
                        className={selectStyle}
                        onChange={(e) => {
                            setSelectedLevelOne(e.target.value);
                            handleCategoryChange(e); // use separate handler
                        }}
                    >
                        <option value="">انتخاب کنید</option>
                        {navItems.map((item) => (
                            <option key={item.name} value={item.name} className="text-Regular-Normal-text-2">
                            {item.name}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                        <TiArrowSortedDown/>
                    </div>
                </div>
                {DATA_Error?.category?.levelOne && (
                    <span className="text-Regular-Caption-1 lg:text-Regular-Normal-text-2 ml-4 text-Error-400">
                        {DATA_Error.category.levelOne}
                    </span>
                )}
            </div>

            {/* Level Two (Child Category) */}
            {category.levelOne && (
                <div className="flex flex-col gap-y-2 text-Regular-Normal-text-1">
                    <label className="">{`دسته‌بندی سطح دو`}</label>
                    <div className="relative inline-block">
                        <select
                            name="category.levelTwo"
                            value={category?.levelTwo || ""}
                            onChange={handleCategoryChange} // use separate handler
                            className={selectStyle}
                            disabled={!selectedLevelOne}
                        >
                            <option value="">انتخاب کنید</option>
                            {levelTwoOptions.map((child: any) => (
                                <option key={child.name} value={child.name} className="text-Regular-Normal-text-2">
                                    {child.name}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                            <TiArrowSortedDown/>
                        </div>
                    </div>
                    {DATA_Error?.category?.levelTwo && (
                        <span className="text-Regular-Caption-1 lg:text-Regular-Normal-text-2 ml-4 text-Error-400">
                        {DATA_Error.category.levelTwo}
                        </span>
                    )}
                </div>
            )}
            <div className="flex flex-col gap-y-2 text-Regular-Normal-text-1">
                <label className="">وضیعت محصول</label>
                <div className="relative inline-block">
                    <select
                        name="status" 
                        value={status}
                        className={selectStyle}
                        onChange={changeHandler}
                    >
                        <option value="">انتخاب کنید</option>
                        {produtsStatus.map((item) => (
                            <option key={item} value={item} className="text-Regular-Normal-text-2">
                            {item}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-300">
                        <TiArrowSortedDown/>
                    </div>
                </div>
                {DATA_Error?.category?.levelOne && (
                    <span className="text-Regular-Caption-1 lg:text-Regular-Normal-text-2 ml-4 text-Error-400">
                        {DATA_Error.status}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Basicform;