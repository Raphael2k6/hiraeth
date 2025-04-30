import CustomImage from "@/components/customimage";
import { AnimatedElement } from "@/components/animation";

const Founder = () => {
  return (
    <div className="w-full sm:p-0 p-6 sm:max-w-10/12 mx-auto">
      <h4 className="font-[600] mb-8 font-gilmer text-[2.25rem] text-shadow-primary text-start">
        Meet Our Founder
      </h4>
      <AnimatedElement>
        <div className="lg:grid sm:grid-cols-3 gap-5 h-full">
          <div className="sm:col-span-1 w-full">
            <CustomImage
              src="/theceo1.png"
              width={464}
              height={399}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="col-span-2 flex flex-col gap-4 bg-white p-6 rounded-lg">
            <h6 className="text-[1.125rem] leading=[150%] text-primary font-[600] sm:text-[1.75rem] font-gilmer">
              Damilola Toriola
            </h6>
            <p className="font-gilmer text-[1.125rem] sm:text-[1.25rem] text-[#001928] leading-[28px] sm:leading-[1.875rem] font-[400] tracking-[-2%] text-start">
              Damilola Toriola is a sustainability and ESG expert with
              cross-sector experience in fintech, asset management, and mining.
              An Imperial College alumna, she has led the development of ESG
              strategies, conducted environmental impact assessments, and
              delivered high-level reporting aligned with international
              frameworks such as SFDR, TCFD, PRI, and the UN SDGs. As the
              founder of Hiraeth, she helps companies build credible ESG
              profiles that attract investors, ensure regulatory compliance, and
              drive long-term responsible growth.
            </p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Founder;
