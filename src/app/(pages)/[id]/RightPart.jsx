"use client";

import React, { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import { RiHeart3Line } from "react-icons/ri";
import { GoGitCompare } from "react-icons/go";
import StarRating from "@/app/components/layout/StarRating";
import { useAppDispatch } from "@/lib/hooks";
import { cartTotal } from "@/lib/features/counter/cartSlice";
import toast from "react-hot-toast";
const notify = () => toast.success("item added");

const RightPart = ({ products }) => {
  const dispatch = useAppDispatch()
  
  const handleAddToCart = () => {
    dispatch(cartTotal({ ...products }))
    notify();
  };

  return (
    <div className="w-[55%]">
      <div className="border-b-2 border-border-color pb-5">
        <h3 className="text-[28px] font-poppins font-mediums tracking-[0.48px]">
          {products?.title}
        </h3>

        <p className="font-lg font-poppins text-secondary-text tracking-[0.48px] mt-1">
          {products?.description}
        </p>
      </div>

      <div className="mt-5">
        <div className="flex gap-x-2 items-center">
          <StarRating rating={products?.rating} />

          <p className=" font-poppins text-secondary-text">
            {products?.rating}
          </p>

          <p className=" font-poppins text-secondary-text">
            ( Review {products?.reviews.length} )
          </p>
        </div>

        <div className="mt-5 space-y-[10px]">
          <div className="flex items-center gap-x-3">
            <div className="flex justify-between items-center w-[130px] font-arial tracking-[0.48px] text-primary-text font-medium text-lg">
              <p>Brand</p>
              <p>:</p>
            </div>

            <p className="font-arial tracking-[0.48px] text-secondary-text text-lg">
              {products?.brand}
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex justify-between items-center w-[130px] font-arial tracking-[0.48px] text-primary-text font-medium text-lg">
              <p>Category</p>
              <p>:</p>
            </div>

            <p className="font-arial tracking-[0.48px] text-secondary-text text-lg">
              {products?.category}
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex justify-between items-center w-[130px] font-arial tracking-[0.48px] text-primary-text font-medium text-lg">
              <p>Stock</p>
              <p>:</p>
            </div>

            <p className="font-arial tracking-[0.48px] text-secondary-text text-lg">
              {products?.stock}
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex justify-between items-center w-[130px] font-arial tracking-[0.48px] text-primary-text font-medium text-lg">
              <p>Warranty</p>
              <p>:</p>
            </div>

            <p className="font-arial tracking-[0.48px] text-secondary-text text-lg">
              {products?.warrantyInformation}
            </p>
          </div>

          <div className="flex items-center gap-x-3">
            <div className="flex justify-between items-center w-[130px] font-arial tracking-[0.48px] text-primary-text font-medium text-lg">
              <p>Shipping</p>
              <p>:</p>
            </div>

            <p className="font-arial tracking-[0.48px] text-secondary-text text-lg">
              {products?.shippingInformation}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-x-2">
          <p className="font-poppins font-semibold text-2xl tracking-[0.48px] text-primary-color">
            ${(products?.price - (products?.price * (products?.discountPercentage / 100))).toFixed(2)}
          </p>
          <del className="font-poppins font- text-lg tracking-[0.48px] text-secondary-text">
            ${products?.price}
          </del>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex gap-x-10">
          <div className="flex items-center gap-x-2.5">
            <button className="w-[50px] h-[50px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer">
              <HiOutlineMinusSm className="text-2xl" />
            </button>

            <p className="w-[90px] h-[50px] text-xl text-primary-text flex items-center justify-center border-2 border-border-color rounded-lg">
              1
            </p>

            <button className="w-[50px] h-[50px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer">
              <GoPlus className="text-2xl" />
            </button>
          </div>

          <div className="flex gap-x-4">
            <button
              onClick={handleAddToCart}
              className="h-[50px] bg-white text-primary-text font-poppins font-medium px-10 flex items-center justify-center border-2 border-border-color rounded-lg hover:bg-primary-color hover:text-white hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.99]"
            >
              Add to cart
            </button>

            <button
              title="add to favorites"
              className="w-[50px] h-[50px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
            >
              <RiHeart3Line className="text-2xl" />
            </button>

            <button
              title="compare"
              className="w-[50px] h-[50px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
            >
              <GoGitCompare className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPart;
