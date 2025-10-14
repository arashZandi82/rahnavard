import BackpackMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/BackpackMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کوله پشتی کوهنوردی | رهنورد",
  description:
    "خرید انواع کوله‌پشتی کوهنوردی حرفه‌ای از فروشگاه رهنورد. کوله‌های سبک، ضدآب و ارگونومیک مخصوص صعود، طبیعت‌گردی و پیمایش‌های طولانی.",
  keywords: [
    "کوله پشتی کوهنوردی",
    "کوله پشتی صعود",
    "کوله پشتی طبیعت گردی",
    "کوله پشتی حرفه ای",
    "لوازم کوهنوردی",
    "تجهیزات کوهنوردی",
    "کوله ضدآب",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "کوله پشتی کوهنوردی | رهنورد",
    description:
      "انواع کوله‌پشتی کوهنوردی سبک، مقاوم و ضدآب را از فروشگاه رهنورد تهیه کنید. مناسب برای کوهنوردی، پیمایش و طبیعت‌گردی حرفه‌ای.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/backpack",
    type: "website",
    images: [
      {
        url: "/img/backpack-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "کوله پشتی کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "کوله پشتی کوهنوردی | رهنورد",
    description:
      "خرید کوله‌پشتی کوهنوردی سبک، ضدآب و بادوام از فروشگاه رهنورد. طراحی ارگونومیک برای مسیرهای طولانی و صعودهای حرفه‌ای.",
    images: ["/img/backpack-thumbnail.jpg"],
  },
};

const page = () => {
    return ( <BackpackMountaineeringSupplie />);
};

export default page;