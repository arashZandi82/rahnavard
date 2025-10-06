import Product from '@/models/Product';
import ProdutsPageDetails from '@/template/globalPages/ProdutsPageDetails';
import { Product_interface } from '@/types/modelTypes';
import connectDB from '@/utils/connectDB';
import { Metadata } from 'next';
import React from 'react';
import slugify from 'slugify';

// ------------------ Fetch product ------------------
async function fetchProductById(productId: string): Promise<Product_interface | null> {
  await connectDB();
  const product = await Product.findById(productId);
  return product;
}

// ------------------ Metadata ------------------
export async function generateMetadata({ params }: { params: { productSlug: string } }): Promise<Metadata> {
  const mongoId = params.productSlug.split("-")[0];

  const product = await fetchProductById(mongoId);

  if (!product) {
    return {
      title: "محصول پیدا نشد | رهنورد",
      description: "محصول مورد نظر شما در فروشگاه رهنورد پیدا نشد.",
    };
  }

  return {
    title: `${product.title} | رهنورد`,
    description: `${product.shortDescription} · برند ${product.brand} · ${product.information.price.toLocaleString()} تومان`,
    keywords: [
      product.title,
      product.englishTitle,
      product.brand,
      product.category.levelOne,
      product.category.levelTwo,
      ...(product.tags || []),
      "فروشگاه رهنورد",
      "خرید آنلاین",
    ],
    openGraph: {
        title: product.title,
        description: product.shortDescription,
        url: `https://rahnavard.vercel.app/product/${params.productSlug}`,
        type: "article",
        images: [
            {
              url: product.thumbnail || "/img/thumbnail.png",
              width: 1200,
              height: 630,
              alt: product.title,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Rahnavard",
        title: product.title,
        description: product.shortDescription || product.description,
        images: [product.thumbnail || "/img/thumbnail.png"],
    },
  };
}

// ------------------ Static Params ------------------
export async function generateStaticParams() {
  await connectDB();
  const products: Product_interface[] = await Product.find();

  return products.map((p) => {
    const slug = slugify(`${p._id}-${p.englishTitle}`, { lower: true, strict: true });
    return { productSlug: slug }; // ⚡ کلید باید دقیقا مثل پارامتر داینامیک فایل باشه
  });
}

// ------------------ Page ------------------
const page = async ({ params }: { params: { productSlug: string } }) => {
  const fullSlug = params.productSlug;
  const mongoId = fullSlug.split("-")[0];

  return <ProdutsPageDetails productId={mongoId} />;
};

export default page;