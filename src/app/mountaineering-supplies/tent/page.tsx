import TentsMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/TentsMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "چادر کوهنوردی | رهنورد",
  description:
    "انواع چادر کوهنوردی، کمپینگ و مسافرتی را در فروشگاه رهنورد مشاهده و خریداری کنید. از چادرهای سبک یک‌نفره تا مدل‌های حرفه‌ای ضدآب با بهترین کیفیت و قیمت.",
  keywords: [
    "چادر کوهنوردی",
    "چادر کمپینگ",
    "چادر مسافرتی",
    "تجهیزات کمپ",
    "لوازم کوهنوردی",
    "چادر ضدآب",
    "چادر سبک",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "چادر کوهنوردی | رهنورد",
    description:
      "خرید انواع چادر کوهنوردی، کمپینگ و مسافرتی از فروشگاه رهنورد. مدل‌های حرفه‌ای ضدآب، سبک و با دوام برای تمام شرایط آب‌و‌هوایی.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/tent",
    type: "website",
    images: [
      {
        url: "/img/tent-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "چادر کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "چادر کوهنوردی | رهنورد",
    description:
      "انواع چادر کوهنوردی و کمپینگ با بهترین کیفیت و قیمت از فروشگاه رهنورد. مناسب برای طبیعت‌گردی و سفرهای ماجراجویانه.",
    images: ["/img/tent-thumbnail.jpg"],
  },
};


const page = () => {
    return (<TentsMountaineeringSupplie />);
};

export default page;