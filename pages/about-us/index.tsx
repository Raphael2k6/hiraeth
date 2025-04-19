import React from "react";
import dynamic from "next/dynamic";

const AboutUsComponent = dynamic(() => import("@/components/aboutus"), {
  ssr: false,
});

const AboutUs = () => {
  return <AboutUsComponent />;
};

export default AboutUs;
