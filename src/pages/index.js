import Link from "next/link";
import styles from "../styles/Home.module.scss";
import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Home({ page }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock / Front-End Developer" />
      <main className={styles.main}>
        <h1 className="font-secondary">j0w0</h1>
        <p>
          this is a wip. im using next.js to build this headless{" "}
          <Link href="/work">portfolio</Link>. im using{" "}
          <a href="https://www.j0w0.com/" target="_blank" rel="noreferrer">
            my current wordpress site
          </a>{" "}
          as the backend data source.
        </p>
        <p>
          230104 - started with create-next-app
          <br />
          230106 - added page structure and google fonts, still need to pick
          selections
          <br />
          230108 - added graphql queries to get wordpress data
          <br />
          230109 - set up next/image for featured images
          <br />
          230110 - added tailwindcss, not sure if i like it over bootstrap
          <br />
          230111 - added grid/columns to work page
        </p>
        <p>
          check out my{" "}
          <a href="https://github.com/j0w00" target="_blank" rel="noreferrer">
            github
          </a>{" "}
          👨🏻‍💻
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
