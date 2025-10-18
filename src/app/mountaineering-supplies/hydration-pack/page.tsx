import HydrationPackMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/HydrationPackMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کمبل بک کوهنوردی | رهنورد",
  description:
    "خرید انواع کمبل‌بک و کوله پشتی آبرسان کوهنوردی از فروشگاه رهنورد. مناسب برای مسیرهای طولانی، دوچرخه‌سواری، صعودهای کوهستانی و فعالیت‌های ماجراجویانه.",
  keywords: [
    "کمبل بک کوهنوردی",
    "کوله پشتی آبرسان",
    "کیسه آب کوهنوردی",
    "تجهیزات کوهنوردی",
    "لوازم کوهنوردی",
    "کمبل بک حرفه‌ای",
    "خرید کمبل بک",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "کمبل بک کوهنوردی | رهنورد",
    description:
      "انواع کمبل‌بک و کیسه‌های آب کوهنوردی سبک و مقاوم در برابر فشار و نشت، مناسب برای کوه‌پیمایی و دوچرخه‌سواری در فروشگاه رهنورد.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/camelbak",
    type: "website",
    images: [
      {
        url: "/img/camelbak-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "کمبل بک کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "کمبل بک کوهنوردی | رهنورد",
    description:
      "خرید کمبل‌بک‌های حرفه‌ای کوهنوردی با طراحی ارگونومیک و جنس بادوام. گزینه‌ای ایده‌آل برای حمل آب در سفرهای طولانی و مسیرهای کوهستانی.",
    images: ["/img/camelbak-thumbnail.jpg"],
  },
};

const page = () => {
    return (<HydrationPackMountaineeringSupplie />);
};

export default page;