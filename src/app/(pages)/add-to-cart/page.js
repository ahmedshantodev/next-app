"use client";
import React from "react";
import AddToCartListItem from "../../components/layout/AddToCartListItem";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks";

const AddToCart = () => {
  const addToCartData = useAppSelector((state) => state.cartDetails.cartItems);
  
  const subtotal = addToCartData.reduce((sum, product) => {
    return sum + product.price * product.cartQun;
  }, 0);

  return (
    <section className="max-w-container mx-auto px-2.5 py-[60px]">
      <div className="border-2 border-border-color rounded-lg mb-6">
        <div className="bg-[#e9e9e9] py-3 px-5 flex">
          <div className="w-[40%]">
            <p className="text- font-poppins">Product</p>
          </div>

          <div className="w-[20%] pl-2">
            <p className="text- font-poppins">Price</p>
          </div>

          <div className="w-[20%]">
            <p className="text- font-poppins">Quantity</p>
          </div>

          <div className="w-[15%]">
            <p className="text- font-poppins">Total</p>
          </div>

          <div className="w-[5%] text-center">
            <p className="text- font-poppins">Action</p>
          </div>
        </div>

        <div className="[&>*:nth-child(even)]:bg-[#f7f7f8]">
          {addToCartData.map((item) => (
            <AddToCartListItem key={item.id} product={item} />
          ))}
        </div>
      </div>

      <div className="mb-8">
        <table className="w-[600px] ml-auto border-2 border-border-color">
          <tr>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              subtotal
            </td>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              ${subtotal.toFixed(2)}
            </td>
          </tr>

          <tr>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              Discount
            </td>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              10%
            </td>
          </tr>

          <tr>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              Total
            </td>
            <td className="w-1/2 px-5 py-2.5 border-2 border-border-color">
              $50.00
            </td>
          </tr>
        </table>
      </div>

      <div className="flex items-center justify-between">
        <Link
          href={"/pages/all-products"}
          className="font-poppins text-lg text-secondary-text hover:underline"
        >
          Continue Shopping
        </Link>

        <Link
          href={"/check-out"}
          className="font-poppins text-lg text-white bg-primary-color rounded-md px-5 py-2.5"
        >
          Check Out
        </Link>
      </div>
    </section>
  );
};

export default AddToCart;
