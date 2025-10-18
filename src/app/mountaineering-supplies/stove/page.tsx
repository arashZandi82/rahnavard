import StoveMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/StoveMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سرشعله کوهنوردی | رهنورد",
  description:
    "خرید انواع سرشعله و اجاق کوهنوردی از فروشگاه رهنورد. مدل‌های سبک، کم‌مصرف و بادوام، مناسب برای پخت‌وپز در طبیعت و ارتفاعات.",
  keywords: [
    "سرشعله کوهنوردی",
    "اجاق کوهنوردی",
    "سرشعله گازی",
    "تجهیزات کمپینگ",
    "لوازم کوهنوردی",
    "سرشعله سبک",
    "خرید سرشعله",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "سرشعله کوهنوردی | رهنورد",
    description:
      "انواع سرشعله و اجاق کوهنوردی سبک و قدرتمند برای استفاده در کمپ و کوهستان. طراحی ایمن، مقاوم و مناسب برای پخت‌وپز در طبیعت.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/stove",
    type: "website",
    images: [
      {
        url: "/img/stove-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "سرشعله کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "سرشعله کوهنوردی | رهنورد",
    description:
      "سرشعله‌های کوهنوردی سبک، ایمن و پرقدرت برای پخت غذا در شرایط مختلف طبیعت. مناسب برای کمپینگ و سفرهای ماجراجویانه.",
    images: ["/img/stove-thumbnail.jpg"],
  },
};


const page = () => {
    return (<StoveMountaineeringSupplie />);
};

export default page;