"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Product_interface } from "@/types/modelTypes";

interface ProductsResponse {
  products: Product_interface[];
  pagination: {
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    limit: number;
  };
}
const fetchProducts = async (page: string, limit: number, searchParams: URLSearchParams) => {
  const query = searchParams.toString();
  const res = await fetch(`/api/product?page=${page}&limit=${limit}&${query}`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const useProducts = (page: string, limit: number , searchParams : URLSearchParams) => {

  const queryString = searchParams.toString();

  return useQuery({
    queryKey: ["products", page, queryString],
    queryFn: () => fetchProducts(page, limit, searchParams),
     placeholderData: keepPreviousData,// ✅ نسخه 5 به بعد
    // staleTime: 5 * 60 * 1000,
  });
};