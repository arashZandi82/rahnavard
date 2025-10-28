import KnifeMountaineeringSupplie from "@/template/globalPages/mountaineeringSupplies/KnifeMountaineeringSupplie";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "چاقو کوهنوردی | رهنورد",
  description:
    "خرید انواع چاقو کوهنوردی حرفه‌ای از فروشگاه رهنورد. مدل‌های تاشو، چندکاره و مقاوم در برابر رطوبت، مناسب برای کمپ، طبیعت‌گردی و صعودهای ماجراجویانه.",
  keywords: [
    "چاقو کوهنوردی",
    "چاقو تاشو",
    "چاقو چندکاره",
    "چاقو جیبی",
    "تجهیزات کوهنوردی",
    "ابزار سفر و کمپینگ",
    "چاقوی بقا",
    "خرید چاقو کوهنوردی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "چاقو کوهنوردی | رهنورد",
    description:
      "انواع چاقوهای کوهنوردی تیز، مقاوم و قابل‌اعتماد در فروشگاه رهنورد. از مدل‌های تاشو تا چندکاره برای سفر، صعود و کمپینگ حرفه‌ای.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/knife",
    type: "website",
    images: [
      {
        url: "/img/knife-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "چاقو کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "چاقو کوهنوردی | رهنورد",
    description:
      "چاقوهای کوهنوردی تیز و بادوام با طراحی حرفه‌ای برای شرایط سخت طبیعت. مناسب برای کوهنوردی، شکار و کمپینگ.",
    images: ["/img/knife-thumbnail.jpg"],
  },
};

const page = () => {
    return (<KnifeMountaineeringSupplie/>);
};

export default page;