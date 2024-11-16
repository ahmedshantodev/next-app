import React from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { FiChevronDown } from "react-icons/fi";
import { TbPhone } from "react-icons/tb";
import Link from "next/link";

const Navbar = () => {
  // const location = 
  let navigation = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "category",
      path: "category",
      // submenu: [
      //   { name: "mobile", path: "" },
      //   { name: "tv", path: "" },
      //   { name: "phone", path: "" },
      //   { name: "air condition", path: "" },
      // ],
    },
    // {
    //   name: "products",
    //   path: "products",
    //   submenu: [
    //     { name: "mobile", path: "" },
    //     { name: "tv", path: "" },
    //     { name: "phone", path: "" },
    //     { name: "air condition", path: "" },
    //   ],
    // },
    {
      name: "pages",
      path: "pages",
    },
    {
      name: "blog",
      path: "blog",
      // submenu: [
      //   { name: "mobile", path: "" },
      //   { name: "tv", path: "" },
      //   { name: "phone", path: "" },
      //   { name: "air condition", path: "" },
      // ],
    },
    // {
    //   name: "elements",
    //   path: "elements",
    //   submenu: [
    //     { name: "mobile", path: "" },
    //     { name: "tv", path: "" },
    //     { name: "phone", path: "" },
    //     { name: "air condition", path: "" },
    //   ],
    // },
  ];

  return (
    <nav className="shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="max-w-container mx-auto px-2.5 flex items-center justify-between">
        <HiMiniBars3CenterLeft className="text-[30px] cursor-pointer border px-1 py-1 rounded border-[#E9E9E9] hover:text-primary-color hover:border-primary-color transition-all duration-200" />

        <div className={"flex items-center gap-x-10"}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={
                "text-primary-text font-poppins text-sm font-medium px-1 relative group flex items-center gap-x-1 py-5 capitalize leading-normal after:content-[''] after:bg-primary-color after:w-0 after:h-[2px] after:absolute after:bottom-[18px] after:left-2/4 after:-translate-x-2/4 after:rounded after:hover:w-full after:transition-all after:duration-300 ease-in"
              }
              //   className={({ isActive }) =>
              //     isActive
              //       ? "text-primary-color text-sm px-1 font-medium relative  group flex items-center gap-x-1 py-5 capitalize leading-normal after:content-[''] after:bg-primary-color after:w-full after:h-[2px] after:absolute after:bottom-[18px] after:left-2/4 after:-translate-x-2/4 after:rounded after:hover:w-full after:transition-all after:duration-300 ease-in"
              //       : " text-primary-text text-sm font-medium px-1 relative group flex items-center gap-x-1 py-5 capitalize leading-normal after:content-[''] after:bg-primary-color after:w-0 after:h-[2px] after:absolute after:bottom-[18px] after:left-2/4 after:-translate-x-2/4 after:rounded after:hover:w-full after:transition-all after:duration-300 ease-in"
              //   }
            >
              {item.name}
              {item.submenu && (
                <FiChevronDown className="mt-[3px] transition-all duration-150 group-hover:rotate-180" />
              )}
              {item.submenu && (
                <div className="bg-white w-[135px] text-center absolute z-20 opacity-0 group-hover:opacity-100 invisible translate-y-0 group-hover:visible group-hover:translate-y-5 left-2/4 -translate-x-2/4 top-[30px] py-2.5 rounded-[5px] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition-all duration-150 ease-in">
                  {item.submenu.map((item, index) => (
                    <p
                      key={index}
                      className="py-[2px] leading-normal hover:text-primary-color transition-all duration-300"
                    >
                      {item.name}
                    </p>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        <a
          href="tel:+1234567890"
          className="flex items-center gap-[5px] font-poppins text-[15px]"
        >
          <TbPhone className="text-[20px] mb-1" /> +123 ( 456 ) ( 7890 )
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
