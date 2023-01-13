import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
