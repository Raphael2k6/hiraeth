import CustomImage from "../customimage";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { usePathname } from "next/navigation";

interface NavBarProps {
  isFixed: boolean;
  isModalOpen: boolean;
  handleHamburgerClick: () => void;
}

const routesData = [
  { name: "About Us", path: "/about-us" },
  { name: "Services", path: "/services" },
  { name: "Contact Us", path: "/contact-us" },
];

const NavBar: React.FC<NavBarProps> = ({
  isFixed,
  isModalOpen,
  handleHamburgerClick,
}) => {
  const pathname = usePathname();

  const route = routesData.map((route) => {
    const isActive = pathname === route.path;
    return (
      <Link
        href={route.path}
        key={route.name}
        className={`${
          isActive && "text-[#00CC66] font-[600]"
        }text-[#001928] font-gilmer text-[1rem] font-[400] hover:font-[700] hover:text-[#002211]`}
      >
        {route.name}
      </Link>
    );
  });

  return (
    <>
      <nav>
        <div
          className={`${
            pathname === "/" && "bg-[#D5F6E5]"
          } sm:flex hidden justify-between items-center  p-4 mx-auto ${
            isFixed
              ? "fixed top-0 left-0 px-[8%] z-50 transition duration-[300ms] py-4 bg-white w-full ease-in shadow-xl"
              : "px-[8%]"
          }`}
        >
          <Link href="/" className="">
            <CustomImage src="/logo.png" alt="logo" width={136} height={28} />
          </Link>
          <div className="space-x-10 font-gilmer">{route}</div>
          <Link
            href="/schedule-consultation"
            className="bg-[#002211] text-[1rem] font-[400] rounded-md px-4 py-2 text-white"
          >
            Schedule a Consultation
          </Link>
        </div>
      </nav>
      <nav
        className={`${
          isFixed &&
          "fixed top-0 z-50 transition duration-[300ms] ease-in left-0 bg-white"
        } fixed max-md:fixed top-0 left-0 right-0 z-50 flex h-[5rem] w-[100%] items-center justify-between px-6 sm:hidden xl:h-[10vh]`}
      >
        <Link href="/" className="cursor-pointer w-[170px] pl-1">
          <div className="w-[130px]">
            {" "}
            <CustomImage src="/logo.png" alt="logo" width={136} height={28} />
          </div>
        </Link>
        {isModalOpen === false ? (
          <GiHamburgerMenu
            style={{ width: "30px", height: "30px" }}
            onClick={handleHamburgerClick}
          />
        ) : (
          <GrClose
            style={{ width: "30px", height: "30px" }}
            onClick={handleHamburgerClick}
          />
        )}
      </nav>
    </>
  );
};
export default NavBar;
