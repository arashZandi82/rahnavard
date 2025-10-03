"use client"

import Basicform from "@/elements/addProdutsTabs/Basicform";
import DescriptionForm from "@/elements/addProdutsTabs/DescriptionForm";
import InformationForm from "@/elements/addProdutsTabs/InformationForm";
import MediaForm from "@/elements/addProdutsTabs/MediaForm";
import OtherForm from "@/elements/addProdutsTabs/OtherForm";
import Loader from "@/elements/Loader";
import { ProductStatus } from "@/types/enums/generalEnums";
import { ERROR } from "@/types/enums/MessageUnum";
import { Product_interface } from "@/types/modelTypes";
import { productFormValidationResponse } from "@/utils/productFormValidationResponse";
import { productFormValidation } from "@/utils/produtsFormValidation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const AddproductsPage = () => {

    const router = useRouter(); // used for redirect after submission
    const hasMounted = useRef(false); // to avoid triggering effects on first render

    // Manage active tab for switching between form sections
    const [activeTab, setActiveTab] = useState<"basic" | "description" | "information" | "media" | "other">("basic");

    // UI states
    const [uploadProgress, setUploadProgress] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);
    const [showCropModal, setShowCropModal] = useState(false);

    // Media states (thumbnail, floor plan, gallery)
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [thumbnail_Preview, setThumbnail_Preview] = useState<string | null>(null);
    const [images, setimages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [descriptionimages, setdescriptionimages] = useState<File[]>([]);

    // State for product form data
    const [data, setData] = useState<Product_interface>({
        title: "",
        englishTitle: "",
        shortDescription: "",
        description: "",
        brand: "",
        thumbnail: "",
        images: [],
        category: {
            levelOne: "",
            levelTwo: "",
        },
        information: {
            quantity: 0,
            colors: [],
            price: 0,
            discount: {
            haveDiscount: false,
            discountPercent: 0,
            },
        },
        extraInformation: [],
        tags: [],
        rating: {
            average: 0,
            count: 0,
        },
        status: ProductStatus.AVAILABLE, 
        dimensions: {
            width: 0,
            height: 0,
            depth: 0,
        },
        weight: 0,
        isFeatured: false,
        isNew: false,
        descriptionImages: [],
        createdAt: "",
        updatedAt: ""   });


    // State for product form validation errors
    const [DATA_Error, setDataError] = useState({
        sku: "",
        title: "",
        englishTitle: "",
        shortDescription: "",
        description: "",
        brand: "",
        thumbnail: "",
        images: "",
        category: {
            levelOne: "",
            levelTwo: "",
        },
        information: {
            quantity: '',
            colors: '',
            price: '',
            discount: {
            haveDiscount: '',
            discountPercent: '',
            },
        },
        extraInformation: '',
        tags: '',
        rating: {
            average: "",
            count: "",
        },
        status: "",
        dimensions: {
            width: "",
            height: "",
            depth: "",
        },
        weight: "",
        isFeatured: "",
        isNew: "",
    });

    useEffect(() => {
        
        if (!hasMounted.current) {
            hasMounted.current = true;
            return
        }

        setDataError(productFormValidation(data, DATA_Error));
    
    }, [data]);

    // Switch form tab
    const switchTab = (tab: typeof activeTab) => setActiveTab(tab);

    // Basic input handler for simple fields
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });        
    };

    // Reset thumbnail
    const ResetThumbnail = useCallback(() => {
        setThumbnail(null);
        setThumbnail_Preview(null);
    }, []);

    // Handle thumbnail upload + preview
    const ThumbnailChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setThumbnail(file);
            setThumbnail_Preview(URL.createObjectURL(file));
            setShowCropModal(true);
        }
    }, []);

    // Add gallery images
    const handleImageChange = (e: any) => {
        const selectedFiles = Array.from(e.target.files) as File[];
        setimages(prev => [...prev, ...selectedFiles]);
        setImagePreviews(prev => [...prev, ...selectedFiles.map(file => URL.createObjectURL(file))]);
    };

    // Remove a gallery image by index
    const removeImage = (index: number) => {
        setimages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
    };

     // Handle category changes separately
    const handleCategoryChange = (e: any) => {
        const { name, value } = e.target;

        setData((prev: any) => {
            // If parent category (levelOne) changes, reset levelTwo
            if (name === "category.levelOne") {
            return {
                ...prev,
                category: { levelOne: value, levelTwo: "" },
            };
            }

            // If child category (levelTwo) changes
            if (name === "category.levelTwo") {
            return {
                ...prev,
                category: { ...prev.category, levelTwo: value },
            };
            }

            return prev;
        })
    }

    const handleInformationChange = (e : any) => {
        const { name, value, type, checked  } = e.target;

        setData((prev: any) => {

            if (name === "quantity") return { ...prev, information: { ...prev.information, quantity: Number(value) } };
            if (name === "price") return { ...prev, information: { ...prev.information, price: Number(value) } };
            if (name === "haveDiscount") return { ...prev , information : {...prev.information , discount: { ...prev.information.discount, haveDiscount: type === "checkbox" ? checked : value === "true" } }}
            if (name === "discountPercent") return { ...prev , information : {...prev.information , discount : {...prev.information.discount , discountPercent: Number(value) } }}
            if (name === "width") return { ...prev , dimensions : {...prev.dimensions , width : Number(value)}}
            if (name === "height") return { ...prev , dimensions : {...prev.dimensions , height : Number(value)}}
            if (name === "depth") return { ...prev , dimensions : {...prev.dimensions , depth : Number(value)}}
            if (name === "isFeatured") return { ...prev , isFeatured : type === "checkbox" ? checked : value === "true" }
            if (name === "isNew") return { ...prev , isNew : type === "checkbox" ? checked : value === "true" }

            return prev
        })
    }

    // Change handler for editing a specific color by index
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        const newColors = [...data.information.colors];
        newColors[index] = value; // update specific index
        setData({
            ...data,
            information: { ...data.information, colors: newColors },
        });
    };

    // Add new empty color
    const addColorHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setData({
            ...data,
            information: {
            ...data.information,
            colors: [...data.information.colors, ""], // add empty string
            },
        });
    };

    // Delete color by index
    const deleteColorHandler = (index: number) => {
        const newColors = [...data.information.colors];
        newColors.splice(index, 1);
        setData({
            ...data,
            information: { ...data.information, colors: newColors },
        });
    };

    // Change a specific extraInformation item by index
    const handleExtraInformationChange = ( e: React.ChangeEvent<HTMLInputElement> ,index: number) => {
        const { name, value } = e.target; // name can be "key" or "value"
        const newExtra = [...data.extraInformation];

        newExtra[index] = {
            ...newExtra[index],
            [name]: value,
        };

        setData({
            ...data,
            extraInformation: newExtra,
        });
    };

    // Add a new extraInformation item
    const addExtraInformationHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setData({
            ...data,
            extraInformation: [...data.extraInformation, { key: "", value: "" }],
        });
    };

    // Delete an extraInformation item by index
    const deleteExtraInformationHandler = (index: number) => {
        const newExtra = [...data.extraInformation];
        newExtra.splice(index, 1);

        setData({
            ...data,
            extraInformation: newExtra,
        });
    };

    const handlelAddProperty = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setUploadProgress(0);

        const { isValid , response } = productFormValidationResponse(data)

        if( !isValid ){
            toast.error(response);
            setLoading(false);
            return
        }

        const formData = new FormData();
        formData.append("data", JSON.stringify(data));

        if (thumbnail) formData.append("thumbnail", thumbnail);
        images.forEach(image => formData.append("images", image));
        descriptionimages.forEach(image => formData.append("descriptionImages", image));

        try {
            const response = await axios.post('/api/product', formData, {
                headers: { "Content-Type": "multipart/form-data" },
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total) {
                        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(percentCompleted);
                    }
                }
            });

            const resData = response.data;
            setLoading(false);
            setUploadProgress(null);

            if (resData.error) {
                toast.error(resData.error);
            } else {
                toast.success(resData.message);
                router.replace("/dashboard/products");
            }
        } catch (err: any) {
            setLoading(false);
            setUploadProgress(null);
            toast.error(ERROR.PROBLEM);
        }
    };

    return (
        <div className='px-5 py-5 md:px-7'>
            {/* Page title */}
            <h1 className='text-Bold-Normal-title-3 mb-6'>افزودن محصول</h1>

            {/* Tab switcher */}
            <div className="mb-6 border-b border-gray-300 md:text-Bold-Normal-text-2 text-Bold-Caption-1  ">
                <div className="flex gap-4">
                    {/* Tab buttons */}
                    <button onClick={() => switchTab("basic")} className={activeTab === "basic" ? "text-Secondary-500 border-b-2 border-Secondary-500 pb-2" : "text-gray-700 pb-2"}>اطلاعات پایه</button>
                    <button onClick={() => switchTab("description")} className={activeTab === "description" ? "text-Secondary-500 border-b-2 border-Secondary-500 pb-2" : "text-gray-700 pb-2"}>توضیحات</button>
                    <button onClick={() => switchTab("information")} className={activeTab === "information" ? "text-Secondary-500 border-b-2 border-Secondary-500 pb-2" : "text-gray-700 pb-2"}>اطلاعات</button>
                    <button onClick={() => switchTab("other")} className={activeTab === "other" ? "text-Secondary-500 border-b-2 border-Secondary-500 pb-2" : "text-gray-700 pb-2"}>سایر</button>
                    <button onClick={() => switchTab("media")} className={activeTab === "media" ? "text-Secondary-500 border-b-2 border-Secondary-500 pb-2" : "text-gray-700 pb-2"}>تصاویر</button>
                </div>
            </div>

            {/* Active tab content */}
            <div>
                {activeTab === "basic" && <Basicform data={data} DATA_Error={DATA_Error} changeHandler={changeHandler} handleCategoryChange={handleCategoryChange} />}
                {activeTab === "description" && <DescriptionForm data={data} DATA_Error={DATA_Error} changeHandler={changeHandler} setdescriptionimages={setdescriptionimages} />}
                {activeTab === "information" && <InformationForm data={data} DATA_Error={DATA_Error} handleInformationChange={handleInformationChange} handleColorChange={handleColorChange} addColorHandler={addColorHandler} deleteColorHandler={deleteColorHandler} handleExtraInformationChange={handleExtraInformationChange} deleteExtraInformationHandler={deleteExtraInformationHandler} addExtraInformationHandler={addExtraInformationHandler} />}
                {activeTab === "other" && <OtherForm data={data} DATA_Error={DATA_Error} changeHandler={changeHandler} handleInformationChange={handleInformationChange} />}
                {activeTab === "media" && <MediaForm prop={{
                    thumbnail,
                    thumbnail_Preview,
                    ResetThumbnail,
                    setThumbnail,
                    ThumbnailChangeHandler,
                    images,
                    imagePreviews,
                    handleImageChange,
                    removeImage,
                    setThumbnail_Preview,
                    showCropModal,
                    setShowCropModal
                }} />}
            </div>

            {/* Submit button and loader */}
            <div className="mt-8 flex flex-col gap-y-4 mb-4">
                {loading ? (
                    <Loader />
                ) : (
                    <button
                        onClick={handlelAddProperty}
                        className="text-primary-200 bg-primary-600 rounded-xl py-3 text-Bold-Normal-text-2 w-full hover:bg-primary-500"
                    >
                        افزودن
                    </button>
                )}

                {/* Upload progress bar */}
                {uploadProgress !== null && (
                    <div className="w-1/4 bg-gray-200 h-2 rounded mt-2">
                        <div
                            className="bg-blue-500 h-2 rounded transition-all duration-300"
                            style={{ width: `${uploadProgress}%` }}
                        ></div>
                        <p className="text-xs text-gray-500 mt-1">{uploadProgress}% uploaded</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddproductsPage;