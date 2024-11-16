"use client";

import React, { useState } from "react";

const BottomPart = ({ products }) => {
  const [activeItem, setActiveItem] = useState("description");  

  return (
    <div>
      <div className="mb-5">
        <div className="flex gap-x-10 border-b-2 border-border-color mb-5">
          <button
            onClick={() => setActiveItem("description")}
            className={
              activeItem === "description"
                ? "pb-4 font-poppins font-semibold text-lg text-primary-color relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#64B496]"
                : "pb-4 font-poppins font-semibold text-lg text-primary-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#64B496] hover:after:w-full hover:text-primary-color after:transition-all after:duration-100 after:ease-linear"
            }
          >
            Description
          </button>

          <button
            onClick={() => setActiveItem("review")}
            className={
              activeItem === "review"
                ? "pb-4 font-poppins font-semibold text-lg text-primary-color relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-[#64B496]"
                : "pb-4 font-poppins font-semibold text-lg text-primary-text relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-[#64B496] hover:after:w-full hover:text-primary-color after:transition-all after:duration-100 after:ease-linear"
            }
          >
            Review
          </button>
        </div>

        {activeItem === "description" ? (
          <div>
            <p className="font-poppins font-base text-secondary-text leading-[28px]">
              {products?.description}
            </p>
          </div>
        ) : (
          <div className="flex gap-5">
            {products?.reviews.map((item, index) => (
              <div
                key={index}
                className="w-1/3 bg-[#f7f7f8] px-4 py-2.5 rounded-lg font-poppins space-y-2 text-secondary-text"
              >
                <p className="font-poppins text-secondary-text">
                  <span className="text-black">Review:</span> {item.comment}
                </p>

                <p>
                  <span className="text-black">Retting:</span> {item.rating}{" "}
                  star
                </p>

                <p>
                  <span className="text-black">Email:</span>{" "}
                  {item.reviewerEmail}
                </p>

                <p>
                  <span className="text-black">Name:</span> {item.reviewerName}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="border-b-2 border-border-color mb-5">
          <button className="pb-4 font-poppins font-semibold text-lg text-primary-text">
            Packaging & Delivery
          </button>
        </div>

        <div>
          <p className="font-poppins font-base text-secondary-text leading-[28px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in
            vero sapiente odio, error dolore vero temporibus consequatur, nobis
            veniam odit dignissimos consectetur quae in perferendis
            doloribusdebitis corporis, eaque dicta, repellat amet, illum
            adipisci vel perferendis dolor! Quis vel consequuntur repellat
            distinctio rem. Corrupti ratione alias odio, error dolore temporibus
            consequatur, nobis veniam odit laborum dignissimos consectetur quae
            vero in perferendis provident quis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomPart;
