import TrekkingPoleMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/TrekkingPoleMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "باتوم کوهنوردی | رهنورد",
  description:
    "خرید انواع باتوم کوهنوردی تلسکوپی و حرفه‌ای از فروشگاه رهنورد. سبک، مقاوم و قابل تنظیم برای صعودهای طولانی و مسیرهای سخت.",
  keywords: [
    "باتوم کوهنوردی",
    "عصای کوهنوردی",
    "باتوم تلسکوپی",
    "تجهیزات کوهنوردی",
    "لوازم کوهنوردی",
    "باتوم حرفه‌ای",
    "خرید باتوم کوهنوردی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "باتوم کوهنوردی | رهنورد",
    description:
      "انواع باتوم و عصای کوهنوردی سبک و مقاوم، مناسب برای مسیرهای ناهموار و صعودهای طولانی. قابل تنظیم و طراحی شده برای ثبات و تعادل بیشتر.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/trekking-pole",
    type: "website",
    images: [
      {
        url: "/img/trekking-pole-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "باتوم کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "باتوم کوهنوردی | رهنورد",
    description:
      "باتوم‌های کوهنوردی سبک، مقاوم و تلسکوپی با طراحی ارگونومیک برای افزایش تعادل و کاهش فشار بر زانوها در مسیرهای سخت.",
    images: ["/img/trekking-pole-thumbnail.jpg"],
  },
};

const page = () => {
    return (<TrekkingPoleMountaineeringSupplie />);
};

export default page;