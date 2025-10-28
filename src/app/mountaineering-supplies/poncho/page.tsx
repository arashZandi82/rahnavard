import PonchoMountaineeringSupplie from '@/template/globalPages/mountaineeringSupplies/PonchoMountaineeringSupplie';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "پانچو کوهنوردی | رهنورد",
  description:
    "خرید انواع پانچو کوهنوردی ضد آب و سبک از فروشگاه رهنورد. مناسب برای بارش‌های سنگین، سفرهای طولانی و صعودهای کوهستانی. محافظ شما در برابر باران و باد.",
  keywords: [
    "پانچو کوهنوردی",
    "پانچو ضد آب",
    "لباس بارانی کوهنوردی",
    "پانچو سبک",
    "تجهیزات کوهنوردی",
    "پانچو کمپینگ",
    "لباس ضد باران",
    "خرید پانچو کوهنوردی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "پانچو کوهنوردی | رهنورد",
    description:
      "پانچوهای کوهنوردی سبک و ضد آب در فروشگاه رهنورد. طراحی‌شده برای محافظت در برابر باران، باد و شرایط سخت طبیعت.",
    url: "https://rahnavard.vercel.app/mountaineering-supplies/poncho",
    type: "website",
    images: [
      {
        url: "/img/poncho-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "پانچو کوهنوردی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "پانچو کوهنوردی | رهنورد",
    description:
      "پانچوهای سبک و ضد آب کوهنوردی برای محافظت در برابر باران و باد. مناسب برای سفر، کمپ و صعودهای حرفه‌ای.",
    images: ["/img/poncho-thumbnail.jpg"],
  },
};

const page = () => {
    return (<PonchoMountaineeringSupplie /> );
};

export default page;