import React from "react";
import MainLayout from "@/components/mainlayout";
import dynamic from "next/dynamic";

const AboutUsComponent = dynamic(() => import("@/components/aboutus"), {
  ssr: false,
});

const AboutUs = () => {
  return <AboutUsComponent />;
};

export default AboutUs;
