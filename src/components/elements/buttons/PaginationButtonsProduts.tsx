"use client";

import { useRouter, useSearchParams } from "next/navigation";

interface PaginationButtonsProps {
  currentPage: number;
  totalPages: number;
}

const PaginationButtonsProducts: React.FC<PaginationButtonsProps> = ({
  currentPage,
  totalPages,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`?${params.toString()}`, { scroll: false }); // ✅ بدون ریلود
  };

  return (
    <div className="flex items-center justify-center gap-x-4 mt-6 text-xs md:text-base">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-Secondary-300 hover:bg-Secondary-100 text-Secondary-0 rounded disabled:bg-Greyscale-400 hover:cursor-pointer disabled:hover:cursor-not-allowed"
      >
        قبل
      </button>
      <span>
        {currentPage} از {totalPages}
      </span>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-Secondary-300 hover:bg-Secondary-100 text-Secondary-0 rounded disabled:bg-Greyscale-400 hover:cursor-pointer disabled:hover:cursor-not-allowed"
      >
        بعد
      </button>
    </div>
  );
};

export default PaginationButtonsProducts;