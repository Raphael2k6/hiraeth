import Footer from "../footer";
import { useEffect, useState } from "react";
import Meta from "./meta";
import NavBar from "../navbar";
import MobileNav from "../navmobile";
import { ReactNode } from "react";
import Modal from "../modal";
import { useModal } from "../modalcontext";

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

  const {
    handleOpenScheduleModal,
    handleCloseScheduleModal,
    openScheduleModal,
  } = useModal();
  return (
    <>
      <Meta {...meta} />
      <div className="flex flex-col min-h-screen ">
        {isModalOpen && (
          <MobileNav
            closeModal={handleHamburgerClick}
            // isModalOpen={isModalOpen}
            handleOpenScheduleModal={handleOpenScheduleModal}
          />
        )}

        {!isModalOpen && (
          <NavBar
            isFixed={isFixed}
            isModalOpen={isModalOpen}
            handleHamburgerClick={handleHamburgerClick}
            handleOpenScheduleModal={handleOpenScheduleModal}
          />
        )}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
      {openScheduleModal && (
        <Modal handleCloseScheduleModal={handleCloseScheduleModal} />
      )}
    </>
  );
};
export default MainLayout;
