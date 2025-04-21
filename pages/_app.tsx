import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { composeClasses } from "@/utils";
import localFont from "next/font/local";
import "react-phone-input-2/lib/style.css";
import { ModalProvider } from "@/components/modalcontext";
import "@/styles/custom.css";

const clashDisplay = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-clash-display",
});

const clashDisplayLight = localFont({
  src: [
    {
      path: "../public/fonts/ClashDisplay_Complete/Fonts/OTF/ClashDisplay-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-clash-display-light",
});

const gilmer = localFont({
  src: [
    {
      path: "../public/fonts/Gilmer-Regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gilmer",
});

const aeonikpro = localFont({
  src: [
    {
      path: "../public/fonts/Aeonik/AeonikProTRIAL-Regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-aeonikpro",
});

const fontVars = composeClasses(
  clashDisplay.variable,
  gilmer.variable,
  clashDisplayLight.variable,
  aeonikpro.variable
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={fontVars}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </div>
  );
}
