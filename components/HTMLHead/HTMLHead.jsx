import Head from "next/head";

export default function HTMLHead({
  title = "Josh Woodcock // Front-End Developer",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
