import React from "react";
import CustomImage from "@/components/customimage";
import { AnimatedElement } from "@/components/animation";

const Hero = () => {
  return (
    <div className="flex flex-col gap-5 min-h-screen items-center justify-center w-full">
      {/* <AnimatedElement> */}{" "}
      <div className="flex gap-5 items-center sm:justify-center w-full sm:max-w-[70%] mt-20 sm:mt-10">
        <AnimatedElement>
          <h1 className="font-clashlight font-[700] sm:text-[3rem] lg:text-[3.75rem] text-[2.25rem] text-primary leading-[2.75rem] sm:leading-[3.5rem] lg:leading-[4.5rem] tracking-[-2%] sm:text-center">
            Where Sustainability Meets Investor Confidence.
          </h1>
        </AnimatedElement>
      </div>
      {/* </AnimatedElement> */}{" "}
      <AnimatedElement delay={0.8}>
        <div className="flex sm:justify-center items-center">
          <p className="text-primary font-gilmer font-[400] w-full text-[1.125rem] sm:text-[1.25rem] leading-[1.75rem] sm:leading-[2rem] tracking-[-0.02em] sm:text-center sm:max-w-[75%]">
            We don’t just consult—we architect ESG frameworks that transform
            compliance into capital
          </p>
        </div>
      </AnimatedElement>
      <AnimatedElement delay={1.4}>
        <div className="px-6">
          <CustomImage
            src="/abouthero.png"
            width={874}
            height={487}
            alt="about us hero image"
          />
        </div>
      </AnimatedElement>
      <div className="flex flex-col gap-6 items-start w-full sm:w-[60%] h-full my-12">
        <AnimatedElement>
          <p className="font-gilmer text-[1.125rem] md:text-[1.5rem] xl:text-[2rem] text-[#001928] leading-[28px] sm:leading-[2.5rem] font-[400] tracking-[-2%] text-center">
            At Hiraeth Consultancy, we are architects of sustainable success.
            Specializing in Environmental, Social, and Governance (ESG)
            strategy, we empower businesses to transform ESG compliance into a
            competitive edge. By aligning companies with global sustainability
            standards and investor expectations, we craft bespoke ESG portfolios
            that drive funding opportunities, operational excellence, and
            long-term resilience.
          </p>
        </AnimatedElement>
        <AnimatedElement>
          <p className="font-gilmer text-[1.125rem] md:text-[1.5rem] xl:text-[2rem] text-[#8A959C] leading-[28px] sm:leading-[2.5rem] font-[400] tracking-[-2%] text-center">
            Our expertise lies in bridging the gap between ethical business
            practices and financial performance, ensuring that ESG principles
            are not just a checklist but a catalyst for growth. Whether you’re a
            startup seeking venture capital or an established firm navigating
            regulatory shifts, Hiraeth equips you to thrive in an era where
            sustainability equals profitability.
          </p>
        </AnimatedElement>
      </div>
      <div>
        <p className="font-gilmer text-[1.125rem] sm:text-[1.5rem] text-[#001928] leading-[28px] sm:leading-[2.5rem] font-[400] tracking-[-2%] sm:text-center">
          We believe that responsible business is smart business and we help
          businesses:
        </p>
      </div>
      <div className="flex flex-col sm:flex-row lg:gap-8 gap-4 items-start w-full sm:w-[70%] mt-4 mb-12">
        <div className="bg-[#0083E7] py-10 px-10 md:px-6 sm:px-8 rounded-xl w-full lg:w-4/12 sm:h-[176px]">
          <p className="font-gilmer text-[1.125rem] md:text-[1rem] xl:text-[1.5rem] text-white leading-[28px] md:leading-[24px] xl:leading-[2rem] font-[700] tracking-[-2%]">
            Attract forward-thinking investors.
          </p>
        </div>
        <div className="bg-[#93A187] md:px-6 py-10 px-10 sm:px-8 rounded-xl w-full lg:w-4/12 sm:h-[176px]">
          <p className="font-gilmer text-[1.125rem]  md:text-[1rem] xl:text-[1.5rem] text-white leading-[28px] md:leading-[24px] xl:leading-[2rem] font-[700] tracking-[-2%]">
            Mitigate risks in an evolving regulatory landscape.
          </p>
        </div>
        <div className="bg-[#151515] md:px-6 py-10 px-10 sm:px-8 rounded-xl w-full lg:w-4/12 sm:h-[176px]">
          <p className="font-gilmer text-[1.125rem] md:text-[1rem] xl:text-[1.5rem] text-white leading-[28px] md:leading-[24px] xl:leading-[2rem] font-[700] tracking-[-2%]">
            Build a legacy of sustainability and trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
