"use client"
import React, { useState } from "react";
import { TbFilter } from "react-icons/tb";
import { BsGrid } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";
import ProductCard from "@/app/components/layout/ProductCard";
import { useAppDispatch } from "@/lib/hooks";
import { cartTotal } from "@/lib/features/counter/cartSlice";
import toast from "react-hot-toast";

const ProductListPart = ({
  allProducts,
  isLoading,
  filteredCategory,
  isCategoryOpen,
  setIsCategoryOpen,
}) => {
  const dispatch = useAppDispatch()
  const [listDesign, setListDesign] = useState("grid");
  const [searchValue, setSearchValue] = useState("");
  
  const notify = () => toast.success("Here is your toast.");
  
  const handleAddToCart = (product) => {
    dispatch(cartTotal({ ...product }))
    notify();
  };

  return (
    <div className={isCategoryOpen ? "w-3/4" : "w-full"}>
      <div className="bg-[#f7f7f8] rounded-lg border-2 border-border-color mb-5 py-2 px-3 flex items-center justify-between">
        <div className="flex items-center gap-x-5">
          <div className="flex gap-x-3">
            {isCategoryOpen ? (
              <button
                title="close filter"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-[40px] h-[40px] bg-white flex items-center justify-center border-2 border-primary-color rounded-lg text-primary-color hover:text-primary-color hover:bg-white hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
              >
                <RxCross2 className="text-xl" />
              </button>
            ) : (
              <button
                title="open filter"
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="w-[40px] h-[40px] bg-white flex items-center justify-center border-2 border-border-color rounded-lg text-secondary-text hover:text-primary-color hover:bg-white hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
              >
                <TbFilter className="text-xl" />
              </button>
            )}

            <button
              title="add to favorites"
              onClick={() => setListDesign("grid")}
              className={
                listDesign === "grid"
                  ? "w-[40px] h-[40px] flex items-center justify-center border-2 border-primary-color rounded-lg text-primary-color hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
                  : "w-[40px] h-[40px] flex items-center justify-center border-[3px] border-border-color rounded-lg text-secondary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
              }
            >
              <BsGrid className="text-xl" />
            </button>

            <button
              title="add to favorites"
              onClick={() => setListDesign("line")}
              className={
                listDesign === "line"
                  ? "w-[40px] h-[40px] flex items-center justify-center border-2 border-primary-color rounded-lg text-primary-color hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
                  : "w-[40px] h-[40px] flex items-center justify-center border-[3px] border-border-color rounded-lg text-secondary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
              }
            >
              <TfiMenuAlt className="text-xl" />
            </button>
          </div>

          <p className="font-poppins text-base text-secondary-text">
            We found {allProducts?.products.length} items for you!
          </p>
        </div>

        <div>
          <input
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search product name"
            className="w-[300px] py-2 px-4 rounded-lg border-2 border-border-color outline-none"
          />
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-4">
        {isLoading ? (
          <div className="font-poppins text-2xl text-secondary-text">
            Loading....
          </div>
        ) : (
          filteredCategory
            .filter((item) =>
              searchValue
                ? item.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase()) ||
                  item.category
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                : item
            )
            .map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                className={isCategoryOpen ? "w-[32%]" : "w-[24%]"}
                image={item.thumbnail}
                category={item.category}
                ratting={item.rating}
                brand={item.brand}
                productName={item.title}
                offerPrice={(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}
                normalPrice={item.price}
                onClick={() => handleAddToCart(item)}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default ProductListPart;
