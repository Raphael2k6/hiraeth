import MainLayout from "../mainlayout";
import CustomImage from "../customimage";
import dynamic from "next/dynamic";
const Icon = dynamic(() => import("../icons/icons"));

const ContactUsComponent = () => {
  return (
    <MainLayout
      meta={{
        title: "Contact Us",
        description:
          "Whether you’re prepping for an IPO or need to calm restless shareholders, we respond within 4 hours. ",
        rel: "canonical",
        href: "/contact-us",
      }}
    >
      <div className=" flex flex-col gap-5 min-h-screen items-center justify-center w-full">
        <div className="px-6 sm:px-0 flex gap-5 items-center sm:justify-center w-full sm:max-w-[70%] mt-26 sm:mt-14">
          <h1 className="font-clashlight font-[700] sm:text-[3.75rem] text-[2.25rem] text-primary leading-[2.75rem] sm:leading-[4.5rem] tracking-[-2%] sm:text-center">
            Your First ESG Win Starts Here{" "}
          </h1>
        </div>
        <div className="px-6 sm:px-0 flex sm:justify-center items-center">
          <p className="text-primary font-gilmer font-[400] w-full text-[1.125rem] sm:text-[1.25rem] leading-[1.75rem] sm:leading-[2rem] tracking-[-0.02em] sm:text-center sm:max-w-[75%]">
            Whether you’re prepping for an IPO or need to calm restless
            shareholders, we respond within 4 hours. 
          </p>
        </div>
        <div className="sm:grid lg:grid-cols-2 gap-10 xl:gap-20 max-w-[10/12] px-6 mx-auto my-10">
          <div className="px-6 flex flex-col gap-8 bg-[#F5FFFA] sm:px-20 py-10">
            <div className="border-b border-b-[#8ADB92] border-dashed pb-4 flex flex-col gap-3">
              <Icon name="address" />
              <span className="font-gilmer font-[700] text-primary text-[1.25rem]">
                Our business address
              </span>
              <p className="font-gilmer font-[400] text-primary text-[1.25rem]">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div className="border-b border-b-[#8ADB92] border-dashed pb-4 flex flex-col gap-3">
              <Icon name="mail" />
              <span className="font-gilmer font-[700] text-primary text-[1.25rem]">
                Send email for support
              </span>
              <p className="font-gilmer font-[400] text-[#00CC66] text-[1.25rem]">
                help@hiraeth.com
              </p>
            </div>
            <div className=" flex flex-col gap-3">
              <Icon name="phone" />
              <span className="font-gilmer font-[700] text-primary text-[1.25rem]">
                Contact Info
              </span>
              <p className="font-gilmer font-[400] text-primary text-[1.25rem]">
                +234090774556576
              </p>
            </div>
          </div>
          <div className="px-6 sm:px-0">
            <CustomImage
              src="/contact.png"
              width={518}
              height={567}
              alt="about us hero image"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUsComponent;
