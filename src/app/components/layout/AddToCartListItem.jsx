import React from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch } from "@/lib/hooks";
import { updateQuantity } from "@/lib/features/counter/cartSlice";

const AddToCartListItem = ({ product }) => {
  const dispatch = useAppDispatch()
  const handleIncrement = () => {
    dispatch(updateQuantity({ id: product.id, cartQun: product.cartQun, act: "plus" }))
  };

  const handleDecrement = () => {
    dispatch(updateQuantity({ id: product.id, cartQun: product.cartQun, act: "minus" }))
  };

  return (
    <div className="py-5 px-5 flex transition-all duration-150 ease-in-out">
      <div className="w-[40%] flex items-center gap-x-1">
        <div className="w-[15%]">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[60px] aspect-square object-cover rounded-md border-2 border-border-color"
          />
        </div>

        <p className="w-[85%] text-lg font-poppins line-clamp-2">
          {product.title}
        </p>
      </div>

      <div className="w-[20%] pl-2 flex items-center">
        <p className="font-poppins text-secondary-text">
          {product.price}
        </p>
      </div>

      <div className="w-[20%] flex items-center">
        <p className="text- font-poppins">
          <div className="flex items-center gap-x-2.5">
            <button onClick={handleDecrement} className="w-[35px] h-[35px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer">
              <HiOutlineMinusSm />
            </button>

            <p className="w-[45px] h-[35px] text-sm font-lato text-primary-text flex items-center justify-center border-2 border-border-color rounded-lg">
              {product.cartQun}
            </p>

            <button
              onClick={handleIncrement}
              className="w-[35px] h-[35px] flex items-center justify-center border-2 border-border-color rounded-lg text-primary-text hover:text-white hover:bg-primary-color hover:border-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer"
            >
              <GoPlus />
            </button>
          </div>
        </p>
      </div>

      <div className="w-[15%] flex items-center">
        <p className="font-poppins text-secondary-text">${(product.cartQun * product.price).toFixed(2)}</p>
      </div>

      <div className="w-[5%] flex items-center justify-center">
        <AiOutlineDelete className="text-2xl hover:text-primary-color transition-all duration-200 ease-in-out active:scale-[0.97] cursor-pointer" />
      </div>
    </div>
  );
};

export default AddToCartListItem;
