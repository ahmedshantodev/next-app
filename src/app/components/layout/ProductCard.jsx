import React, { useRef } from "react";
import { RiShoppingCartLine, RiStarHalfFill, RiStarFill } from "react-icons/ri";
import Link from "next/link";
import StarRating from "./StarRating";

const ProductCard = ({
  id,
  className,
  image,
  category,
  ratting,
  productName,
  brand,
  offerPrice,
  normalPrice,
  onClick,
}) => {
  return (
    <div
      className={`${className} relative bg-white border border-[#e9e9e9] rounded-[15px] overflow-hidden`}
    >
      <p className="absolute top-0 left-0 inline-block bg-cus-pink text-white py-2 px-5 rounded-br-[20px] font-lato text-sm">
        Hot
      </p>

      <Link href={id.toString()} className="bg-[#f7f7f8]">
        <img src={image} alt="" className="w-full h-[300px] object-cover" />
      </Link>

      <div className="px-5 pb-5 pt-3">
        <p className="font-poppins text-sm text-secondary-text capitalize mb-1">
          {category}
        </p>

        <Link
          href={id.toString()}
          className="block font-poppins font-medium text-lg mb-1 hover:underline"
        >
          {productName}
        </Link>

        <div className={"flex justify-centers gap-x-[6px] mb-1"}>
          <StarRating rating={ratting} />

          <p className={"font-poppins text-[13px] text-secondary-text"}>
            ({ratting})
          </p>
        </div>

        <p className="font-poppins text-sm text-secondary-text mb-1">
          By <span className="text-secondary-color font-medium">{brand}</span>
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-end gap-x-1">
            <p className="font-poppins text-xl font-semibold text-secondary-color">
              ${offerPrice}
            </p>

            <del className="font-poppins font-medium text-secondary-text">
              ${normalPrice}
            </del>
          </div>

          <button
            onClick={onClick}
            className="flex items-center gap-x-2 bg-primary-color px-3 py-[6px] text-white rounded-md active:scale-[0.97] transition-all duration-150 ease-in-out"
          >
            <RiShoppingCartLine className="text-xl" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
