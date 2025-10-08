import { DashboardItems } from "@/constants/DashboardItems";
import Product from "@/models/Product";
import ProductsPage from "@/template/Dashboard/products/ProductsPage";
import { UserRole } from "@/types/enums/generalEnums";
import { checkSession } from "@/utils/CheckSession";
import connectDB from "@/utils/connectDB";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "پنل ادمین | مدیریت محصولات | رهنورد",
  description:
    "در این بخش می‌توانید محصولات فروشگاه رهنورد را مدیریت کنید. محصولات جدید اضافه کنید، اطلاعات محصول شامل عنوان، توضیحات، برند، قیمت، دسته‌بندی و تصاویر را ویرایش کنید و موجودی فروشگاه را کنترل کنید.",
  keywords: [
    "مدیریت محصولات",
    "افزودن محصول",
    "ویرایش محصول",
    "مدیریت فروشگاه",
    "داشبورد ادمین",
    "محصولات رهنورد",
    "کنترل موجودی",
  ],
  robots: "index, follow",
  openGraph: {
    title: "مدیریت محصولات | رهنورد",
    description:
      "محصولات فروشگاه رهنورد را مشاهده و مدیریت کنید. اطلاعات محصول، قیمت، تصاویر و موجودی فروشگاه را کنترل کنید.",
    url: "https://rahnavard.vercel.app/dashboard/products",
    type: "website",
    images: [
      {
        url: "/img/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "مدیریت محصولات در داشبورد رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "مدیریت محصولات | رهنورد",
    description:
      "محصولات فروشگاه خود را مدیریت کنید. اضافه کردن، ویرایش و کنترل موجودی محصولات در داشبورد رهنورد.",
    images: ["/img/thumbnail.png"],
  },
};

const page = async () => {

    // Connect to the MongoDB database
    await connectDB();

    // Check if the user session is valid and get user info
    const { session, user } = await checkSession();

    const validRoles = DashboardItems.find(item => item.name === "محصولات")?.children[0]?.accessibility;
    if (!user || !validRoles?.includes(user.role as UserRole)) redirect("/dashboard/profile");


    return (<ProductsPage userLikedProduts={user.liked_products || []} />);
};

export default page;