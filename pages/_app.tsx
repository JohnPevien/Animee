import "../styles/globals.css";
import { Poppins } from "@next/font/google";

import type { AppProps } from "next/app";

import Navigation from "@components/navigation";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Navigation />
      <main className="mt-20">
        <Component {...pageProps} />
      </main>
    </>
  );
}
