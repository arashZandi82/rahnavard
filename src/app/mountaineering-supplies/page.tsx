import MountaineeringSupplies from "@/template/globalPages/mountaineeringSupplies/MountaineeringSupplies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لوازم کوهنوردی | رهنورد",
  description:
    "انواع لوازم کوهنوردی، کمپینگ و سفر را در فروشگاه رهنورد مشاهده کنید. از کفش و لباس کوهنوردی تا چادر، کوله‌پشتی و تجهیزات فنی با بهترین قیمت و کیفیت.",
  keywords: [
    "لوازم کوهنوردی",
    "تجهیزات کوهنوردی",
    "وسایل کمپینگ",
    "کفش کوهنوردی",
    "چادر کوهنوردی",
    "کوله پشتی کوهنوردی",
    "ابزار سفر",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "لوازم کوهنوردی | رهنورد",
    description:
      "خرید لوازم کوهنوردی، کمپینگ و سفر از فروشگاه رهنورد. جدیدترین محصولات و تجهیزات مورد نیاز طبیعت‌گردی با ضمانت کیفیت.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies",
    type: "website",
    images: [
      {
        url: "/img/mountaineering-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "لوازم کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "لوازم کوهنوردی | رهنورد",
    description:
      "کامل‌ترین مجموعه لوازم و تجهیزات کوهنوردی را در فروشگاه رهنورد مشاهده و خریداری کنید.",
    images: ["/img/mountaineering-thumbnail.jpg"],
  },
};

const page = () => {
    return (<MountaineeringSupplies  />);
};

export default page;