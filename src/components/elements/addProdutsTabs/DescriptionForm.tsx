import React from 'react';
import INPUT from '../INPUT';
import TiptapEditor from '@/module/TiptapEditor';

const DescriptionForm = ({data , changeHandler , DATA_Error , setdescriptionimages}:{data:any , changeHandler:any , DATA_Error:any , setdescriptionimages:any}) => {

    const { shortDescription , description } = data

    return (
        <div className="mt-8 flex flex-col gap-y-5">
            <INPUT
                    label="توضیح کوتاه:"
                    type="text"
                    name="shortDescription"
                    value={shortDescription}
                    placeholder="توضیح کوتاه را وارد کنید"
                    changeHandler={changeHandler}
                    textarea={true}
                    error={DATA_Error?.shortDescription || ''}
                />
            <div>
                <p className="mb-2 text-Regular-Normal-text-2 lg:text-Regular-Normal-text-1">توضیحات:</p>
                <TiptapEditor 
                    content={description} 
                    onChange={(con) => changeHandler({ target: { name: "description", value: con } })} 
                    setImages={setdescriptionimages} 
                />
                { DATA_Error.description ? <span className='text-Regular-Caption-1 lg:text-Regular-Normal-text-2 ml-4 text-Error-400'>{DATA_Error.description}</span> : null}
            </div>
        </div>
    );
};

export default DescriptionForm;