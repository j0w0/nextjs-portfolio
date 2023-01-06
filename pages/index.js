import styles from "../styles/Home.module.css";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <HTMLHead title="Home!" />
      <Layout>
        <main className={styles.main}>Home</main>
      </Layout>
    </>
  );
}
