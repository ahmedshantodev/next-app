"use client";
import React, { useEffect, useRef, useState } from "react";
import { RiUser3Line, RiHeart3Line, RiShoppingCartLine } from "react-icons/ri";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const Header = () => {
  const [allCategoryOpen, setAllCategoryOpen] = useState(false);
  const [allProducts, setAllProducts] = useState(null);
  const addToCartData = useAppSelector((state) => state.cartDetails.cartItems)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const allCategorys = [
    ...new Set(allProducts?.products.map((item) => item.category)),
  ];

  return (
    <section className="border border-border-color">
      <div className="max-w-container mx-auto px-2.5 py-4 flex items-center justify-between">
        <Link href={"/"} className="font-arial text-2xl text-secondary-text">
          E-commarce
        </Link>

        <div className="flex rounded-[6px] items-center border-primary-color border">
          <input
            type={"text"}
            placeholder={"Search For items"}
            className={
              "py-3 px-4 w-[424px] outline-none font-poppins placeholder:text-secondary-text text-secondary-text rounded-bl-md rounded-tl-lg"
            }
          />

          <div className="relative">
            <button
              onClick={() => setAllCategoryOpen(!allCategoryOpen)}
              className={
                "flex items-center bg-white font-poppins font-mediums capitalize gap-x-3 px-3 py-3 border-l border-primary-color"
              }
            >
              all category{" "}
              <FiChevronDown
                className={`mt-1 transition-all duration-150 ease-in ${
                  allCategoryOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <div
              onClick={() => setAllCategoryOpen(!allCategoryOpen)}
              className={`bg-white z-30 w-[150px] text-center py-4 absolute top-[30px] left-2/4 -translate-x-2/4 rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-150 ease-in space-y-2 [&>*:nth-last-child(1)]:text-primary-color ${
                allCategoryOpen
                  ? "visible opacity-100 translate-y-5"
                  : "invisible opacity-0 translate-y-0"
              }`}
            >
              {allCategorys.map((item , index) => (
                <p
                  key={index}
                  className={
                    "capitalize hover:text-primary-color font-poppins cursor-pointer"
                  }
                >
                  {item}
                </p>
              ))}

              <Link
                href={"/category"}
                className={
                  "block capitalize hover:text-primary-color font-poppins cursor-pointer"
                }
              >
                view more
              </Link>
            </div>
          </div>

          <button className="bg-primary-color text-white py-4 px-5 text-lg group/button rounded-br-[6px] rounded-tr-[6px]">
            <FiSearch className="group-hover/button:scale-110 transition-all duration-200 ease-in" />
          </button>
        </div>

        <div className={"flex items-center gap-x-8"}>
          <Link href={"/account"} className={"flex items-center gap-x-2 group"}>
            <RiUser3Line className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />

            <p
              className={
                "font-medium font-poppins capitalize text-[19px] group-hover:text-primary-color transition-all duration-300 ease-in"
              }
            >
              account
            </p>
          </Link>

          <Link
            href={"/wishlist"}
            className={"flex items-center gap-x-2 group"}
          >
            <div className=" relative">
              <RiHeart3Line className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />
              {/* <span className="flex items-center justify-center absolute -top-[5px] -right-[5px] text-[10px] bg-primary-color w-[16px] h-[16px] text-white rounded-full">
                  5
                </span> */}
            </div>

            <p
              className={
                "font-medium font-poppins capitalize text-[19px] group-hover:text-primary-color transition-all duration-300 ease-in"
              }
            >
              wishlist
            </p>
          </Link>

          <Link
            href={"/add-to-cart"}
            className={"flex items-center gap-x-2 group"}
          >
            <div className=" relative">
              <RiShoppingCartLine className="text-[22px] group-hover:text-primary-color transition-all duration-300 ease-in" />
              {addToCartData?.length && (
                <span className="flex items-center justify-center absolute -top-[5px] -right-[5px] text-[10px] bg-primary-color w-[16px] h-[16px] text-white rounded-full">
                  {addToCartData?.length}
                </span>
              )}
            </div>

            <p
              className={
                "font-medium font-poppins capitalize text-[19px] group-hover:text-primary-color transition-all duration-300 ease-in"
              }
            >
              cart
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
