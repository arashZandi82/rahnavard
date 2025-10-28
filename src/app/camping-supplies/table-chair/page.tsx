import TableChairCampingSupplies from '@/template/globalPages/campingSupplies/TableChairCampingSupplies';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "میز و صندلی مسافرتی | رهنورد",
  description:
    "خرید انواع میز و صندلی مسافرتی و کمپینگ از فروشگاه رهنورد. سبک، تاشو و مقاوم در برابر شرایط محیطی؛ مناسب برای سفر، پیک‌نیک و کمپینگ.",
  keywords: [
    "میز مسافرتی",
    "صندلی مسافرتی",
    "میز و صندلی کمپینگ",
    "میز تاشو",
    "صندلی تاشو",
    "تجهیزات کمپینگ",
    "وسایل سفر",
    "خرید میز و صندلی مسافرتی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "میز و صندلی مسافرتی | رهنورد",
    description:
      "میز و صندلی‌های سبک، تاشو و بادوام مخصوص سفر و کمپینگ در فروشگاه رهنورد. طراحی‌شده برای راحتی بیشتر در طبیعت و فضای باز.",
    url: "https://rahnavard.vercel.app/camping-supplies/table-chair",
    type: "website",
    images: [
      {
        url: "/img/table-chair-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "میز و صندلی مسافرتی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "میز و صندلی مسافرتی | رهنورد",
    description:
      "میز و صندلی‌های مسافرتی سبک و تاشو، مناسب برای کمپینگ و سفر. ترکیبی از راحتی، دوام و طراحی کاربردی.",
    images: ["/img/table-chair-thumbnail.jpg"],
  },
};

const page = () => {
    return (<TableChairCampingSupplies />);
};

export default page;