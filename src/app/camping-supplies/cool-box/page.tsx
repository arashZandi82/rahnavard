import CoolBoxCampingSupplies from "@/template/globalPages/campingSupplies/CoolBoxCampingSupplies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کول باکس | رهنورد",
  description:
    "خرید انواع کول باکس و یخدان سفری از فروشگاه رهنورد. نگهداری مواد غذایی و نوشیدنی‌ها در دمای مناسب، مناسب برای سفر، کمپ و پیک‌نیک.",
  keywords: [
    "کول باکس",
    "یخدان سفری",
    "جعبه خنک کننده",
    "کول باکس کمپینگ",
    "تجهیزات کمپینگ",
    "یخدان مسافرتی",
    "وسایل سفر",
    "خرید کول باکس",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "کول باکس | رهنورد",
    description:
      "کول باکس‌ها و یخدان‌های سبک و مقاوم برای نگهداری مواد غذایی و نوشیدنی‌ها در سفر و کمپ. طراحی‌شده برای حفظ دما در شرایط مختلف طبیعت.",
    url: "https://rahnavard.vercel.app/camping-supplies/cool-box",
    type: "website",
    images: [
      {
        url: "/img/cool-box-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "کول باکس در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "کول باکس | رهنورد",
    description:
      "کول باکس‌های مقاوم و سبک برای حفظ خنکی نوشیدنی‌ها و مواد غذایی در سفر و کمپینگ. مناسب برای پیک‌نیک و طبیعت‌گردی.",
    images: ["/img/cool-box-thumbnail.jpg"],
  },
};

const page = () => {
    return (<CoolBoxCampingSupplies/>);
};

export default page;