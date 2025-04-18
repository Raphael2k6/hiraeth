import CustomImage from "../customimage";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className={`p-4`}>
      <div className="flex justify-between items-center max-w-10/12 mx-auto">
        <Link href="/" className="">
          <CustomImage src="/logo.png" alt="logo" width={136} height={28} />
        </Link>
        <div className="space-x-10 font-gilmer">
          <Link
            href="/about-us"
            className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
          >
            Services
          </Link>
          <Link
            href="/contact-us"
            className="text-[#001928] text-[1rem] font-[600] hover:font-[700] hover:text-[#002211]"
          >
            Contact Us
          </Link>
        </div>
        <Link
          href="/schedule-consultation"
          className="bg-[#002211] text-[1rem] font-[400] rounded-md px-4 py-2 text-white"
        >
          Schedule a Consultation
        </Link>
      </div>
    </nav>
  );
};
export default NavBar;
