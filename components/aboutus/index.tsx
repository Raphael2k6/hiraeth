import MainLayout from "@/components/mainlayout";
import Hero from "@/components/aboutus/hero";
import Values from "@/components/aboutus/values";
import Founder from "./founder";

const AboutUsComponent = () => {
  return (
    <MainLayout
      meta={{
        title: "About Us",
        description: "Learn more about our mission and values",
        rel: "canonical",
        href: "/about-us",
      }}
    >
      <div className="flex flex-col min-h-screen">
        <div className="sm:p-0 p-6">
          {" "}
          <Hero />
          <Values />
        </div>

        <div className="bg-[#F5FFFA] py-16">
          {" "}
          <Founder />
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUsComponent;
