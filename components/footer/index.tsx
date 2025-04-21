import React from "react";
import CustomImage from "../customimage";
import { FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { useModal } from "../modalcontext";
import Link from "next/link";

const Footer = () => {
  const { handleOpenScheduleModal } = useModal();

  return (
    <div className="bg-[#004422] py-12 px-[8%]">
      <div className="flex sm:flex-row flex-col gap-5 justify-between items-center">
        <div className="flex flex-col gap-4 w-full sm:w-4/12">
          <CustomImage
            width={135}
            height={28}
            className="object-cover"
            src={"/logodark.png"}
            alt=""
          />
          <p className="text-white font-[400] font-gilmer text-[1.125rem] xl:text-[1.25rem] leading-[2rem] tracking-[0%]">
            Build ESG portfolios that attract investors, drive sustainable
            growth, and future-proof your business.
          </p>
        </div>
        <div />
        <div className="flex flex-col gap-3 sm:w-4/12 w-full">
          <p className="font-[600] text-white text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
            Subscribe to our Newsletter
          </p>
          <div className="flex gap-2 justify-between items-center bg-white py-1 rounded-lg px-1">
            <input
              placeholder="Enter Your Email "
              className="bg-white w-[60%] h-10 indent-3 outline-0 ring-0"
            />
            <button className="bg-[#004422] whitespace-nowrap px-4 py-2 text-white rounded-lg cursor-pointer">
              subscribe Now
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
        <div>
          <span className="text-[1rem] font-[700] font-gilmer text-white">
            Quick Links
          </span>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              <Link href="/about-us">About Us</Link>
            </li>
            <li className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              <Link href="/contact-us">Contact Us</Link>
            </li>
            <li className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              <Link href="/services">Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-[1rem] font-[700] font-gilmer text-white">
            Services
          </span>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-white font-[600] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              <button
                type="button"
                onClick={handleOpenScheduleModal}
                className="cursor-pointer"
              >
                Schedule a Consultation
              </button>{" "}
            </li>
            <li className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              <Link href="/services#packages">Packages</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-[1rem] font-[700] font-gilmer text-white">
            Contact Us
          </span>
          <ul className="flex flex-col gap-2 mt-4">
            <li className="text-white font-[600] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              Email
            </li>
            <li className="text-white font-[600] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              Address
            </li>
            <li className="text-white font-[600] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
              Phone Number
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex gap-6">
            <li>
              <FaTwitter className="text-white text-[26.5px]" />
            </li>
            <li>
              <FaFacebook className="text-white text-[26.5px]" />
            </li>
            <li>
              <FaLinkedin className="text-white text-[26.5px]" />
            </li>
            <li>
              <FaYoutube className="text-white text-[26.5px]" />
            </li>
          </ul>
        </div>
      </div>
      <div className="sm:hidden mt-7">
        <ul className="flex gap-6">
          <li>
            <FaTwitter className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaFacebook className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaLinkedin className="text-white text-[26.5px]" />
          </li>
          <li>
            <FaYoutube className="text-white text-[26.5px]" />
          </li>
        </ul>
      </div>
      <div className="flex sm:flex-row flex-col justify-between sm:items-center mt-12">
        <p className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em] sm:pb-0 pb-7">
          &#169; {new Date().getFullYear()} Hiraeth, All right reserved
        </p>
        <p className="text-white font-[400] text-[0.875rem] leading-[1.25rem] tracking-[-0.02em]">
          Terms & Conditions | Privacy Policy | Cookies Policy{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
