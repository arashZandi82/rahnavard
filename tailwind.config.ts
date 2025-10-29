
import { styleGuide_colors } from "./src/constants/StyleGuide_Colors";
import { StyleGuide_Text } from "./src/constants/StyleGuide_Text";
import plugin from "tailwindcss/plugin";

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/icon/*.{js,ts,jsx,tsx,mdx,svg}',
  ], 
  safelist: [
    'bg-Secondary-200',
    'text-Secondary-800',
    'bg-Success-200',
    'text-Success-800',
    'bg-Warning-50',
    'text-Warning-200',
    'hidden',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'ForgotPassword-texture': "url('/img/resetpasswordbaner.jpg')",
        'Blogs-texture': "url('/img/blogPageBanner.png')",
        'MountaineeringSupplies-texture': "url('/img/MountaineeringSuppliesBanner.png')",
        'MountaineeringSupplies-Tent-texture': "url('/img/tentBanner.png')",
        'MountaineeringSupplies-Backpack-texture': "url('/img/backbackbanner.png')",
        'MountaineeringSupplies-sleepbag-texture': "url('/img/sleepbagbanner.png')",
        'MountaineeringSupplies-cookware-texture': "url('/img/cookwareBanner.png')",
        'MountaineeringSupplies-hydrationPack-texture': "url('/img/hydrationPackBanner.png')",
        'MountaineeringSupplies-Stove-texture': "url('/img/stoveBanner.png')",
        'MountaineeringSupplies-waistBag-texture': "url('/img/waistBagBanner.png')",
        'MountaineeringSupplies-trekkingPole-texture': "url('/img/trekkingPoleBanner.png')",
        'MountaineeringSupplies-knife-texture': "url('/img/knife.png')",
        'MountaineeringSupplies-poncho-texture': "url('/img/poncho.png')",
        'campingSupplies-poncho-texture': "url('/img/camping.png')",
        'campingSupplies-travelCanopy-texture': "url('/img/travel-canopy.png')",
        'campingSupplies-hardcase-texture': "url('/img/hardcase.png')",
        'campingSupplies-tent-texture': "url('/img/tent.png')",
        'campingSupplies-CoolBox-texture': "url('/img/cool-box.png')",
        'campingSupplies-tableChair-texture': "url('/img/table-chair.png')",
        'campingSupplies-groundmat-texture': "url('/img/ground-mat.png')",
        'aboutus-texture': "url('/img/aboutus.png')",
        'contactus-texture': "url('/img/contactus.png')",
        'homepage-texture': "url('/img/homepage.png')",
      },
      colors: styleGuide_colors
    },
    fontFamily: {
      Vazirmatn: [ 'var(--font-Vazirmatn)'],
    },
    container: {
      center: true,
      padding: "2rem"
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities(StyleGuide_Text);
    }),
    require("@tailwindcss/typography"),
  ],
}
export default config;


