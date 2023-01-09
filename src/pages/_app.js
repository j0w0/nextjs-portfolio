import "../styles/globals.scss";
import { Arimo, IBM_Plex_Mono } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const arimo = Arimo({ subsets: "latin" });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: "latin",
  weight: ["400", "600", "700"],
});

const primaryFont = arimo.style.fontFamily;
const secondaryFont = ibmPlexMono.style.fontFamily;

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-primary: ${primaryFont};
          --font-secondary: ${secondaryFont};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
