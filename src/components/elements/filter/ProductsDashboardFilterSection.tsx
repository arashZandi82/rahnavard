"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import INPUT from "@/elements/INPUT";
import { ProductStatus } from "@/types/enums/generalEnums";

const ProductsDashboardFilterSection = ({ PATH }: { PATH: string }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // مقدار اولیه فیلترها از روی URL
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

  // تغییر فیلدهای ورودی
  const changeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // دکمه اعمال
  const applyFilters = () => {
    const query: Record<string, string> = {};

    Object.entries(filters).forEach(([key, val]) => {
      if (val && val !== "") query[key] = val;
    });

    router.push(`${PATH}?${new URLSearchParams(query).toString()}`);
  };

  // دکمه ریست
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

  return (
    <div className="mb-6">
      <h4 className="text-Bold-Normal-text-1 mb-3">فیلتر محصولات:</h4>
      <div className="flex flex-wrap gap-3 items-center">
        <INPUT
          name="search"
          type="text"
          value={filters.search}
          placeholder="جستجو..."
          changeHandler={changeHandler}
          label=""
          error=""
          textarea={false}
          style="!px-3 !py-2 !min-w-52"
        />
        <select
            name="status"
            value={filters.status}
            onChange={changeHandler}
            className="px-3 py-2 border rounded-lg"
            >
            <option value="">وضعیت</option>
            {Object.entries(ProductStatus).map(([key, val]) => (
                <option key={key} value={val}>
                {val}
                </option>
            ))}
        </select>
        <INPUT
          name="minPrice"
          value={filters.minPrice}
          placeholder="حداقل قیمت"
          changeHandler={changeHandler}
          type="number"
          label=""
          error=""
          textarea={false}
          style="!px-3 !py-2 !w-32"
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
          style="!px-3 !py-2 !w-32"
        />
        <select
          name="isFeatured"
          value={filters.isFeatured}
          onChange={changeHandler}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">ویژه؟</option>
          <option value="true">بله</option>
          <option value="false">خیر</option>
        </select>

        <select
          name="isNew"
          value={filters.isNew}
          onChange={changeHandler}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="">جدید؟</option>
          <option value="true">بله</option>
          <option value="false">خیر</option>
        </select>

        <select
          name="sortBy"
          value={filters.sortBy}
          onChange={changeHandler}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="date">تاریخ</option>
          <option value="price">قیمت</option>
        </select>

        <select
          name="sort"
          value={filters.sort}
          onChange={changeHandler}
          className="px-3 py-2 border rounded-lg"
        >
          <option value="desc">نزولی</option>
          <option value="asc">صعودی</option>
        </select>

        {/* Action */}
        <button
          onClick={applyFilters}
          className="bg-Secondary-300 text-Secondary-0 px-4 py-2 rounded-lg"
        >
          اعمال
        </button>
        <button
          onClick={resetFilters}
          className="bg-Greyscale-300 text-Greyscale-900 px-4 py-2 rounded-lg"
        >
          ریست
        </button>
      </div>
    </div>
  );
};

export default ProductsDashboardFilterSection;