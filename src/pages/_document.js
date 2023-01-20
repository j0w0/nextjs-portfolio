import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const description = "Josh Woodcock, Front-End Developer & Software Engineer";

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/j0w0-meta-img.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
