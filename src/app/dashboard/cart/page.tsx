import CartPage from "@/template/Dashboard/CartPage";
import { checkSession } from "@/utils/CheckSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "سبد خرید | رهنورد",
  description:
    "سبد خرید شما در فروشگاه رهنورد. در این بخش می‌توانید محصولات انتخابی خود را مشاهده، تعداد آن‌ها را تغییر دهید، مواردی را حذف یا خرید خود را نهایی کنید.",
  keywords: [
    "سبد خرید",
    "خرید آنلاین",
    "محصولات رهنورد",
    "تکمیل خرید",
    "checkout",
    "پرداخت",
    "لوازم کوهنوردی",
    "فروشگاه رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "سبد خرید | رهنورد",
    description:
      "محصولات انتخابی خود را در سبد خرید مشاهده و مدیریت کنید. خرید خود را در فروشگاه رهنورد به‌صورت آسان و سریع نهایی کنید.",
    url: "https://rahnavard.vercel.app/dashboard/cart",
    type: "website",
    images: [
      {
        url: "/img/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "سبد خرید در فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "سبد خرید | رهنورد",
    description:
      "در رهنورد، سبد خرید شما همیشه در دسترس است. محصولات خود را بررسی و سفارش خود را نهایی کنید.",
    images: ["/img/thumbnail.png"],
  },
};


const page = async () => {


    return (<CartPage />);
};

export default page;