import CookwareBagMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/CookwareBagMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ظروف کوهنوردی | رهنورد",
  description:
    "خرید انواع ظروف کوهنوردی سبک، مقاوم و کم‌حجم از فروشگاه رهنورد. مناسب برای کمپ، سفر و صعودهای طولانی. انتخابی حرفه‌ای برای آشپزی در دل طبیعت.",
  keywords: [
    "ظروف کوهنوردی",
    "ست ظروف کمپینگ",
    "ظروف سبک مسافرتی",
    "لوازم آشپزی کوهنوردی",
    "تجهیزات کمپینگ",
    "ظروف آلومینیومی کوهنوردی",
    "خرید ظروف کوهنوردی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "ظروف کوهنوردی | رهنورد",
    description:
      "انواع ظروف کوهنوردی سبک، بادوام و مناسب برای شرایط سخت طبیعت در فروشگاه رهنورد. از ست‌های چندتکه تا ظروف تکی برای سفرهای کوهستانی.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/cookware",
    type: "website",
    images: [
      {
        url: "/img/cookware-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "ظروف کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "ظروف کوهنوردی | رهنورد",
    description:
      "ظروف کوهنوردی سبک و مقاوم برای آشپزی در کمپ و ارتفاعات. انتخابی حرفه‌ای برای طبیعت‌گردان و کوهنوردان.",
    images: ["/img/cookware-thumbnail.jpg"],
  },
};

const page = () => {
    return (<CookwareBagMountaineeringSupplie />);
};

export default page;