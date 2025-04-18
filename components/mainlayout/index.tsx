import Footer from "../footer";
import Meta from "./meta";
// import NavBar from "../navbar";

import { ReactNode } from "react";

interface MainLayoutProps {
  meta: Record<string, any>;
  children: ReactNode;
}

const MainLayout = ({ meta, children }: MainLayoutProps) => {
  return (
    <>
      <Meta {...meta} />
      <div className="flex flex-col min-h-screen ">
        {/* <NavBar /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
export default MainLayout;
