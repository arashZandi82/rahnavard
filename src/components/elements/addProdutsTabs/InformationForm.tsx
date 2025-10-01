import React from 'react';
import INPUT from '../INPUT';
import { FaRegTrashAlt } from 'react-icons/fa';

const InformationForm = ({
  data,
  DATA_Error,
  handleInformationChange,
  handleColorChange,
  addColorHandler,
  deleteColorHandler,
  addExtraInformationHandler,
  deleteExtraInformationHandler,
  handleExtraInformationChange
}: any) => {
  const { quantity, price, discount, colors } = data.information;
  const { haveDiscount, discountPercent } = discount;
  const { extraInformation } = data;

  return (
    <div className="lg:w-1/2 mt-8 flex flex-col gap-y-5">
      {/* Quantity */}
      <INPUT
        label="تعداد موجودی:"
        type="text"
        name="quantity"
        value={quantity || ''}
        placeholder="تعداد را وارد کنید"
        changeHandler={handleInformationChange}
        textarea={false}
        error={DATA_Error?.information.quantity || ''}
      />

      {/* Price */}
      <INPUT
        label="قیمت:"
        type="text"
        name="price"
        value={price || ""}
        placeholder="قیمت را وارد کنید"
        changeHandler={handleInformationChange}
        textarea={false}
        error={DATA_Error?.information.price || ''}
      />

      {/* Discount Checkbox */}
      <div className="flex items-center gap-x-2">
        <input
          className="w-4 h-4 appearance-none border rounded-md border-Neutral-400 checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✔'] p-2 checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
          type="checkbox"
          checked={haveDiscount}
          name="haveDiscount"
          onChange={handleInformationChange}
        />
        <p>تخفیف</p>
      </div>

      {/* Discount Percent */}
      {haveDiscount && (
        <INPUT
          label="درصد تخفیف:"
          type="text"
          name="discountPercent"
          value={discountPercent || ""}
          placeholder="درصد را وارد کنید"
          changeHandler={handleInformationChange}
          textarea={false}
          error={DATA_Error?.information.discount?.discountPercent || ''}
        />
      )}

      {/* Colors Section */}
      <div>
        <label className="block mb-2 text-Regular-Normal-text-1 font-medium">
          رنگ‌ها (HEX)
        </label>
        <div className="flex flex-col gap-y-3">
          {colors.map((color: string, index: number) => (
            <div key={index} className="flex items-center gap-x-3">
              {/* Color Picker */}
              <input
                type="color"
                value={color || "#000000"}
                onChange={(e) => handleColorChange(e, index)}
                className="w-9 h-8 rounded cursor-pointer"
              />
              {/* HEX Code Input */}
              <input
                type="text"
                dir="ltr"
                value={color}
                onChange={(e) => handleColorChange(e, index)}
                placeholder="#000000"
                className="p-2 border border-Neutral-400 rounded-lg w-full"
              />
              {/* Delete Button */}
              <button
                onClick={() => deleteColorHandler(index)}
                className="px-2 py-2 text-base bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
          {/* Add Button */}
          <button
            onClick={addColorHandler}
            className="px-3 py-2 bg-Success-800 text-white rounded-lg text-Regular-Normal-text-2 hover:bg-Success-600 w-fit"
          >
            افزودن رنگ
          </button>
        </div>
      </div>

      {/* Extra Information Section */}
      <div>
        <label className="block mb-2 text-Regular-Normal-text-1 font-medium">
          ویژگی‌های اضافه
        </label>
        <div className="flex flex-col gap-y-3">
          {extraInformation.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-x-3">
              {/* Key Input */}
              <INPUT
                label="کلید"
                type="text"
                name="key"
                value={item.key}
                placeholder="مثال: جنس"
                changeHandler={(e: any) =>
                  handleExtraInformationChange(e, index)
                }
                textarea={false}
                error={''}
              />
              {/* Value Input */}
              <INPUT
                label="مقدار"
                type="text"
                name="value"
                value={item.value}
                placeholder="مثال: پنبه"
                changeHandler={(e: any) =>
                  handleExtraInformationChange(e, index)
                }
                textarea={false}
                error={''}
              />
              {/* Delete Button */}
              <button
                onClick={() => deleteExtraInformationHandler(index)}
                className="px-2 py-2 text-base bg-red-500 text-white rounded-lg hover:bg-red-600 mt-6"
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
          {/* Add Button */}
          <button
            onClick={addExtraInformationHandler}
            className="px-3 py-2 bg-Success-800 text-white rounded-lg text-Regular-Normal-text-2 hover:bg-Success-600 w-fit"
          >
            افزودن ویژگی
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationForm;