import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Josh Woodcock // Front-End Developer</title>
        <meta
          name="description"
          content="Josh Woodcock, Front-End Developer & Software Engineer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Main</main>
    </>
  );
}
