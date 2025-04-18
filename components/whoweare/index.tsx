import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import CustomImage from "../customimage";
import dynamic from "next/dynamic";

const Icon = dynamic(() => import("../icons/icons.tsx"), {
  ssr: false,
});

const WhoWeAre = () => {
  return (
    <>
      <section className="">
        <div className="flex items-center justify-between text-center bg-[#F3F6F9] py-10 px-[8%] mx-auto">
          <div>
            <span className="bold-text">50+</span>
            <p className="light-text font-aeonikpro">Companies & Partners</p>
          </div>
          <div>
            <span className="bold-text"> ₦25B+</span>
            <p className="light-text font-aeonikpro">Secured Funding</p>
          </div>
          <div>
            <span className="bold-text">40%</span>
            <p className="light-text font-aeonikpro">Improved ESG Ratings</p>
          </div>
          <div>
            <span className="bold-text">65%</span>
            <p className="light-text font-aeonikpro">
              Regulatory Risks Reduced{" "}
            </p>
          </div>
          <div>
            <span className="bold-text">10+</span>
            <p className="light-text font-aeonikpro">Years in Industry</p>
          </div>
        </div>
      </section>
      <section className="flex justify-between items-start px-[8%] py-15 mx-auto">
        <div className="w-5/12 h-full flex items-start font-gilmer font-[600] text-black">
          <h2 className="text-[2.25rem]">Who We Are</h2>
        </div>
        <div className="w-7/12 h-full flex flex-col items-start gap-6">
          <p className="font-aeonikpro text-[2rem] text-[#001928] leading-[2rem] font-[400] tracking-[-2%]">
            Hiraeth Consultancy is a boutique ESG advisory firm dedicated to
            bridging the gap between corporate responsibility and investor
            expectations.
          </p>
          <p className="font-aeonikpro text-[2rem] text-[#8A959C] leading-[2rem] font-[400] tracking-[-2%]">
            Founded by a team of ex-investors, sustainability auditors, and
            corporate strategists, we help businesses across industries build
            ESG portfolios that attract funding, mitigate risks, and
            future-proof growth.
          </p>
          <Link
            href="/about-us"
            className="flex text-[#00B012] items-center gap-2 font-aeonik text-[1.125rem] font-[400]"
          >
            <span>Learn more about us</span>
            <MdArrowOutward />
          </Link>
        </div>
      </section>
      <section className=" px-[8%] py-15 mx-auto">
        <div className="flex gap-8 w-full justify-baseline">
          <div className="w-[40%] h-full flex items-start font-gilmer font-[600] text-black">
            <CustomImage src="/people.png" alt="" width={444} height={352} />
          </div>
          <div className="w-[60%] h-full flex gap-6">
            <div className="flex flex-col gap-3 pt-3">
              <Icon name="target" />
              <h6 className="text-[1.75rem] leading-[34px] font-aeonik font-[500] text-[#001928] tracking-[0%]">
                Investor-Centric <br />
                Expertise
              </h6>
              <p className="text-[1rem] font-aeonik font-[400] text-[#001928] tracking-[0%]">
                Our team includes former fund managers and ESG analysts who know
                firsthand what investors scrutinize—from carbon metrics to board
                diversity ratios. We translate your sustainability efforts into
                the language of ROI.
              </p>
            </div>
            <div className="flex flex-col gap-3 pt-3">
              <Icon name="settings" />
              <h6 className="text-[1.75rem] font-aeonik font-[500] text-[#001928] tracking-[0%] leading-[34px]">
                Tailored, Actionable Frameworks{" "}
              </h6>
              <p className="text-[1rem] font-aeonik font-[400] text-[#001928] tracking-[0%]">
                Cookie-cutter ESG strategies fail. We design bespoke roadmaps
                aligned with global standards (GRI, SASB, TCFD) while
                prioritizing the metrics that matter most to your stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
