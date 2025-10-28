import CampingSupplies from "@/template/globalPages/campingSupplies/CampingSupplies";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "لوازم کمپینگ | رهنورد",
  description:
    "خرید انواع لوازم کمپینگ و سفر از فروشگاه رهنورد. تجهیزات سبک، مقاوم و کاربردی برای اقامت راحت در دل طبیعت؛ از چادر و چراغ تا صندلی و میز تاشو.",
  keywords: [
    "لوازم کمپینگ",
    "تجهیزات کمپینگ",
    "وسایل سفر",
    "چادر کمپینگ",
    "چراغ کمپینگ",
    "صندلی تاشو",
    "تجهیزات طبیعت‌گردی",
    "خرید لوازم کمپینگ",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "لوازم کمپینگ | رهنورد",
    description:
      "انواع تجهیزات کمپینگ، طبیعت‌گردی و سفر در فروشگاه رهنورد. سبک، بادوام و طراحی‌شده برای تجربه‌ای راحت و امن در دل طبیعت.",
    url: "https://rahnavard.vercel.app/camping-supplies",
    type: "website",
    images: [
      {
        url: "/img/camping-supplies-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "لوازم کمپینگ در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "لوازم کمپینگ | رهنورد",
    description:
      "تجهیزات کامل کمپینگ و طبیعت‌گردی از برندهای معتبر. سبک، مقاوم و مناسب برای سفر، کوهستان و اقامت در فضای باز.",
    images: ["/img/camping-supplies-thumbnail.jpg"],
  },
};

const page = () => {
    return (<CampingSupplies />);
};

export default page;