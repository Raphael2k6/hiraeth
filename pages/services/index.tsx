import React from "react";
import dynamic from "next/dynamic";

const ServicesComponent = dynamic(() => import("@/components/services"), {
  ssr: false,
});

const Services = () => {
  return <ServicesComponent />;
};

export default Services;
