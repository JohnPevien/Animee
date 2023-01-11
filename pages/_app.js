import "../styles/globals.css";
import { Poppins } from "@next/font/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
      html {
        font-family ${Poppins.style.fontFamily};
      }
    
    `}</style>
      <Component {...pageProps} />
    </>
  );
}
