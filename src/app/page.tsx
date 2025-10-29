import Homepage from "@/template/Homepage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "رهنورد | تجهیزات کوهنوردی و کمپینگ",
  description:
    "فروشگاه رهنورد، ارائه‌دهنده تخصصی تجهیزات کوهنوردی، کمپینگ و سفر. انواع چادر، کیسه‌خواب، ظروف، لباس و ابزار حرفه‌ای طبیعت‌گردی با کیفیت بالا و قیمت مناسب.",
  keywords: [
    "رهنورد",
    "تجهیزات کوهنوردی",
    "تجهیزات کمپینگ",
    "فروشگاه کوهنوردی",
    "لوازم سفر",
    "چادر کوهنوردی",
    "کیسه خواب",
    "ظروف کمپینگ",
    "لباس کوهنوردی",
    "ابزار طبیعت‌گردی",
  ],
  robots: "index, follow",
  openGraph: {
    title: "رهنورد | تجهیزات کوهنوردی و کمپینگ",
    description:
      "رهنورد، همراه شما در مسیر ماجراجویی. فروش تجهیزات حرفه‌ای کوهنوردی، کمپینگ و طبیعت‌گردی با کیفیت بالا و ارسال سریع.",
    url: "https://rahnavard.vercel.app/",
    type: "website",
    images: [
      {
        url: "/img/homepage-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "فروشگاه تجهیزات کوهنوردی و کمپینگ رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "رهنورد | تجهیزات کوهنوردی و کمپینگ",
    description:
      "فروشگاه تخصصی تجهیزات کوهنوردی، کمپینگ و سفر. کیفیت بالا، تنوع زیاد و انتخابی مطمئن برای طبیعت‌گردان حرفه‌ای.",
    images: ["/img/homepage-thumbnail.jpg"],
  },
};

const page = () => {

  const text: string = "رهنورد، همراه مطمئن شما در مسیر ماجراجویی و طبیعت‌گردی است. ما با ارائه‌ی مجموعه‌ای کامل از تجهیزات کوهنوردی و کمپینگ با کیفیت بالا، تلاش می‌کنیم تجربه‌ای امن، راحت و لذت‌بخش در دل طبیعت برای شما فراهم کنیم. از چادر و کیسه‌خواب گرفته تا ظروف، لباس و ابزار حرفه‌ای سفر، همه در فروشگاه رهنورد گردآوری شده‌اند تا شما فقط به مسیر فکر کنید.";
    
  return (
        <div className=''>
            <div className="bg-homepage-texture bg-cover bg-center lg: py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">رهنورد</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">{text}</p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <Homepage />
            </div>
        </div>
    );
};

export default page; 