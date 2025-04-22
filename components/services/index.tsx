import React from "react";
import MainLayout from "../mainlayout";
import CustomImage from "../customimage";
import dynamic from "next/dynamic";
import { useModal } from "../modalcontext";
import { AnimatedElement } from "../animation";

const Icon = dynamic(() => import("../../components/icons/icons"), {
  ssr: false,
});

const ServicesComponent = () => {
  const { handleOpenScheduleModal } = useModal();

  return (
    <MainLayout
      meta={{
        title: "Hiraeth Consulting | Services",
        description:
          "At Hiraeth, our approach is designed to be thorough, collaborative, and tailored to your unique business needs. We guide companies through every step of the ESG integration process, ensuring you not only meet investor expectations but also position yourself as a leader in sustainability and responsible governance.",
        rel: "canonical",
        href: "/about-us",
      }}
    >
      <div className="flex flex-col gap-5 min-h-screen items-center justify-center w-full">
        <div className="px-8 sm:px-0 flex gap-5 items-center sm:justify-center w-full sm:max-w-[75%] mt-20 sm:mt-10">
          <AnimatedElement delay={0.5}>
            <h1 className="font-clashlight font-[700] sm:text-[3rem] lg:text-[3.75rem] text-[2.25rem] text-primary leading-[2.75rem] sm:leading-[3.5rem] lg:leading-[4.5rem] tracking-[-2%] sm:text-center">
              Pioneering ESG Excellence to Unlock Growth and Investor Confidence{" "}
            </h1>
          </AnimatedElement>
        </div>
        <AnimatedElement delay={1}>
          <div className="flex sm:justify-center items-center px-8 sm:px-0">
            <p className="text-primary font-gilmer font-[400] w-full text-[1.125rem] sm:text-[1.25rem] leading-[1.75rem] sm:leading-[2rem] tracking-[-0.02em] sm:text-center sm:max-w-[55%]">
              At Hiraeth, our approach is designed to be thorough,
              collaborative, and tailored to your unique business needs. We
              guide companies through every step of the ESG integration process,
              ensuring you not only meet investor expectations but also position
              yourself as a leader in sustainability and responsible governance.
            </p>
          </div>
        </AnimatedElement>
        <AnimatedElement delay={1.5}>
          <div className="px-6">
            <CustomImage
              src="/services.png"
              width={874}
              height={487}
              alt="about us hero image"
            />
          </div>
        </AnimatedElement>
        <AnimatedElement>
          <div className="w-full h-full sm:py-16 py-5 px-[8%]">
            <div className="flex justify-center items-center  py-6 ">
              <h6 className="text-primary font-gilmer font-[600] text-[2.25rem] tracking-[-2%]">
                How We Work
              </h6>
            </div>
            <div className="flex sm:flex-row flex-wrap lg:flex-nowrap flex-col gap-4 lg:gap-6 items-start w-full">
              <div className="bg-[#C6DFFE] p-7 rounded-2xl flex flex-col gap-4 sm:w-[48%] lg:w-4/12 w-full h-[25rem]">
                <div>
                  <Icon name="one" />
                </div>
                <span className="text-black font-[600] font-gilmer text-[1.5rem] sm:text-[1.5rem] xl:text-[1.75rem]">
                  Initial Consultation & Assessment{" "}
                </span>
                <p className="text-[#001928] font-[400] font-gilmer text-[1rem] xl:text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
                  Understand first, act second. We diagnose your ESG gaps and
                  goals to build strategies rooted in reality.
                </p>
              </div>
              <div className="bg-[#D5F6E5] p-7 rounded-2xl flex flex-col gap-4 w-full sm:w-[48%] lg:w-4/12 h-[25rem]">
                <Icon name="two" />
                <span className="text-black font-[600] font-gilmer text-[1.5rem] sm:text-[1.5rem] xl:text-[1.75rem]">
                  Customized ESG Strategy Development{" "}
                </span>
                <p className="text-[#001928] font-[400] font-gilmer text-[1rem] xl:text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
                  Your business is unique—your ESG plan should be too. No
                  templates. Only investor-aligned blueprints for your industry
                  and growth stage.
                </p>
              </div>
              <div className="bg-[#E2E5E8] p-7 rounded-2xl flex flex-col gap-4 w-full sm:w-[48%] lg:w-4/12 h-[25rem]">
                <Icon name="three" />
                <span className="text-black font-[600] font-gilmer text-[1.5rem] xl:text-[1.75rem]">
                  Implementation & Portfolio Creation{" "}
                </span>
                <p className="text-[#001928] font-[400] font-gilmer text-[1rem] xl:text-[1.25rem] leading-[2rem] tracking-[-0.02em]">
                  From plan to proof. We turn strategies into policies and
                  portfolios that investors trust.
                </p>
              </div>
            </div>
          </div>
        </AnimatedElement>
        <div className=" h-full sm:py-16 py-5 bg-[#D1E3FF]" id="packages">
          <div className="max-w-[84%] mx-auto">
            <div className="flex justify-center items-center pt-6 pb-10 ">
              <h6 className="text-primary font-gilmer font-[600] text-[2.25rem] tracking-[-2%]">
                Hiraeth Packages
              </h6>
            </div>
            <div className="sm:grid sm:grid-cols-7 gap-5">
              <div className="sm:col-span-3 bg-white rounded-xl w-full px-6 py-8">
                <h6 className="text-black font-[600] font-gilmer text-[1.5rem] sm:text-[1.75rem] pb-6">
                  Regular Packages
                </h6>
                <ol className="list-decimal list-outside">
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      1
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      An initial consultation and assessment to identify
                      material topics important to the business and evaluate its
                      current ESG standing.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      2
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      We also perform a risk analysis, identifying potential
                      challenges and opportunities related to environmental,
                      social, and governance factors. This ensures that your ESG
                      strategy aligns with both investor demands and your
                      company’s long-term goals. We also offer mitigation
                      strategies.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      3
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Creation of companywide policies to be adopted by all
                      stakeholders
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      4
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Creation of supplier code of conduct and supplier scoring
                      criteria if applicable.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      5
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Creation of checklists aligned with international
                      standards if applicable (minerals, commodity trading,
                      warehouse).
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      6
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Data gathering and KPIs related to ESG, which will be
                      requested by investors.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      7
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Creation of a short to medium term ESG strategy and road
                      map.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      8
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Training and Capacity building particularly for the
                      investor relations and human resources teams.
                    </span>
                  </li>
                  <li className="flex items-center gap-4 pb-4">
                    <span className="font-[600] text-[24px] font-gilmer">
                      9
                    </span>
                    <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                      Engaging with investors, shareholders and other
                      stakeholders on behalf of client organisations to
                      understand their responsible investment priorities and
                      expectations, and their approach to influence and
                      engagement.
                    </span>
                  </li>
                </ol>
              </div>
              <div className="col-span-4 flex flex-col gap-4 bg-white p-6 rounded-xl">
                <div className="sm:col-span-3 bg-white rounded-xl w-full  py-4">
                  <h6 className="text-black font-[600] font-gilmer text-[1.5rem] sm:text-[1.75rem] pb-6">
                    Extensive Packages
                  </h6>
                  <ol className="list-decimal list-outside">
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        1
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                         An initial consultation and assessment to identify
                        material topics important to the business and evaluate
                        its current ESG standing.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        2
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        We also perform a risk analysis, identifying potential
                        challenges and opportunities related to environmental,
                        social, and governance factors. This ensures that your
                        ESG strategy aligns with both investor demands and your
                        company’s long-term goals. We also offer mitigation
                        strategies.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        3
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Creation of companywide policies to be adopted by all
                        stakeholders
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        4
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Benchmarking with competitors and against industry
                        standards.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        5
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Creation of checklists aligned with international
                        standards if applicable (minerals, commodity trading,
                        warehouse).
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        6
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Benchmarking with competitors and against industry
                        standards.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        7
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Re-vamping/creation of a sustainability section on the
                        company’s website.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        8
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Data gathering and KPIs related to ESG, which will be
                        requested by investors.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        9
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Creation of a short to medium term ESG strategy and road
                        map.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        10
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Training and Capacity building particularly for the
                        investor relations and human resources teams.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        11
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Creation of an ESG highlights report/ sustainability
                        report outline.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        12
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Engaging with investors, shareholders and other
                        stakeholders on behalf of client organisations to
                        understand their responsible investment priorities and
                        expectations, and their approach to influence and
                        engagement.
                      </span>
                    </li>
                    <li className="flex items-center gap-4 pb-4">
                      <span className="font-[600] text-[24px] font-gilmer">
                        13
                      </span>
                      <span className="text-[1rem] font-gilmer font-[400] leading-[1.5rem]">
                        Development of a Corporate Social Responsibility plan in
                        collaboration with relevant NGOs and partners aligned
                        with the business.
                      </span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-10 gap-6 max-w-[84%] mx-auto pt-10 pb-15">
          <div className="">
            <AnimatedElement>
              <CustomImage width={549} height={444} alt="" src="/staff.png" />
            </AnimatedElement>
          </div>
          <div className="flex flex-col gap-6 sm:justify-center">
            <h4 className="font-[600] font-gilmer text-[1.875rem] sm:leading-[2.5rem] lg:leading-[2.75rem] lg:text-[2.25rem] text-shadow-primary w-11/12">
              Ready to Transform ESG Compliance into Investor Appeal?
            </h4>
            <p className="font-gilmer text-[1.125rem] sm:text-[1.25rem] text-[#001928] leading-[28px] sm:leading-[1.875rem] font-[400] tracking-[-2%] text-start">
              Let’s build your ESG portfolio in 90 days—attract funding,
              mitigate risks, and lead your industry. First consultation is
              free.
            </p>
            <button
              type="button"
              onClick={handleOpenScheduleModal}
              className="cursor-pointer bg-[#002211] w-fit font-gilmer  text-[1rem] font-[400] rounded-md px-4 py-3 text-white"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesComponent;
