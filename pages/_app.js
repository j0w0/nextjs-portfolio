import "../styles/globals.css";
import { Arimo, Imbue } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const arimo = Arimo({
  weight: "400",
  subsets: "latin",
});

const imbue = Imbue({
  weight: "900",
  subsets: "latin",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-arimo: ${arimo.style.fontFamily};
          --font-imbue: ${imbue.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
