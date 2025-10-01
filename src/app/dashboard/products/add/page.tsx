import { DashboardItems } from "@/constants/DashboardItems";
import AddproductsPage from "@/template/Dashboard/products/AddproductsPage";
import { UserRole } from "@/types/enums/generalEnums";
import { checkSession } from "@/utils/CheckSession";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "پنل ادمین | افزودن محصول | رهنورد",
  description:
    "در این بخش می‌توانید محصولات جدید خود را به فروشگاه رهنورد اضافه کنید. اطلاعات محصول شامل عنوان، توضیحات، برند، قیمت، دسته‌بندی و تصاویر را وارد کنید و موجودی فروشگاه خود را مدیریت کنید.",
  keywords: [
    "افزودن محصول",
    "مدیریت فروشگاه",
    "داشبورد ادمین",
    "محصول جدید",
    "مدیریت موجودی",
    "محصولات رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "افزودن محصول | رهنورد",
    description:
      "محصولات جدید خود را به فروشگاه رهنورد اضافه کنید. عنوان، توضیحات، برند، قیمت و تصاویر را وارد کنید و فروشگاه خود را گسترش دهید.",
    url: "https://rahnavard.vercel.app/dashboard/products/add",
    type: "website",
    images: [
      {
        url: "/img/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "افزودن محصول جدید در رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "افزودن محصول | رهنورد",
    description:
      "مدیریت فروشگاه با افزودن محصولات جدید. اطلاعات محصول را تکمیل کنید و فروشگاه خود را بروزرسانی کنید.",
    images: ["/img/thumbnail.png"],
  },
};

const page = async () => {

    const { session , user } = await checkSession();
    
    const validRoles = DashboardItems.find(item => item.name === "محصولات")?.children[0]?.accessibility;
    if (!user || !validRoles?.includes(user.role as UserRole)) redirect("/dashboard/profile");

    return (<AddproductsPage />);
};

export default page;