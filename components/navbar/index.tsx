import { useState, useEffect } from "react";
import CustomImage from "../customimage";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const NavBar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isModalOpen, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setShowModal(!isModalOpen);
  };

  return (
    <>
      <nav className={`p-4 `}>
        <div
          className={`sm:flex hidden justify-between items-center  mx-auto ${
            isFixed
              ? "fixed top-0 left-0 px-[8%] z-50 transition duration-[300ms] py-4 bg-white w-full ease-in shadow-xl"
              : "max-w-10/12"
          }`}
        >
          <Link href="/" className="">
            <CustomImage src="/logo.png" alt="logo" width={136} height={28} />
          </Link>
          <div className="space-x-10 font-gilmer">
            <Link
              href="/about-us"
              className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
            >
              Services
            </Link>
            <Link
              href="/contact-us"
              className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
            >
              Contact Us
            </Link>
          </div>
          <Link
            href="/schedule-consultation"
            className="bg-[#002211] text-[1rem] font-[400] rounded-md px-4 py-2 text-white"
          >
            Schedule a Consultation
          </Link>
        </div>
      </nav>
      <nav
        className={`${
          isFixed &&
          "fixed top-0 z-50 transition duration-[300ms] ease-in shadow-xl left-0 bg-white"
        } fixed max-md:fixed top-0 left-0 right-0 z-50 flex h-[5rem] w-[100%] items-center justify-between rounded-2xl px-6 sm:hidden xl:h-[10vh]`}
      >
        <Link href="/" className="cursor-pointer w-[170px] pl-1">
          <div className="w-[130px]">
            {" "}
            <CustomImage src="/logo.png" alt="logo" width={136} height={28} />
          </div>
        </Link>
        {isModalOpen === false ? (
          <GiHamburgerMenu
            style={{ width: "30px", height: "30px" }}
            onClick={handleHamburgerClick}
          />
        ) : (
          <GrClose
            style={{ width: "30px", height: "30px" }}
            onClick={handleHamburgerClick}
          />
        )}
      </nav>
    </>
  );
};
export default NavBar;
