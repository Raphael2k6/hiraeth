import CustomImage from "@/components/customimage";
import { AnimatedElement } from "@/components/animation";

const Founder = () => {
  return (
    <div className="w-full sm:p-0 p-6 sm:max-w-10/12 mx-auto">
      <h4 className="font-[600] mb-8 font-gilmer text-[2.25rem] text-shadow-primary text-start">
        Meet Our Founder
      </h4>
      <AnimatedElement>
        <div className="lg:grid sm:grid-cols-3 gap-5">
          <div className="sm:col-span-1 w-full">
            <CustomImage src="/theceo.png" width={464} height={399} alt="" />
          </div>

          <div className="col-span-2 flex flex-col gap-4 bg-white p-6 rounded-lg">
            <h6 className="text-[1.125rem] leading=[150%] text-primary font-[600] sm:text-[1.75rem] font-gilmer">
              Abigail Idowu
            </h6>
            <p className="font-gilmer text-[1.125rem] sm:text-[1.25rem] text-[#001928] leading-[28px] sm:leading-[1.875rem] font-[400] tracking-[-2%] text-start">
              Lorem ipsum dolor sit amet consectetur. Ut auctor pharetra massa
              neque consectetur diam pellentesque consectetur. Eget placerat a
              suspendisse magna felis vel sit. Donec ornare in elementum cursus
              lacus velit tempus dapibus penatibus. Gravida tellus aliquam at
              augue feugiat convallis amet sit quisque. Sit potenti dignissim
              elementum ac dui sagittis adipiscing. Integer elementum gravida
              amet commodo. Mi vulputate orci donec eget id porttitor donec sit.
              Enim semper semper tellus sed vulputate.
            </p>
          </div>
        </div>
      </AnimatedElement>
    </div>
  );
};

export default Founder;
