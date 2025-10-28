import TentCampingSupplies from '@/template/globalPages/campingSupplies/TentCampingSupplies';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "چادر مسافرتی | رهنورد",
  description:
    "خرید انواع چادر مسافرتی و کمپینگ از فروشگاه رهنورد. سبک، ضد آب و مقاوم در برابر باد، مناسب برای سفرهای خانوادگی، طبیعت‌گردی و اقامت در فضای باز.",
  keywords: [
    "چادر مسافرتی",
    "چادر کمپینگ",
    "چادر ضد آب",
    "چادر کوهنوردی",
    "تجهیزات کمپینگ",
    "چادر مسافرتی سبک",
    "چادر مسافرتی خانوادگی",
    "خرید چادر مسافرتی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "چادر مسافرتی | رهنورد",
    description:
      "چادرهای مسافرتی سبک و مقاوم در فروشگاه رهنورد. طراحی‌شده برای محافظت در برابر باد و باران و تجربه اقامت راحت در طبیعت.",
    url: "https://rahnavard.vercel.app/camping-supplies/tent",
    type: "website",
    images: [
      {
        url: "/img/tent-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "چادر مسافرتی در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "چادر مسافرتی | رهنورد",
    description:
      "چادرهای سبک، ضد آب و بادوام برای کمپینگ و سفر. مناسب برای طبیعت‌گردی، صعود و سفرهای خانوادگی.",
    images: ["/img/tent-thumbnail.jpg"],
  },
};

const page = () => {
    return (<TentCampingSupplies/>);
};

export default page;