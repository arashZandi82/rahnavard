"use client";

import ImageWithFallback from "@/elements/ImageWithFallback";
import { useEffect, useRef, useState } from "react";
import Slider from "./Slider";
import LikeProduct from "@/elements/buttons/LikeProduct";

interface Props {
  images: string[];
  thumbnail?: string;
  tags?: string[];
  description: string;
  id ?: string
  isliked ?: boolean
  className ? :string
}

const PropertyGallery = ({ images, thumbnail, tags, description , id , isliked  ,className}: Props) => {
  const [show, setShow] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const showHandler = () => setShow(!show);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    if (show) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [show]);

  // Close when clicking outside slider
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };

  return (
    <div className={className}>
       <div className="relative">
            <ImageWithFallback
                src={thumbnail || ""}
                alt={description || "Property thumbnail"}
                type="thumbnail"
                style="w-full !rounded-xl h-full"
            />
            <div className="absolute top-2 left-2 flex flex-col gap-y-1">
              <LikeProduct id={id} isliked={isliked} />
					</div>
       </div>
       <div dir={'ltr'} className="grid grid-cols-3 gap-x-4 mt-4">
        {
            images.slice(0, 2).map((img, idx) => (
            <ImageWithFallback
              key={idx}
              src={img}
              alt={description || "Property image"}
              type="thumbnail"
              style="w-full !rounded-xl h-full"
            />
          ))
        }
        {
            images[3] && (
            <div className="relative">
              <ImageWithFallback
                src={images[3]}
                alt={description || "Property image"}
                type="thumbnail"
                style="w-full !rounded-xl h-full"
              />
              <p
                onClick={showHandler}
                className="hover:cursor-pointer absolute top-0 bg-black/50  text-Neutral-100 w-full h-full rounded-xl text-center flex justify-center items-center"
              >
                + {images.length - 2}
              </p>
            </div>)
        }
       </div>
       <div>
        {show && (
            <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
            >
                <div ref={modalRef}>
                    <Slider images={images} />
                </div>
            </div>
        )}
        </div>
    </div>
  );
};

export default PropertyGallery;