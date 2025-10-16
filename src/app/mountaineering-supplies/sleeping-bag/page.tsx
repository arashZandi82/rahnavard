import SleepBagMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/SleepBagMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کیسه خواب کوهنوردی | رهنورد",
  description:
    "خرید انواع کیسه خواب کوهنوردی حرفه‌ای از فروشگاه رهنورد. مدل‌های سبک، فشرده و مقاوم در برابر سرما، مناسب برای ارتفاعات و شرایط سخت کوهنوردی.",
  keywords: [
    "کیسه خواب کوهنوردی",
    "کیسه خواب ضد سرما",
    "کیسه خواب سبک",
    "تجهیزات کوهنوردی",
    "لوازم کوهنوردی",
    "کیسه خواب حرفه‌ای",
    "خرید کیسه خواب",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "کیسه خواب کوهنوردی | رهنورد",
    description:
      "انواع کیسه خواب کوهنوردی سبک و گرم از برندهای معتبر در فروشگاه رهنورد. مناسب برای صعودهای زمستانی، ارتفاعات و سفرهای ماجراجویانه.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/sleeping-bag",
    type: "website",
    images: [
      {
        url: "/img/sleeping-bag-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "کیسه خواب کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "کیسه خواب کوهنوردی | رهنورد",
    description:
      "کیسه خواب‌های کوهنوردی با طراحی ارگونومیک و مقاومت بالا در برابر سرما. مناسب برای صعود، کمپ‌های کوهستانی و سفرهای ماجراجویانه.",
    images: ["/img/sleeping-bag-thumbnail.jpg"],
  },
};

const page = () => {
    return ( <SleepBagMountaineeringSupplie />);
};

export default page;