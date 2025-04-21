import MainLayout from "@/components/mainlayout";
import HeroSection from "@/components/hero";
import WhoWeAre from "@/components/whoweare";
import IndustriesServed from "@/components/industriesserved";
import CoreValues from "@/components/corevalues";
import Testimonial from "@/components/testimonial";
const meta = {
  title: "Hiraeth Consulting",
  description:
    "Hiraeth empowers businesses to unlock investment opportunities and drive long-term success through tailored, impactful ESG strategies.",
  rel: "canonical",
  href: "/",
  name: "google-site-verification",
};

export default function Home() {
  return (
    <MainLayout meta={meta}>
      <HeroSection />
      <div className="">
        <WhoWeAre />
      </div>
      <div className="">
        <IndustriesServed />
      </div>
      <CoreValues />
      <Testimonial />
    </MainLayout>
  );
}

// const meta = {
//   title: "MySMEville",
//   description: "MySMEville - A platform for small and medium enterprises",
//   rel: "stylesheet",
