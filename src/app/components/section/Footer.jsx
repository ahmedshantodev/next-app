import React from "react";
import { GrLocation } from "react-icons/gr";
import { RiMailSendLine, RiFacebookLine } from "react-icons/ri";
import { TbPhone } from "react-icons/tb";
import { IoIosPaperPlane } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  let company = [
    {
      id: "01",
      name: "about us",
      path: "/about-us",
    },
    {
      id: "02",
      name: "Delivery Information",
      path: "/delivery-information",
    },
    {
      id: "03",
      name: "Privacy Policy",
      path: "/privacy-policy",
    },
    {
      id: "04",
      name: "Terms & Conditions",
      path: "/terms&conditions",
    },
    {
      id: "05",
      name: "contact Us",
      path: "/contact-us",
    },
    {
      id: "06",
      name: "Support Center",
      path: "/support-center",
    },
  ];

  let category = [
    {
      id: "01",
      name: "Dairy & Bakery",
      path: "/dairy&bakery",
    },
    {
      id: "02",
      name: "Fruits & Vegetable",
      path: "/fruits&vegetable",
    },
    {
      id: "03",
      name: "Snack & Spice",
      path: "/snack&spice",
    },
    {
      id: "04",
      name: "Juice & Drinks",
      path: "/juice&drinks",
    },
    {
      id: "05",
      name: "Chicken & Meat",
      path: "/chicken&meat",
    },
    {
      id: "06",
      name: "Fast Food",
      path: "/fast-food",
    },
  ];

  return (
    <section className="bg-[#f7f7f8] pt-[100px] border-t border-border-color relative">
      <img
        src={"/images/side-image-9.png"}
        alt={"random-image"}
        className={"absolute top-0 -translate-y-2/4 right-[5%] animate-pulse"}
      />

      <img
        src={"/images/side-image-10.png"}
        alt={"random-image"}
        className={"absolute top-2/4 -translate-y-2/4 left-[5%] animate-pulse"}
      />

      <img
        src={"/images/side-image-11.png"}
        alt={"random-image"}
        className={"absolute bottom-[3%] right-[8%] animate-pulse"}
      />

      <div className="max-w-container mx-auto px-2.5">
        <div className="flex">
          <div className="w-2/3 flex">
            <div className="w-2/4 pr-[33px]">
              <img
                src={"/images/logo.png"}
                alt={"company-logo"}
                className={""}
              />

              <p className={"text-secondary-text font-poppins text-sm mb-7"}>
                FoodTrove is the biggest market of grocery products. Get your
                daily needs from our store.
              </p>

              <ul>
                <li
                  className={
                    "text-secondary-text font-poppins text-sm mb-6 flex gap-x-[14px] leading-none text-[20px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <GrLocation className="text-[30px] text-primary-color" />
                  <a
                    href="https://maps.app.goo.gl/5Di8fVyeKPRNUdQdA"
                    target="_blank"
                    className={"leading-normal"}
                  >
                    51 Green St.Huntington ohaio beach ontario, NY 11746 KY
                    4783, USA.
                  </a>
                </li>

                <li
                  className={
                    "text-secondary-text font-poppins !text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <RiMailSendLine className="text-[22px] text-primary-color" />

                  <a href="mailto:example@email.com">example@email.com</a>
                </li>

                <li
                  className={
                    "text-secondary-text font-poppins !text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                  }
                >
                  <TbPhone className="text-[22px] text-primary-color" />
                  <a href="tel:+911234567890">+91 123 4567890</a>
                </li>
              </ul>
            </div>

            <div className="w-1/4 mt-6">
              <h4 className="font-arial text-lg font-bold">Company</h4>

              <ul className={"mt-5 pr-2.5"}>
                {company.map((item, index) => (
                  <li
                    key={index}
                    className={
                      "text-secondary-text capitalize font-poppins !text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                    }
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-1/4 mt-6">
              <h4 className="font-arial text-lg font-bold">Category</h4>

              <ul className={"mt-5 pr-2.5"}>
                {category.map((item , index) => (
                  <li
                    key={index}
                    className={
                      "text-secondary-text capitalize font-poppins !text-sm mb-6 flex items-center gap-x-[14px] leading-none text-[24px] hover:text-primary-color duration-300 ease-in-out"
                    }
                  >
                    <Link href={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-1/3 mt-6 pb-[100px]">
            <label
              htmlFor={"newsletter"}
              className={"font-arial font-bold text-lg cursor-pointer"}
            >
              SubsCribe Our NewsLetter
            </label>

            <div className="mt-4 relative overflow-hidden rounded-[5px]">
              <input
                id={"newsletter"}
                placeholder={"Enter Your Mail"}
                className={
                  "bg-white rounded-[5px] border border-[#e9e9e9] w-full font-poppins text-sm text-secondary-text placeholder:text-secondary-text py-[13px] pl-4 pr-12 outline-1 outline-primary-color"
                }
              />

              <button
                className={
                  "group absolute top-2/4 -translate-y-2/4  right-0 pl-3 pr-4 py-[13px]"
                }
              >
                <IoIosPaperPlane className="text-[20px] group-hover:text-primary-color" />
              </button>
            </div>

            <div className="mt-6">
              <a
                className={
                  "group bg-white rounded-[5px] border border-[#e9e9e9 py-2.5 px-2.5 inline-block mr-2.5"
                }
                href="https://www.facebook.com/ahmedshantodev"
                target="_blank"
              >
                <RiFacebookLine className="text-lg group-hover:text-secondary-color group-hover:scale-[1.1] duration-300" />
              </a>

              <a
                className={
                  "group bg-white rounded-[5px] border border-[#e9e9e9 py-2.5 px-2.5 inline-block  mr-2.5"
                }
                href="https://twitter.com/ahmedshantodev"
                target="_blank"
              >
                <FaXTwitter className="text-lg group-hover:text-secondary-color group-hover:scale-[1.1] duration-300" />
              </a>

              <a
                className={
                  "group bg-white rounded-[5px] border border-[#e9e9e9 py-2.5 px-2.5 inline-block  mr-2.5"
                }
                href="https://www.facebook.com/ahmedshantodev"
                target="_blank"
              >
                <FaDribbble className="text-lg group-hover:text-secondary-color group-hover:scale-[1.1] duration-300" />
              </a>

              <a
                className={
                  "group bg-white rounded-[5px] border border-[#e9e9e9 py-2.5 px-2.5 inline-block  mr-2.5"
                }
                href="https://www.instagram.com/ahmedshantodev"
                target="_blank"
              >
                <FaInstagram className="text-lg group-hover:text-secondary-color group-hover:scale-[1.1] duration-300" />
              </a>
            </div>

            <div className="flex mt-6 justify-between gap-x-3">
              <Link href={""} className="w-1/5" to={"/"}>
                <img
                  src={"/images/footer-image-one.png"}
                  alt={"random-image"}
                  className={"rounded-[5px]"}
                />
              </Link>

              <Link href={""} className="w-1/5" to={"/"}>
                <img
                  src={"/images/footer-image-two.png"}
                  alt={"random-image"}
                  className={"rounded-[5px]"}
                />
              </Link>

              <Link href={""} className="w-1/5" to={"/"}>
                <img
                  src={"/images/footer-image-three.png"}
                  alt={"random-image"}
                  className={"rounded-[5px]"}
                />
              </Link>

              <Link href={""} className="w-1/5" to={"/"}>
                <img
                  src={"/images/footer-image-four.png"}
                  alt={"random-image"}
                  className={"rounded-[5px]"}
                />
              </Link>

              <Link href={""} className="w-1/5" to={"/"}>
                <img
                  src={"/images/footer-image-five.png"}
                  alt={"random-image"}
                  className={"rounded-[5px]"}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-5 border-t-[1px] border-border-color text-center">
          <a
            href="https://www.figma.com/@shawon3"
            target="_blank"
            className="font-manrope"
          >
            Designer -{" "}
            <span className="text-primary-color font-bold">Shawon Farabi</span>
          </a>

          <a
            href="https://github.com/ahmedshantodev"
            target="_blank"
            className="font-manrope"
          >
            Developer -{" "}
            <span className="text-primary-color font-bold">
              Monsur Ahmed Shanto
            </span>
          </a>

          <a href="" className="font-manrope">
            © 2024{" "}
            <span className="text-primary-color font-bold">FoodTrove</span>, All
            rights reserved
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
