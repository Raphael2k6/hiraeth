import CustomImage from "../customimage";
import { useModal } from "../modalcontext";
import { AnimatedElement, AnimatedElementLeft } from "../animation";

const HeroSection = () => {
  const { handleOpenScheduleModal } = useModal();
  return (
    <section className="pt-4 h-full lg:h-[100%] 2xl:h-[80vh] bg-[#D0F0C0]">
      <div className="max-w-[85%] mx-auto">
        <div className="flex flex-col sm:flex-row pt-[4rem] pb-[4rem] sm:pb-[8rem] h-full w-full sm:px-4 gap-10 items-center">
          <div className="flex flex-col gap-6 items-start w-full sm:w-6/12 h-full">
            <AnimatedElementLeft delay={0.5}>
              {" "}
              <h1 className="text-[2.25rem] md:text-[2rem] xl:text-[3.75rem] 2xl:text-[5.5rem] text-primary font-[600] font-clashlight leading-[2.5rem] lg:leading-[2.75rem] xl:leading-[4rem] 2xl:leading-[7rem] tracking-[-2%] w-full">
                Embedding ESG Excellence into{" "}
                <br className="hidden sm:flex 2xl:hidden" />
                Your Strategy.
              </h1>
            </AnimatedElementLeft>
            <AnimatedElementLeft delay={1}>
              <p className="text-[1.125rem] lg:text-[1.25rem] 2xl:text-[2.5rem] text-primary font-gilmer font-[500] leading-[1.75rem] md:leading-[1.7rem] 2xl:leading-[3.2rem] tracking-[-0.02em] w-full 2xl:w-[90%]">
                We craft portfolios that align ENVIRONMENTAL impact, SOCIAL
                equity, and GOVERNANCE precision to secure funding from
                ESG-Driven Investors.
              </p>
            </AnimatedElementLeft>
            <AnimatedElementLeft delay={1.5}>
              <button
                type="button"
                onClick={handleOpenScheduleModal}
                className="bg-[#002211] whitespace-nowrap text-[1rem] font-[400] font-gilmer rounded-md px-4 py-3 text-white"
              >
                Schedule a Consultation
              </button>
            </AnimatedElementLeft>
          </div>
          <div className="w-full sm:w-6/12 h-full flex items-center justify-center">
            <AnimatedElement delay={2}>
              <CustomImage
                src="/heroimg.png"
                width={549}
                height={536}
                alt="Hero Image"
                className="rounded-xl h-full w-full object-cover"
              />
            </AnimatedElement>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
