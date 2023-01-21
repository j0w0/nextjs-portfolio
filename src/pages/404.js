import Link from "next/link";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import PageHeading from "../components/PageHeading/PageHeading";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Custom404() {
  return (
    <>
      <HTMLHead title="404" />
      <PageHeading title="I- uh..." />
      <section className="flex flex-col">
        <div className="container py-10">
          <div
            className="
            grid
            lg:grid-cols-4
            lg:gap-6
            xl:gap-8
            "
          >
            <div className="lg:col-span-3">
              <h2>Couldnt find what you were looking for.</h2>
              <p>
                <Link href="/">Go home</Link> or check out the links{" "}
                <span className="lg:hidden">below 👇🏼</span>
                <span className="hidden lg:inline-block">over there 👉🏼</span>
              </p>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}
