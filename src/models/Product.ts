import { ProductStatus } from '@/types/enums/generalEnums';
import { Product_interface } from '@/types/modelTypes';
import mongoose, { Schema, model, models } from 'mongoose';

const CategorySchema = new Schema(
  {
    levelOne: { type: String, required: true },
    levelTwo: { type: String, required: true },
  },
  { _id: false }
);

const DiscountSchema = new Schema(
  {
    haveDiscount: { type: Boolean, required: true, default: false },
    discountPercent: { type: Number, required: true, default: 0 },
  },
  { _id: false }
);

const InformationSchema = new Schema(
  {
    quantity: { type: Number, required: true },
    colors: { type: [String], default: [] },
    price: { type: Number, required: true },
    discount: { type: DiscountSchema, required: true },
  },
  { _id: false }
);

const ExtraInformationSchema = new Schema(
  {
    key: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const ProductSchema = new Schema<Product_interface>(
  {
    title: { type: String, required: true },
    englishTitle: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    descriptionImages : {type: [String],default: []},
    brand: { type: String, required: true },
    thumbnail: { type: String, required: false },
    images: { type: [String], default: [] },
    category: { type: CategorySchema, required: true },
    information: { type: InformationSchema, required: true },
    extraInformation: { type: [ExtraInformationSchema], default: [] },
    tags: { type: [String], default: [] },
    rating: {
      average: { type: Number, default: 0 },
      count: { type: Number, default: 0 },
    },
    status: {
      type: String,
      enum: Object.values(ProductStatus),
      default: ProductStatus.AVAILABLE,
    },
    dimensions: {
      width: { type: Number },
      height: { type: Number },
      depth: { type: Number },
    },
    weight: { type: Number },
    isFeatured: { type: Boolean, default: false },
    isNew: { type: Boolean, default: false },
  },
  {
    timestamps: true, // createdAt, updatedAt
     suppressReservedKeysWarning: true
  }
);

const Product = models.Product || model<Product_interface>('Product', ProductSchema);
export default Product;