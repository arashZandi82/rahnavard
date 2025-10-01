import React from 'react';
import { RiDeleteBin2Line } from 'react-icons/ri';

const MediaForm = ({prop} : any) => {

    const {
        thumbnail,
        thumbnail_Preview,
        ResetThumbnail,
        ThumbnailChangeHandler,
        images , 
        imagePreviews,
        handleImageChange,
        removeImage,
    } = prop

    return (
        <div className='flex flex-col gap-y-5'>
            <div className=" text-Regular-Normal-text-1">
                <p className="mb-4">تامنیل:</p>
                <input
                    type="file"
                    id="thumbnailInput"
                    accept="image/*"
                    onChange={ThumbnailChangeHandler}
                    style={{ display: 'none' }}
                />
                <label htmlFor="thumbnailInput" className="bg-primary-300 hover:bg-primary-200 hover:cursor-pointer   text-Neutral-800 hover:text-Neutral-900 py-2 px-3  w-full rounded-lg text-Regular-Caption-1 lg:text-Regular-Normal-text-2">
                    {thumbnail ? thumbnail.name : "انتخاب تصویر"}
                </label>
                {thumbnail_Preview && (
                    <div className="relative mt-4 w-fit">
                        <img
                            src={thumbnail_Preview}
                            alt="thumbnail Preview"
                            className="w-56 mt-5 object-cover rounded-lg"
                        />
                        <button onClick={ResetThumbnail} className="absolute mt-2 mr-2 top-0 right-0 bg-Error-50 hover:bg-Error-300 text-Error-700 hover:text-Error-50 rounded-full p-1"><RiDeleteBin2Line /></button>
                    </div>
                )}
            </div>
            <div className=" text-Regular-Normal-text-1">
                <p className="mb-4">عکس های محصول</p>
                <input
                    type="file"
                    id="imagesInput"
                    multiple
                    accept="image/*"
                    onChange={handleImageChange}
                    className="ml-7 drop-shadow-md rounded text-Dark py-2 pr-3 w-full md:w-1/2 bg-secondary-gray text-text-light focus:outline-none focus:ring-2 focus:ring-primary-red-2 ring-secondary-red-1"
                    style={{ display: 'none' }}
                />
                <label htmlFor="imagesInput" className="bg-primary-300 hover:bg-primary-200 hover:cursor-pointer   text-Neutral-800 hover:text-Neutral-900 py-2 px-3  w-full rounded-lg text-Regular-Caption-1 lg:text-Regular-Normal-text-2">
                    {images.length > 0 ? `${images.length} تصویر انتخاب شده ` : "انتخاب تصاویر"}
                </label>
                <div className="flex flex-wrap gap-4 mt-5">
                    {imagePreviews.map((preview : any, index: number) => (
                        <div key={index} className="relative flex flex-wrap items-center justify-center">
                            <img
                                src={preview}
                                alt={`Preview ${index}`}
                                className="w-56 object-cover rounded-lg"
                            />
                            <button onClick={() => removeImage(index)} className="absolute mt-2 mr-2 top-0 right-0 bg-Error-50 hover:bg-Error-300 text-Error-700 hover:text-Error-50 rounded-full p-1"><RiDeleteBin2Line /></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MediaForm;