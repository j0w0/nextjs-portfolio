import "../styles/globals.css";
import { Arimo, Bungee } from "@next/font/google";
import Layout from "../components/Layout/Layout";

const arimo = Arimo({ subsets: "latin" });
const bungee = Bungee({
  subsets: "latin",
  weight: ["400"],
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
