import { Product_interface } from "@/types/modelTypes";
import { useQuery } from "@tanstack/react-query";

interface ProductResponse {
  product: Product_interface;
}

const fetchProducts = async (ProductId : string): Promise<ProductResponse> => {
  const res = await fetch(`/api/product/${ProductId}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
};


const useproduct = (ProductId : string) => {

  return useQuery({
        queryKey: ["product", ProductId ],
        queryFn: () => fetchProducts(ProductId),
        staleTime: 1000 * 60 * 5, // 5 min
        gcTime: 1000 * 60 * 10 // 10 min
    });
};

export default useproduct;