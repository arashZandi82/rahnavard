import ContactUsPage from "@/template/globalPages/ContactUsPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما | رهنورد",
  description:
    "راه‌های ارتباطی با فروشگاه رهنورد برای دریافت مشاوره، پشتیبانی و سفارش محصولات کوهنوردی و کمپینگ. با ما در تماس باشید.",
  keywords: [
    "تماس با ما",
    "رهنورد",
    "پشتیبانی مشتریان",
    "مشاوره خرید تجهیزات کوهنوردی",
    "ارتباط با فروشگاه",
    "تجهیزات کمپینگ",
    "تماس رهنورد",
    "راه‌های ارتباطی",
  ],
  robots: "index, follow",
  openGraph: {
    title: "تماس با ما | رهنورد",
    description:
      "با فروشگاه رهنورد تماس بگیرید و مشاوره، پشتیبانی یا اطلاعات بیشتر درباره محصولات کوهنوردی و کمپینگ دریافت کنید.",
    url: "https://rahnavard.vercel.app/contactUs",
    type: "website",
    images: [
      {
        url: "/img/contactus-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "تماس با فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "تماس با ما | رهنورد",
    description:
      "راه‌های ارتباط با فروشگاه رهنورد برای دریافت مشاوره و پشتیبانی محصولات کوهنوردی و کمپینگ.",
    images: ["/img/contactus-thumbnail.jpg"],
  },
};

const page = () => {

    const text: string = "در رهنورد همیشه آماده پاسخگویی به شما هستیم. برای مشاوره، پرسش درباره محصولات، پشتیبانی سفارش‌ها یا ارائه نظرات و پیشنهادات، می‌توانید از طریق فرم تماس، ایمیل یا شماره تلفن‌های ما با ما در ارتباط باشید. هدف ما ارائه خدمات حرفه‌ای و سریع برای تجربه‌ای رضایت‌بخش از خرید تجهیزات کوهنوردی و کمپینگ است.";

    return (
        <div className=''>
            <div className="bg-contactus-texture bg-cover bg-center lg: py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">درباره‌ما</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">{text}</p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <ContactUsPage />
            </div>
        </div>
    );
};

export default page;