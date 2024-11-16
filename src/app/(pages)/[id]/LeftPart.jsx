import React from "react";

const LeftPart = ({ products }) => {
  return (
    <div className="w-[45%]">
      <div className="border border-border-color rounded-md overflow-hidden">
        <img
          src={products?.thumbnail}
          alt="product-image"
          className="w-full aspect-square object-cover bg-[#f7f7f8]"
        />
      </div>
    </div>
  );
};

export default LeftPart;
