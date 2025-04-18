import { IoMdArrowRoundForward } from "react-icons/io";
import dynamic from "next/dynamic";
import Link from "next/link";

const Icon = dynamic(() => import("../icons/icons"), {
  ssr: false,
});

const CoreValues = () => {
  return (
    <div className="w-full h-full bg-[#002211] py-16 px-[8%]">
      <div className="flex justify-center items-center  py-6 ">
        <h6 className="text-white font-gilmer font-[600] text-[2.25rem] tracking-[-2%]">
          Our Core Values
        </h6>
      </div>
      <div className="flex gap-6 items-start w-full">
        <div className="bg-[#C6DFFE] p-7 rounded-2xl flex flex-col gap-6 w-4/12 h-[25rem]">
          <div>
            <Icon name="transparency" />
          </div>
          <span className="text-black font-[600] font-gilmer text-[1.75rem]">
            Transparency
          </span>
          <p className="text-[#001928] font-[400] font-gilmer text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
            We reject greenwashing. Every metric we track is auditable,
            actionable, and tied to your bottom line.
          </p>
          <Link
            href="/about-us"
            className="flex text-black w-fit rounded-lg bg-white px-2 py-2 items-center gap-2 "
          >
            <span className="font-aeonik text-[0.681rem] font-[400]">
              Talk to us
            </span>
            <IoMdArrowRoundForward className="text-[text-[1.5rem]]" />
          </Link>
        </div>
        <div className="bg-[#D5F6E5] p-7 rounded-2xl flex flex-col gap-6 w-4/12 h-[25rem]">
          <Icon name="collaboration" />
          <span className="text-black font-[600] font-gilmer text-[1.75rem]">
            Collaboration
          </span>
          <p className="text-[#001928] font-[400] font-gilmer text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
            Your success is ours. We work shoulder-to-shoulder with your
            team—from C-suite to operations—to embed ESG into your DNA.
          </p>
          <Link
            href="/about-us"
            className="flex text-black w-fit rounded-lg bg-white px-2 py-2 items-center gap-2 "
          >
            <span className="font-aeonik text-[0.681rem] font-[400]">
              Talk to us
            </span>
            <IoMdArrowRoundForward className="text-[text-[1.5rem]]" />
          </Link>
        </div>
        <div className="bg-[#E2E5E8] p-7 rounded-2xl flex flex-col gap-6 w-4/12 h-[25rem]">
          <Icon name="impact" />
          <span className="text-black font-[600] font-gilmer text-[1.75rem]">
            Impact
          </span>
          <p className="text-[#001928] font-[400] font-gilmer text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
            Your success is ours. We work shoulder-to-shoulder with your
            team—from C-suite to operations—to embed ESG into your DNA.
          </p>
          <Link
            href="/about-us"
            className="flex text-black w-fit rounded-lg bg-white px-2 py-2 items-center gap-2 "
          >
            <span className="font-aeonik text-[0.681rem] font-[400]">
              Talk to us
            </span>
            <IoMdArrowRoundForward className="text-[text-[1.5rem]]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
