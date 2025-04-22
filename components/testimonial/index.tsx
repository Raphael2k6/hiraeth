import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomImage from "../customimage";
import dynamic from "next/dynamic";
import { AnimatedElement } from "../animation";

const Icon = dynamic(() => import("../icons/icons"), {
  ssr: false,
});

const Testimonial = () => {
  return (
    <div className="bg-white py-12 px-[8%]">
      <div className="pb-8 pt-4">
        <h6 className="text-black font-gilmer font-[600] text-[1.875rem] sm:text-[2.25rem] tracking-[-2%]">
          Client Testimonials & Success Stories
        </h6>
      </div>
      <div className="w-full">
        <AnimatedElement delay={0.5}>
          <div className="flex sm:flex-row flex-col justify-baseline gap-8 w-full">
            <div className="w-full sm:w-4/12 xl:w-5/12 h-full">
              <CustomImage
                width={464}
                height={3399}
                className="object-cover w-full h-full"
                src={"/testifyer.png"}
                alt=""
              />{" "}
            </div>
            <div className="w-full sm:w-6/12 xl:w-5/12 flex justify-baseline items-baseline-last">
              <div className=" flex flex-col justify-baseline gap-4">
                <div>
                  <Icon name="quote" />
                </div>
                <span className="text-black font-[600] font-gilmer text-[1.5rem] smtext-[1.75rem]">
                  Tech Startup Client{" "}
                </span>
                <p className="text-[#001928] font-[400] font-gilmer text-[1.125rem] lg:text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
                  As a Series B startup, we needed to attract ESG-focused VCs.
                  Hiraeth built a governance framework that highlighted our
                  diversity metrics and carbon-neutral cloud infrastructure.
                  Result? We closed a $5M round led by a top impact fund.
                </p>
                <div className="flex gap-2 items-center">
                  <span className="font-[600]">Anita Odunsi</span>
                  <p>CEO, NexGen AI Solutions</p>
                </div>
              </div>
            </div>
            <div className="hidden sm:flex w-2/12  justify-baseline items-baseline-last">
              <CustomImage
                width={143}
                height={213}
                className="object-cover"
                src={"/ceo.png"}
                alt=""
              />{" "}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Testimonial;
