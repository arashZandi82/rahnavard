import { Metadata } from "next";
import { CiShop, CiStar } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { LuEye } from "react-icons/lu";
import { PiCalendarDotsLight } from "react-icons/pi";
import { RiFlag2Line } from "react-icons/ri";

export const metadata: Metadata = {
  title: "درباره ما | رهنورد",
  description:
    "فروشگاه رهنورد، ارائه‌دهنده تجهیزات کوهنوردی و کمپینگ با کیفیت بالا. با تجربه، تخصص و تعهد به مشتریان، همراه شما در طبیعت و سفرهای ماجراجویانه هستیم.",
  keywords: [
    "درباره ما",
    "رهنورد",
    "تجهیزات کوهنوردی",
    "تجهیزات کمپینگ",
    "فروشگاه کوهنوردی",
    "تجربه سفر و کمپینگ",
    "اعتماد مشتریان",
    "معرفی برند رهنورد",
  ],
  robots: "index, follow",
  openGraph: {
    title: "درباره ما | رهنورد",
    description:
      "فروشگاه رهنورد با ارائه تجهیزات حرفه‌ای کوهنوردی و کمپینگ، تجربه‌ای مطمئن و با کیفیت در سفر و طبیعت برای شما فراهم می‌کند.",
    url: "https://rahnavard.vercel.app/aboutus",
    type: "website",
    images: [
      {
        url: "/img/aboutus-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "درباره فروشگاه رهنورد",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Rahnavard",
    title: "درباره ما | رهنورد",
    description:
      "رهنورد، ارائه‌دهنده تجهیزات کوهنوردی و کمپینگ با کیفیت و تخصص. همراه شما در تجربه سفرهای امن و لذت‌بخش در دل طبیعت.",
    images: ["/img/aboutus-thumbnail.jpg"],
  },
};

const page = () => {

    const text: string = "فروشگاه رهنورد با سال‌ها تجربه در زمینه تجهیزات کوهنوردی و کمپینگ، مأموریت دارد تا بهترین محصولات با کیفیت و دوام بالا را به علاقه‌مندان طبیعت ارائه دهد. ما با تمرکز بر تخصص، خدمات مشتریان و تعهد به کیفیت، همراه شما در تمامی سفرها و ماجراجویی‌ها هستیم و تلاش می‌کنیم تجربه‌ای امن، راحت و خاطره‌انگیز در دل طبیعت برای شما فراهم کنیم.";

    return (
        <div className='bg-gray-200'>
            <div className="bg-aboutus-texture bg-cover bg-center lg: py-16">
                <div className="flex flex-col md:flex-row justify-between gap-y-4 mt-96 container">
                    {/* Page title */}
                    <h3 className="text-Regular-Normal-title-2 md:text-Regular-Subtitle text-primary-0">درباره‌ما</h3>

                    {/* Page description */}
                    <p className="text-Body-RL-Medium md:text-Body-RL-Large md:w-1/2 text-Neutral-200">{text}</p>
                </div>
            </div>
            <div className='py-16 md:py-20 lg:py-24 container'>
                <ul className="flex flex-col gap-y-12">
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><IoPersonCircleOutline /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">درباره‌ی ما</p>
                        </div>
                        <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                            خوش آمدید به رهنورد
                            <br />
                            فروشگاه نمونهٔ تجهیزات کوهنوردی و کمپینگ — یک پروژه تمرینی طراحی رابط کاربری که برای نمایش ساختار و محتوای واقعی یک فروشگاه تخصصی طبیعت‌گردی آماده شده است. هدف ما در این پروژه، شبیه‌سازی تجربهٔ کاربری حرفه‌ای، نمایش محصولات مرتبط با طبیعت‌گردی و ارائهٔ نمونه‌ای از خدمات مشتری‌محور است.
                        </p>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><PiCalendarDotsLight /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">تاریخچه (تصوری)</p>
                        </div>
                        <ul className="mt-4 mx-5 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2 list-disc">
                            <li>آغاز مسیر (سال فرضی ۱۳۹۸): ایدهٔ راه‌اندازی فروشگاهی برای علاقه‌مندان به طبیعت و ماجراجویی شکل گرفت.</li>
                            <li>اولین فروشگاه (۱۳۹۹): راه‌اندازی فروشگاه اینترنتی تمرینی و تکمیل مجموعه نمونهٔ محصولات.</li>
                            <li>گسترش خدمات (۱۴۰۰): اضافه شدن بخش مقالات آموزشی و معرفی برندهای معتبر جهانی به عنوان محتوای نمونه.</li>
                            <li>امروز: تبدیل شدن به مرجعی برای آموزش طراحی رابط کاربری در حوزهٔ e-commerce با تمرکز روی محصولات outdoor (نمونه و غیرتجاری).</li>
                        </ul>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><RiFlag2Line /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">مأموریت ما</p>
                        </div>
                        <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                            ارائهٔ تجربهٔ خرید ساده، بصری و امن برای طبیعت‌دوستان و علاقه‌مندان به ماجراجویی—حتی در قالب یک پروژهٔ تمرینی. تمرکز روی نمایش اصول طراحی، دسته‌بندی منطقی محصولات و نمایش اطلاعات کاربردی به کاربر است.
                        </p>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><LuEye /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">دیدگاه (Vision)</p>
                        </div>
                        <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                            ایجاد نمونه‌ای از فروشگاه آنلاین که هم برای کاربران جذاب باشد و هم برای طراحان UI/UX بعنوان نمونهٔ الهام‌بخش عمل کند؛ مکانی که طراحی خوب و محتوای مفید با هم ترکیب شوند.                        
                        </p>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><CiStar /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">ارزش‌ها</p>
                        </div>
                        <ul className="mt-4 mx-5 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2 list-disc">
                            <li>اصالت محتوا: نمایش اطلاعات واضح و درست دربارهٔ محصولات (حتی اگر نمونه باشند).</li>
                            <li>کاربرمحوری: طراحی با تمرکز بر مسیر مشتری و کاهش اصطکاک در فرایند خرید.</li>
                            <li>آموزش و اشتراک‌گذاری: ارائهٔ مقالات و راهنمایی‌های کاربردی دربارهٔ استفادهٔ صحیح از تجهیزات کوهنوردی.</li>
                            <li>شفافیت: ارائهٔ اطلاعات تماس، شرایط ارسال و مرجوعی به‌صورت روشن و در دسترس.</li>
                        </ul>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><CiShop /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">چه چیزی ارائه می‌دهیم</p>
                        </div>
                        <ul className="mt-4 mx-5 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2 list-disc">
                            <li>کاتالوگ نمونه‌ای از تجهیزات کوهنوردی و کمپینگ: کوله‌پشتی، کیسه‌خواب، چادر، لوازم روشنایی، ابزارهای فنی و غیره.</li>
                            <li>مقایسهٔ سریع محصولات برای کمک به انتخاب بهتر (نمونهٔ UI).</li>
                            <li>مقالات آموزشی و نکات فنی پایه دربارهٔ انتخاب و نگهداری تجهیزات (نمونه محتوا).</li>
                        </ul>
                    </li>
                    <li className="p-5 bg-white rounded-xl">
                        <div className=" flex items-center gap-x-3">
                            <span className="text-3xl text-primary-500"><FaPeopleGroup /></span>
                            <p className="lg:text-Bold-Normal-title-3 text-Bold-Normal-text-1">مشارکت با جامعهٔ کوهنوردی</p>
                        </div>
                        <p className="mt-4 lg:text-Thin-Normal-text-1 text-Thin-Normal-text-2">
                            ما در این پروژه نمونه سعی کرده‌ایم با انتشار مطالب آموزشی و نمونه‌داکیومنت‌ها به بهبود آگاهی در استفادهٔ ایمن از تجهیزات کمک کنیم. در نسخه‌های واقعی می‌توانستیم از حمایت تیم‌ها و رویدادهای محلی نیز خبر دهیم.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default page;