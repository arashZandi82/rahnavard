import { ERROR } from "@/types/enums/MessageUnum";

// Product form validation (same style as propertyFormValidationResponse)
export const productFormValidationResponse = (
  data: any
): { isValid: boolean; response: string } => {
  let isValid = true;
  let response = "";

  if (!data.title) {
    response = "title field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.englishTitle) {
    response = "englishTitle field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.shortDescription) {
    response = "shortDescription field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.description) {
    response = "description field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.brand) {
    response = "brand field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.category?.levelOne) {
    response = "category levelOne field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.category?.levelTwo) {
    response = "category levelTwo field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.information?.quantity) {
    response = "quantity field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.information?.price) {
    response = "price field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  if (
    data.information?.discount?.haveDiscount &&
    !data.information?.discount?.discountPercent
  ) {
    response = "discountPercent field must be filled when haveDiscount is true.";
    isValid = false;
    return { isValid, response };
  }

  if (!data.status) {
    response = "status field must be filled.";
    isValid = false;
    return { isValid, response };
  }

  // optional checks (dimensions, weight, etc.) => می‌تونی اضافه کنی اگه اجباری شدن
  // if (!data.dimensions?.width) ...
  // if (!data.weight) ...

  return { isValid, response };
};