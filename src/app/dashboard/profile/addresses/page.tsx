import AdressesPage from "@/template/Dashboard/AdressesPage";
import { checkSession } from "@/utils/CheckSession";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "آدرس‌ها | رهنورد",
  description:
    "مدیریت آدرس‌های ثبت‌شده در حساب کاربری رهنورد. آدرس‌های جدید اضافه کنید، ویرایش یا حذف انجام دهید تا سفارش‌ها و خدمات سریع‌تر و دقیق‌تر به شما برسند.",
  keywords: [
    "آدرس‌های کاربر",
    "مدیریت آدرس‌ها",
    "داشبورد رهنورد",
    "افزودن آدرس",
    "ویرایش آدرس",
    "حذف آدرس",
    "حساب کاربری رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "آدرس‌ها | رهنورد",
    description:
      "آدرس‌های خود را در رهنورد مدیریت کنید. آدرس‌های جدید اضافه کنید، ویرایش یا حذف انجام دهید و تجربه‌ای سریع‌تر در سفارش‌ها داشته باشید.",
    url: "https://rahnavard.vercel.app/dashboard/addresses",
    type: "website",
    images: [
      {
        url: "/img/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "صفحه آدرس‌های کاربر در رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "آدرس‌ها | رهنورد",
    description:
      "مدیریت و ویرایش آدرس‌های حساب کاربری در رهنورد. آدرس‌های خود را برای تجربه بهتر و ارسال سریع‌تر بروزرسانی کنید.",
    images: ["/img/thumbnail.png"],
  },
};


const page = async () => {

    // Check session to retrieve the user information
    const { user } = await checkSession();
    
    // If no user session is found, show a message
    if (!user) {
        return (
            <div className='px-5 py-5'>
                <p className='text-Bold-Normal-title-3 pb-3  border-primary-100'>کاربر یافت نشد!</p>
            </div>
        );
    }

    const plainUser = JSON.parse(JSON.stringify(user));
    return <AdressesPage adresses={plainUser.addresses} id={plainUser._id || ''} />;
};

export default page;