import dynamic from "next/dynamic";
const ContactUsComponent = dynamic(() => import("@/components/contactus"));

const ContactUs = () => {
  return <ContactUsComponent />;
};

export default ContactUs;
