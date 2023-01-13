import Head from "next/head";

export default function HTMLHead({ title = "j0w0", home = false }) {
  return (
    <Head>
      <title>{home ? title : `${title} // Josh Woodcock`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
