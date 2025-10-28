import GroundMatCampingSupplies from '@/template/globalPages/campingSupplies/GroundMatCampingSupplies';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "زیرانداز کمپینگ | رهنورد",
  description:
    "خرید انواع زیرانداز کمپینگ سبک و مقاوم از فروشگاه رهنورد. مناسب برای خواب راحت، محافظت در برابر سرما و رطوبت و سفرهای طولانی در دل طبیعت.",
  keywords: [
    "زیرانداز کمپینگ",
    "زیرانداز سفری",
    "زیرانداز سبک",
    "تجهیزات کمپینگ",
    "زیرانداز ضد آب",
    "زیرانداز مسافرتی",
    "وسایل سفر",
    "خرید زیرانداز کمپینگ",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "زیرانداز کمپینگ | رهنورد",
    description:
      "زیراندازهای سبک و مقاوم کمپینگ در فروشگاه رهنورد. طراحی‌شده برای خواب راحت و محافظت در برابر سرما و رطوبت در سفر و کمپینگ.",
    url: "https://rahnavard.vercel.app/camping-supplies/ground-mat",
    type: "website",
    images: [
      {
        url: "/img/ground-mat-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "زیرانداز کمپینگ در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "زیرانداز کمپینگ | رهنورد",
    description:
      "زیراندازهای سبک و مقاوم برای کمپینگ و سفر. مناسب برای خواب راحت، محافظت در برابر رطوبت و سرما و استفاده در فضای باز.",
    images: ["/img/ground-mat-thumbnail.jpg"],
  },
};

const page = () => {
    return (<GroundMatCampingSupplies />);
};

export default page;