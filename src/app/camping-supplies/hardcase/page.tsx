import HardcaseCampingSupplies from '@/template/globalPages/campingSupplies/HardcaseCampingSupplies';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "هاردکیس (باکس پلیمری) | رهنورد",
  description:
    "خرید انواع هاردکیس و باکس پلیمری مقاوم از فروشگاه رهنورد. مناسب برای محافظت از تجهیزات کمپینگ، ابزار، دوربین و وسایل حساس در شرایط سخت سفر.",
  keywords: [
    "هاردکیس",
    "باکس پلیمری",
    "باکس محافظ تجهیزات",
    "هاردکیس ضد ضربه",
    "تجهیزات کمپینگ",
    "باکس ابزار سفر",
    "کیس نگهدارنده دوربین",
    "خرید هاردکیس",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "هاردکیس (باکس پلیمری) | رهنورد",
    description:
      "هاردکیس‌ها و باکس‌های پلیمری بادوام برای محافظت از تجهیزات و لوازم سفر. مقاوم در برابر ضربه، رطوبت و گرد و غبار.",
    url: "https://rahnavard.vercel.app/camping-supplies/hardcase",
    type: "website",
    images: [
      {
        url: "/img/hardcase-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "هاردکیس و باکس پلیمری در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "هاردکیس (باکس پلیمری) | رهنورد",
    description:
      "هاردکیس‌ها و باکس‌های پلیمری ضد ضربه و ضد آب، مناسب برای نگهداری تجهیزات کمپینگ و وسایل حساس در سفرهای ماجراجویانه.",
    images: ["/img/hardcase-thumbnail.jpg"],
  },
};

const page = () => {
    return (<HardcaseCampingSupplies />);
};

export default page;