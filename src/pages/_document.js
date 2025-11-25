import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "Josh Woodcock // Software Engineer";
  const description =
    "Software Engineer specializing in front-end development.";

  return (
    <Html lang="en">
      <Head>
        <meta name="title" property="og:title" content={title} />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="image" property="og:image" content="/j0w0-meta-img.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
