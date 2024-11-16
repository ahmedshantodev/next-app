import React from "react";

const CategoryPart = ({
  category,
  selectedCategory,
  setSelectedCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <div className="w-1/4 p-6 bg-[#f7f7f8] rounded-lg border-2 border-border-color">
      <div className="mb-6">
        <p className="font-poppins font-medium text-lg text-primary-text pb-2 mb-2">
          Product Category
        </p>

        <div className="space-y-3">
          <p
            onClick={() => setSelectedCategory("")}
            className={
              selectedCategory === ""
                ? "font-poppins text-[17px] text-primary-color cursor-pointer capitalize"
                : "font-poppins text-[17px] text-secondary-text cursor-pointer capitalize"
            }
          >
            All category
          </p>
          {category.map((item, index) => (
            <p
              key={index}
              onClick={() => setSelectedCategory(item)}
              className={
                item === selectedCategory
                  ? "font-poppins text-[17px] text-primary-color cursor-pointer capitalize"
                  : "font-poppins text-[17px] text-secondary-text cursor-pointer capitalize"
              }
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="font-poppins font-medium text-lg text-primary-text pb-2 mb-2">
          Product Price
        </p>

        <div className="flex gap-x-2">
          <input
            type="text"
            placeholder="Min price"
            value={minPrice}
            onClick={(e) => setMinPrice(e.target.value)}
            className="w-1/2 border-2 border-border-color py-2 px-3 rounded-lg outline-none"
          />

          <input
            type="text"
            placeholder="Max price"
            value={maxPrice}
            onClick={(e) => setMaxPrice(e.target.value)}
            className="w-1/2 border-2 border-border-color py-2 px-3 rounded-lg outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <p className="font-poppins font-medium text-lg text-primary-text pb-2 mb-2">
          Product Color
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="">
              <input id="blue" type="checkbox" className="scale-[1.2] mr-2" />
              <label
                htmlFor="blue"
                className="font-poppins text-[17px] text-secondary-text"
              >
                Blue
              </label>
            </div>

            <div className="w-[20px] aspect-square rounded-lg bg-[#6c9eff]" />
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <input id="yellow" type="checkbox" className="scale-[1.2] mr-2" />
              <label
                htmlFor="yellow"
                className="font-poppins text-[17px] text-secondary-text"
              >
                Yellow
              </label>
            </div>

            <div className="w-[20px] aspect-square rounded-lg bg-[#dede44]" />
          </div>

          <div className="flex items-center justify-between">
            <div className="">
              <input id="red" type="checkbox" className="scale-[1.2] mr-2" />
              <label
                htmlFor="red"
                className="font-poppins text-[17px] text-secondary-text"
              >
                Red
              </label>
            </div>

            <div className="w-[20px] aspect-square rounded-lg bg-[#fb5555]" />
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="font-poppins font-medium text-lg text-primary-text pb-2 mb-2">
          Product Weight
        </p>

        <div className="space-y-3">
          <div className="">
            <input id="10" type="checkbox" className="scale-[1.2] mr-2" />
            <label
              htmlFor="10"
              className="font-poppins text-[17px] text-secondary-text"
            >
              10kg pack
            </label>
          </div>

          <div className="">
            <input id="20" type="checkbox" className="scale-[1.2] mr-2" />
            <label
              htmlFor="20"
              className="font-poppins text-[17px] text-secondary-text"
            >
              20kg pack
            </label>
          </div>

          <div className="">
            <input id="30" type="checkbox" className="scale-[1.2] mr-2" />
            <label
              htmlFor="30"
              className="font-poppins text-[17px] text-secondary-text"
            >
              30kg pack
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPart;
