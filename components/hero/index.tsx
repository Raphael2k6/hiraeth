// import { useEffect, useState } from "react";
// import MobileNav from "../navmobile";
import CustomImage from "../customimage";
// import NavBar from "../navbar";
import Link from "next/link";

const HeroSection = () => {
  // const [isFixed, setIsFixed] = useState(false);
  // const [isModalOpen, setShowModal] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       // Adjust the scroll threshold as needed
  //       setIsFixed(true);
  //     } else {
  //       setIsFixed(false);
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleHamburgerClick = () => {
  //   setShowModal(!isModalOpen);
  // };
  return (
    <section className="pt-4 h-full sm:h-screen bg-[#D5F6E5]">
      {/* {isModalOpen && (
        <MobileNav
          closeModal={handleHamburgerClick}
          // isModalOpen={isModalOpen}
        />
      )}

      {!isModalOpen && (
        <NavBar
          isFixed={isFixed}
          isModalOpen={isModalOpen}
          handleHamburgerClick={handleHamburgerClick}
        />
      )} */}
      <div className="max-w-[85%] mx-auto">
        <div className="flex flex-col sm:flex-row py-[4rem] h-full w-full sm:px-4 gap-10 items-center">
          <div className="flex flex-col gap-6 items-start w-full sm:w-6/12 h-full">
            <h1 className="text-[2.25rem] xl:text-[3.75rem] text-primary font-[600] font-clashlight leading-[2.75rem] xl:leading-[4rem] tracking-[-2%]">
              Embedding ESG Excellence into <br />
              Your Strategy.
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] text-primary font-gilmer font-[500] leading-[1.75rem] sm:leading-[2rem] tracking-[-0.02em]">
              We craft portfolios that align ENVIRONMENTAL impact, SOCIAL
              equity, and GOVERNANCE precision to secure funding from ESG-Driven
              Investors.
            </p>
            <Link
              href="/schedule-consultation"
              className="bg-[#002211] text-[1rem] font-[400] font-gilmer rounded-md px-4 py-3 text-white"
            >
              Schedule a Consultation
            </Link>
          </div>
          <div className="w-full sm:w-6/12 h-full flex items-center justify-center">
            <CustomImage
              src="/hero.png"
              width={549}
              height={536}
              alt="Hero Image"
              className="rounded-xl h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
