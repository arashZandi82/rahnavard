import WaistBagMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/WaistBagMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کیف کمری کوهنوردی | رهنورد",
  description:
    "خرید انواع کیف کمری کوهنوردی سبک، ضدآب و بادوام از فروشگاه رهنورد. مناسب برای حمل وسایل ضروری در سفر، صعود و پیاده‌روی‌های طولانی.",
  keywords: [
    "کیف کمری کوهنوردی",
    "کیف کمری ضدآب",
    "کیف کمری سبک",
    "تجهیزات کوهنوردی",
    "لوازم کوهنوردی",
    "کیف کمری حرفه‌ای",
    "خرید کیف کمری",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "کیف کمری کوهنوردی | رهنورد",
    description:
      "انواع کیف‌های کمری کوهنوردی سبک و مقاوم در برابر رطوبت و سایش، مناسب برای نگهداری وسایل ضروری در مسیرهای کوهستانی.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/waist-bag",
    type: "website",
    images: [
      {
        url: "/img/waist-bag-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "کیف کمری کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "کیف کمری کوهنوردی | رهنورد",
    description:
      "کیف‌های کمری کوهنوردی بادوام و سبک با طراحی ارگونومیک و جیب‌های متعدد. مناسب برای سفرهای ماجراجویانه و استفاده روزمره.",
    images: ["/img/waist-bag-thumbnail.jpg"],
  },
};


const page = () => {
    return (<WaistBagMountaineeringSupplie />);
};

export default page;