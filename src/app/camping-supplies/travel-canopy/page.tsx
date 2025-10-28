import TravelCanopyCampingSupplies from '@/template/globalPages/campingSupplies/TravelCanopyCampingSupplies';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "سایبان کمپینگ و مسافرتی | رهنورد",
  description:
    "خرید انواع سایبان کمپینگ و مسافرتی سبک و مقاوم از فروشگاه رهنورد. محافظ در برابر آفتاب و باران، مناسب برای کمپ، پیک‌نیک و سفرهای خانوادگی.",
  keywords: [
    "سایبان کمپینگ",
    "سایبان مسافرتی",
    "سایبان ضد آب",
    "چادر سایبان",
    "تجهیزات کمپینگ",
    "لوازم سفر",
    "پوشش آفتاب کمپ",
    "خرید سایبان کمپینگ",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "سایبان کمپینگ و مسافرتی | رهنورد",
    description:
      "سایبان‌های کمپینگ و مسافرتی با طراحی سبک، مقاوم و ضد آب از فروشگاه رهنورد. مناسب برای سفر، طبیعت‌گردی و پیک‌نیک‌های خانوادگی.",
    url: "https://rahnavard.vercel.app/camping-supplies/travel-canopy",
    type: "website",
    images: [
      {
        url: "/img/travel-canopy-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "سایبان کمپینگ و مسافرتی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "سایبان کمپینگ و مسافرتی | رهنورد",
    description:
      "سایبان‌های سبک و بادوام کمپینگ و مسافرتی برای محافظت در برابر آفتاب و باران. طراحی‌شده برای سفر، کمپ و پیک‌نیک در دل طبیعت.",
    images: ["/img/travel-canopy-thumbnail.jpg"],
  },
};

const page = () => {
    return (<TravelCanopyCampingSupplies/> );
};

export default page;