import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
  const [headerHeight, setHeaderHeight] = useState(60);

  const styles = {
    paddingTop: headerHeight,
  };

  useEffect(() => {
    const headerEl = document.querySelector(".site-header");
    setHeaderHeight(headerEl.offsetHeight);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --j0w0-header-height: ${headerHeight}px;
        }
      `}</style>
      <div className="j0w0__wrapper">
        <Header />
        <main style={styles}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
