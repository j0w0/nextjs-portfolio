import styles from "../styles/Home.module.css";
import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Home() {
  return (
    <>
      <HTMLHead title="Home!" />
      <main className={styles.main}>
        <h1 className="font-secondary">j0w0</h1>
      </main>
    </>
  );
}
