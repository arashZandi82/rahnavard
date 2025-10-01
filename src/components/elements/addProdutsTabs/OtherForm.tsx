import React from 'react';
import INPUT from '../INPUT';

const OtherForm = ({data, DATA_Error ,changeHandler , handleInformationChange}: any) => {

    const { weight  , dimensions , isFeatured , isNew} = data
    const { width , height , depth} = dimensions

    return (
        <div className="lg:w-1/2 mt-8 flex flex-col gap-y-5">
            <INPUT
                label="وزن محصول:"
                type="number"
                name="weight"
                value={weight || ''}
                placeholder="وزن را وارد کنید"
                changeHandler={changeHandler}
                textarea={false}
                error={DATA_Error?.weight || ""}
            />
            <INPUT
                label="طول جعبه محصول :"
                type="text"
                name="height"
                value={height || ""}
                placeholder="طول را وارد کنید"
                changeHandler={handleInformationChange}
                textarea={false}
                error={DATA_Error?.dimensions.height || ''}
            />
            <INPUT
                label="عرض جعبه محصول :"
                type="text"
                name="width"
                value={width || ""}
                placeholder="عرض را وارد کنید"
                changeHandler={handleInformationChange}
                textarea={false}
                error={DATA_Error?.dimensions.width || ''}
            />
            <INPUT
                label="عمق جعبه محصول :"
                type="text"
                name="depth"
                value={depth || ""}
                placeholder="عمق را وارد کنید"
                changeHandler={handleInformationChange}
                textarea={false}
                error={DATA_Error?.dimensions.depth || ''}
            />
            <div className="flex items-center gap-x-2">
                <input
                className="w-4 h-4 appearance-none border rounded-md border-Neutral-400 checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✔'] p-2 checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                type="checkbox"
                checked={isFeatured}
                name="isFeatured"
                onChange={handleInformationChange}
                />
                <p>ویژه؟</p>
            </div>
            <div className="flex items-center gap-x-2">
                <input
                className="w-4 h-4 appearance-none border rounded-md border-Neutral-400 checked:bg-primary-500 checked:border-primary-500 relative checked:after:content-['✔'] p-2 checked:after:absolute checked:after:text-white checked:after:font-bold checked:after:left-1/2 checked:after:top-1/2 checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
                type="checkbox"
                checked={isNew}
                name="isNew"
                onChange={handleInformationChange}
                />
                <p>محصول جدید ؟</p>
            </div>
        </div>
    );
};

export default OtherForm;