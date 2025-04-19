import Footer from "../footer";
import { useEffect, useState } from "react";
import Meta from "./meta";
// import NavBar from "../navbar";
import NavBar from "../navbar";
import MobileNav from "../navmobile";

import { ReactNode } from "react";

interface MainLayoutProps {
  meta: {
    title: string;
    description?: string;
    [key: string]: unknown;
  };
  children: ReactNode;
}

const MainLayout = ({ meta, children }: MainLayoutProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const [isModalOpen, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust the scroll threshold as needed
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHamburgerClick = () => {
    setShowModal(!isModalOpen);
  };
  return (
    <>
      <Meta {...meta} />
      <div className="flex flex-col min-h-screen ">
        {isModalOpen && (
          <MobileNav
            closeModal={handleHamburgerClick}
            // isModalOpen={isModalOpen}
          />
        )}

        {!isModalOpen && (
          <NavBar
            isFixed={isFixed}
            isModalOpen={isModalOpen}
            handleHamburgerClick={handleHamburgerClick}
          />
        )}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
