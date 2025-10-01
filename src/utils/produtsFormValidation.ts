import { ERROR } from "@/types/enums/MessageUnum";

// Product form validation
export const productFormValidation = (data: any, DATA_Error: any): any => {
  const errors = {
    // Identification
    sku: DATA_Error?.sku,
    title: DATA_Error?.title,
    englishTitle: DATA_Error?.englishTitle,

    // Descriptions
    shortDescription: DATA_Error?.shortDescription,
    description: DATA_Error?.description,

    // Brand & media
    brand: DATA_Error?.brand,
    thumbnail: DATA_Error?.thumbnail,
    images: DATA_Error?.images,

    // Category
    category: {
      levelOne: DATA_Error?.category.levelOne,
      levelTwo: DATA_Error?.category.levelTwo,
    },

    // Information
    information: {
      quantity: DATA_Error?.information.quantity,
      colors: DATA_Error?.information.colors,
      price: DATA_Error?.information.price,
      discount: {
        haveDiscount: DATA_Error?.information.discount.haveDiscount,
        discountPercent: DATA_Error?.information.discount.discountPercent,
      },
    },

    // Extra info
    extraInformation: DATA_Error?.extraInformation,

    // Tags
    tags: DATA_Error?.tags,

    // Rating
    rating: {
      average: DATA_Error?.rating.average,
      count: DATA_Error?.rating.count,
    },

    // Status
    status: DATA_Error?.status,

    // Dimensions
    dimensions: {
      width: DATA_Error?.dimensions.width,
      height: DATA_Error?.dimensions.height,
      depth: DATA_Error?.dimensions.depth,
    },

    // Weight
    weight: DATA_Error?.weight,

    // Flags
    isFeatured: DATA_Error?.isFeatured,
    isNew: DATA_Error?.isNew,
  };

  // Validation rules
  if (!data.sku) errors.sku = ERROR.REQUIRED_FIELD;
  else errors.sku = "";

  if (!data.title) errors.title = ERROR.REQUIRED_FIELD;
  else errors.title = "";

  if (!data.englishTitle) errors.englishTitle = ERROR.REQUIRED_FIELD;
  else errors.englishTitle = "";

  if (!data.shortDescription) errors.shortDescription = ERROR.REQUIRED_FIELD;
  else errors.shortDescription = "";

  if (!data.description) errors.description = ERROR.REQUIRED_FIELD;
  else errors.description = "";

  if (!data.brand) errors.brand = ERROR.REQUIRED_FIELD;
  else errors.brand = "";

  if (!data.thumbnail) errors.thumbnail = ERROR.REQUIRED_FIELD;
  else errors.thumbnail = "";

  if (!data.category.levelOne) errors.category.levelOne = ERROR.REQUIRED_FIELD;
  else errors.category.levelOne = "";

  if (!data.category.levelTwo) errors.category.levelTwo = ERROR.REQUIRED_FIELD;
  else errors.category.levelTwo = "";

  if (!data.information.quantity) errors.information.quantity = ERROR.REQUIRED_FIELD;
  else errors.information.quantity = "";

  if (!data.information.price) errors.information.price = ERROR.REQUIRED_FIELD;
  else errors.information.price = "";

  // discountPercent is optional, but if haveDiscount is true it must be > 0
  if (data.information.discount.haveDiscount && !data.information.discount.discountPercent) {
    errors.information.discount.discountPercent = ERROR.REQUIRED_FIELD;
  } else {
    errors.information.discount.discountPercent = "";
  }

  if (!data.status) errors.status = ERROR.REQUIRED_FIELD;
  else errors.status = "";

  // optional but still validate if required in future
  if (!data.dimensions.width) errors.dimensions.width = "";
  if (!data.dimensions.height) errors.dimensions.height = "";
  if (!data.dimensions.depth) errors.dimensions.depth = "";

  if (!data.weight) errors.weight = "";

  return errors;
};