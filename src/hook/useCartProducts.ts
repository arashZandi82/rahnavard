"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch('/api/auth/cart/getProducts');
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

const useCartProducts = () => {
   
    return useQuery({
    queryKey: ["CartProducts"],
    queryFn: () => fetchProducts(),
    placeholderData: keepPreviousData,
    // staleTime: 5 * 60 * 1000,
    });

}

export default useCartProducts;