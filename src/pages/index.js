import Link from "next/link";
import styles from "../styles/Home.module.css";
import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Home({ page }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock / Front-End Developer" />
      <main className={styles.main}>
        <h1 className="font-secondary">j0w0</h1>
        <p>
          this is currently a wip! im using next.js to build this headless{" "}
          <Link href="/work">portfolio</Link>. im using{" "}
          <a href="https://www.j0w0.com/" target="_blank" rel="noreferrer">
            my current wordpress site
          </a>{" "}
          as the backend.
        </p>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      page: {},
    },
  };
}
