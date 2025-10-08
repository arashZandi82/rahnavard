import Product from "@/models/Product";
import LikedProductsDashboardpage from "@/template/Dashboard/LikedProductsDashboardpage";
import { Product_interface } from "@/types/modelTypes";
import { checkSession } from "@/utils/CheckSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "علاقه‌مندی‌ها | رهنورد",
  description:
    "در بخش علاقه‌مندی‌های رهنورد، تمام ملک‌ها و محصولات مورد علاقه‌تان را در یکجا مشاهده کنید. برای مقایسه، بررسی و مدیریت گزینه‌های ذخیره‌شده خود وارد شوید و تجربه‌ای شخصی‌سازی‌شده از جستجوی ملک داشته باشید.",
  keywords: [
    "علاقه‌مندی‌های رهنورد",
    "لیست علاقه‌مندی‌ها",
    "ملک‌های لایک‌شده",
    "محصولات ذخیره‌شده",
    "داشبورد کاربر",
    "مدیریت علاقه‌مندی‌ها",
    "املاک منتخب من",
  ],
  robots: "index, follow",
  openGraph: {
    title: "علاقه‌مندی‌ها | رهنورد",
    description:
      "تمام ملک‌ها و محصولات مورد علاقه خود را در رهنورد مشاهده و مدیریت کنید. گزینه‌های لایک‌شده‌تان همیشه در دسترس شما هستند.",
    url: "https://rahnavard.vercel.app/dashboard/liked_products",
    type: "website",
    images: [
      {
        url: "/img/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "صفحه علاقه‌مندی‌های رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "علاقه‌مندی‌ها | رهنورد",
    description:
      "در صفحه علاقه‌مندی‌های رهنورد، ملک‌ها و محصولات لایک‌شده خود را ببینید و آن‌ها را به‌راحتی مدیریت کنید.",
    images: ["/img/thumbnail.png"],
  },
};

const page = async () => {
    const { user } = await checkSession();

    if (!user) return 

    if (!user || !user.liked_products || user.liked_products.length === 0) {
        return <LikedProductsDashboardpage products={[]} />;
    }

    const likedProductsIds = user.liked_products;

    const likedProducts: Product_interface[] = await Product.find({
        _id: { $in: likedProductsIds },
    });

    return <LikedProductsDashboardpage products={likedProducts} />;
};

export default page;