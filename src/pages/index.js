import styles from "../styles/Home.module.css";
import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Home({ page }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock / Front-End Developer" />
      <main className={styles.main}>
        <h1 className="font-secondary">j0w0</h1>
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
