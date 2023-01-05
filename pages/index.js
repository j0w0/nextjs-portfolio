import styles from "../styles/Home.module.css";
import HTMLHead from "../components/Head/Head";

export default function Home() {
  return (
    <>
      <HTMLHead title="Home!" />
      <main className={styles.main}>Home</main>
    </>
  );
}
