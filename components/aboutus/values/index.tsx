import React from "react";
import CustomImage from "@/components/customimage";
import dynamic from "next/dynamic";
import { useModal } from "@/components/modalcontext";
const Icon = dynamic(() => import("@/components/icons/icons"));
import { AnimatedElement } from "@/components/animation";

const Values = () => {
  const { handleOpenScheduleModal } = useModal();
  return (
    <div className="w-full sm:max-w-[85%] mx-auto sm:px-4 sm:py-20">
      <div className="grid sm:grid-cols-2 items-center sm:gap-10 gap-6 ">
        <div className="flex flex-col gap-6 sm:justify-center">
          <h4 className="font-[600] font-gilmer text-[1.875rem] sm:text-[2.25rem] text-shadow-primary">
            Our Mission
          </h4>
          <p className="font-gilmer text-[1.125rem] sm:text-[1.25rem] text-[#001928] leading-[28px] sm:leading-[1.875rem] font-[400] tracking-[-2%] text-start">
            At Hiraeth, our mission is to empower businesses to unlock
            investment opportunities and drive long-term success through
            tailored, impactful ESG strategies. We are committed to building
            robust ESG portfolios that not only meet the highest standards of
            sustainability and governance but also resonate
            with international investors who prioritize ethics, resilience, and
            innovation.
          </p>
          <button
            type="button"
            onClick={handleOpenScheduleModal}
            className="cursor-pointer bg-[#002211] w-fit font-gilmer  text-[1rem] font-[400] rounded-md px-4 py-3 text-white"
          >
            Schedule a Consultation
          </button>
        </div>
        <AnimatedElement>
          <div className="lg:ml-[7%]">
            <CustomImage width={549} height={444} alt="" src="/mission.png" />
          </div>
        </AnimatedElement>
      </div>
      <div className="grid sm:grid-cols-2 lg:gap-10 gap-6 mt-16 sm:mt-26">
        <AnimatedElement>
          <div className="hidden sm:flex">
            <CustomImage width={549} height={444} alt="" src="/vision.png" />
          </div>
        </AnimatedElement>
        <div className="flex flex-col gap-6 justify-center">
          <h4 className="font-[600] font-gilmer text-[1.875rem] sm:text-[2.25rem] text-shadow-primary">
            Our Vision
          </h4>
          <p className="font-gilmer text-[1.125rem] sm:text-[1.25rem] text-[#001928] leading-[28px] sm:leading-[1.875rem] font-[400] tracking-[-2%] text-start">
            At Hiraeth, our vision is to shape a future whereby every business
            thrives through sustainability, transparency, and purpose — by
            making ESG a cornerstone of growth, innovation, and investor
            confidence.
          </p>
          <button
            type="button"
            onClick={handleOpenScheduleModal}
            className="cursor-pointer bg-[#002211] w-fit font-gilmer  text-[1rem] font-[400] rounded-md px-4 py-3 text-white"
          >
            Schedule a Consultation
          </button>
        </div>
        <div className="sm:hidden">
          <CustomImage width={549} height={444} alt="" src="/vision.png" />
        </div>
      </div>
      <div className="mt-20">
        <h4 className="font-[600] font-gilmer text-[1.875rem] sm:text-[2.25rem] text-shadow-primary sm:text-center">
          Our Business Objectives
        </h4>
        <AnimatedElement>
          <div className="grid lg:grid-cols-3 gap-10 mt-14">
            <div className="flex flex-col gap-6">
              <Icon name="trophy" />
              <h6 className="text-[1.5rem] leading=[150%] text-primary font-[600] sm:text-[1.75rem] font-gilmer">
                Become the Leading ESG Consultancy for Growth-Oriented Firms
              </h6>
              <p className="text-[1rem] font-[400] font-aeonik leading-[1.5rem] text-primary">
                By delivering strategies that balance compliance with
                innovation, we aim to be the first choice for companies seeking
                to align profit with purpose.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Icon name="bolt" />
              <h6 className="text-[1.5rem] leading=[150%] text-primary font-[600] sm:text-[1.75rem] font-gilmer">
                Democratize ESG Excellence{" "}
              </h6>
              <p className="text-[1rem] font-[400] font-aeonik leading-[1.5rem] text-primary">
                From SMEs to multinationals, we empower businesses at all stages
                to build credible, investor-friendly ESG portfolios.
              </p>
            </div>{" "}
            <div className="flex flex-col gap-6">
              <Icon name="circle" />
              <h6 className="text-[1.5rem] leading=[150%] text-primary font-[600] sm:text-[1.75rem] font-gilmer">
                Drive Systemic Change{" "}
              </h6>
              <p className="text-[1rem] font-[400] font-aeonik leading-[1.5rem] text-primary">
                Through advocacy and education, we promote ESG adoption as a
                non-negotiable for sustainable growth across industries.
              </p>
            </div>{" "}
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Values;
