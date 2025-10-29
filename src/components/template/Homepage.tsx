"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import ProductCardSkeleton from "@/elements/cards/ProductCardSkeleton";
import ProductCard from "@/elements/cards/ProductCard";
import BlogCard from "@/elements/cards/BlogCard";
import { Blog_Interface } from "@/types/modelTypes";

const Homepage = () => {
  const [currentSlideproduct, setCurrentSlideproduct] = useState(0);
  const [currentSlideblog, setCurrentSlideblog] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    products: [],
    blogs: [],
    authors: [],
  });

  // --- Product Slider ---
  const [sliderRefproduct, instanceRefproduct] = useKeenSlider({
    loop: false,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
    slideChanged(slider) {
      setCurrentSlideproduct(slider.track.details.rel);
    },
  });

  // --- Blog Slider ---
  const [sliderRefblog, instanceRefblog] = useKeenSlider({
    loop: false,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": { slides: { perView: 2, spacing: 20 } },
      "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
    },
    slideChanged(slider) {
      setCurrentSlideblog(slider.track.details.rel);
    },
  });

  const isFirstSlideproduct = currentSlideproduct === 0;
  const isLastSlideproduct =
    instanceRefproduct.current?.track.details &&
    currentSlideproduct >= instanceRefproduct.current.track.details.maxIdx;

  const isFirstSlideblog = currentSlideblog === 0;
  const isLastSlideblog =
    instanceRefblog.current?.track.details &&
    currentSlideblog >= instanceRefblog.current.track.details.maxIdx;

  // --- Fetch Data ---
  useEffect(() => {
    const fetchdata = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/homeGet");
        if (!res.ok) throw new Error("Failed to fetch homepage data");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching homepage data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="flex flex-col gap-y-12">
      {/* محصولات */}
      <section className="bg-Secondary-300 p-6 rounded-md overflow-x-hidden">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-6">
            <div>
            <h2 className="text-Bold-Normal-text-2 lg:text-Bold-Normal-title-3">
                محصولات منتخب
            </h2>
            <p className="lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2 mt-2 text-GrayScale-700">
                مجموعه‌ای از محبوب‌ترین تجهیزات کوهنوردی و کمپینگ از برندهای معتبر.
            </p>
            </div>
            <div className="flex gap-x-3 text-lg">
            <button
                disabled={isFirstSlideproduct}
                onClick={() => instanceRefproduct.current?.prev()}
                className={`p-2 border rounded-full ${
                isFirstSlideproduct
                    ? "border-Neutral-300 bg-Neutral-300"
                    : "bg-neutral-50 border-neutral-50"
                }`}
            >
                <HiArrowNarrowRight />
            </button>
            <button
                onClick={() => instanceRefproduct.current?.next()}
                disabled={isLastSlideproduct}
                className={`p-2 border rounded-full ${
                isLastSlideproduct
                    ? "border-Neutral-300 bg-Neutral-300"
                    : "bg-neutral-50 border-neutral-50"
                }`}
            >
                <HiArrowNarrowLeft />
            </button>
            </div>
        </header>

        <div ref={sliderRefproduct} className="keen-slider mt-10 overflow-hidden">
            {loading
            ? [...Array(3)].map((_, i) => (
                <div key={i} className="keen-slider__slide flex justify-center">
                    <div className="w-full max-w-[360px]">
                    <ProductCardSkeleton />
                    </div>
                </div>
                ))
            : data.products.map((product, index) => (
                <div key={index} className="keen-slider__slide flex justify-center">
                    <div className="w-full max-w-[360px]">
                    <ProductCard product={product} />
                    </div>
                </div>
                ))}
        </div>
        </section>

      {/* بلاگ‌ها */}
      <section className="bg-primary-300 p-6 rounded-md">
        <header className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-6">
          <div>
            <h2 className="text-Bold-Normal-text-2 lg:text-Bold-Normal-title-3">
              آخرین مقالات
            </h2>
            <p className="lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2 mt-2 text-GrayScale-700">
              نکات و تجربه‌های واقعی از سفر، کمپینگ و کوهنوردی را در بلاگ رهنورد بخوانید.
            </p>
          </div>

          <div className="flex gap-x-3 text-lg">
            <button
              disabled={isFirstSlideblog}
              onClick={() => instanceRefblog.current?.prev()}
              className={`p-2 border rounded-full ${
                isFirstSlideblog
                  ? "border-Neutral-300 bg-Neutral-300"
                  : "bg-neutral-50 border-neutral-50"
              }`}
            >
              <HiArrowNarrowRight />
            </button>
            <button
              onClick={() => instanceRefblog.current?.next()}
              disabled={isLastSlideblog}
              className={`p-2 border rounded-full ${
                isLastSlideblog
                  ? "border-Neutral-300 bg-Neutral-300"
                  : "bg-neutral-50 border-neutral-50"
              }`}
            >
              <HiArrowNarrowLeft />
            </button>
          </div>
        </header>

        <div ref={sliderRefblog} className="keen-slider mt-10">
          {loading
            ? [...Array(3)].map((_, i) => (
                <div key={i} className="keen-slider__slide !min-w-0">
                  <ProductCardSkeleton />
                </div>
              ))
            : data.blogs.map((bl: Blog_Interface, index: number) => {
                const author =
                  data.authors.find(
                    (user: any) =>
                      user._id.toString() === bl.autor_id.toString()
                  ) || null;

                return (
                  <div key={index} className="keen-slider__slide !min-w-0">
                    <BlogCard blog={bl} author={author} />
                  </div>
                );
              })}
        </div>
      </section>
    </div>
  );
};

export default Homepage;