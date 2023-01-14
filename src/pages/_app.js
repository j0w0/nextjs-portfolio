import "../styles/globals.css";
import { Arimo, Bungee } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const arimo = Arimo({ subsets: "latin" });
const bungee = Bungee({
  subsets: "latin",
  weight: ["400"],
});

const primaryFont = arimo.style.fontFamily;
const secondaryFont = bungee.style.fontFamily;

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --j0w0-font-primary: ${primaryFont};
          --j0w0-font-secondary: ${secondaryFont};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
