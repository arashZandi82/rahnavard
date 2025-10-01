import { Product_interface } from '@/types/modelTypes';
import React from 'react';
import ImageWithFallback from '../ImageWithFallback';
import Link from 'next/link';
import slugify from 'slugify';

const ProductCard = ({ product }: { product: Product_interface }) => {
  const { _id, title, englishTitle, thumbnail, description, isFeatured, isNew, information } = product;

  const slug = slugify(`${_id}-${englishTitle}`, { lower: true, strict: true });

  // محاسبه قیمت بعد از تخفیف
  const discountedPrice =
    information.discount.haveDiscount
      ? (information.price * (100 - information.discount.discountPercent)) / 100
      : null;

  return (
    <div className="w-full h-full p-4 border border-gray-200 bg-primary-0 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* تصویر محصول */}
      <div className="relative">
        <Link href={`/dashboard/products/${slug}`} className="block overflow-hidden rounded-2xl">
          <ImageWithFallback
            src={thumbnail || ''}
            alt={description}
            type="thumbnail"
            style="w-full h-48 object-cover rounded-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </Link>
        {/* برچسب‌ها */}
        <div className="absolute top-2 right-2 flex flex-col gap-y-1">
          {isFeatured && (
            <span className="px-3 py-1 text-Bold-Caption-2 rounded-full bg-Secondary-400 shadow-sm">
              ویژه
            </span>
          )}
          {isNew && (
            <span className="px-3 py-1 text-Bold-Caption-2 rounded-full bg-Secondary-400 shadow-sm">
              جدید
            </span>
          )}
        </div>
      </div>

      {/* متن */}
      <div className="mt-3 px-1 flex flex-col gap-y-1">
        <p className="text-Bold-Normal-text-1 font-semibold text-Neutral-900">{title}</p>
        <p className="text-Bold-Normal-text-2 text-Neutral-600">{englishTitle}</p>

        <div className="flex flex-row-reverse justify-between items-center mt-3">
          {/* قیمت */}
          <div className="flex flex-col items-start">
            {discountedPrice ? (
              <>
                <p className="text-Regular-Normal-text-2  text-Neutral-500 line-through">{information.price.toLocaleString()} تومان</p>
                <p className="text-Regular-Normal-text-1   text-primary-500">{discountedPrice.toLocaleString()} تومان</p>
              </>
            ) : (
              <p className="text-Regular-Normal-text-1  text-Neutral-900">
                {information.price.toLocaleString()} تومان
              </p>
            )}
          </div>

          {/* رنگ‌ها */}
          <div className="flex gap-x-2">
            {information.colors.map((col: string, index: number) => (
              <div
                key={index}
                style={{ backgroundColor: col }}
                className="w-5 h-5 rounded-full shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;