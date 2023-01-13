import styles from "../styles/Page.module.scss";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import { getPages, getPageBySlug } from "../lib/wp-graphql";

export default function Contact({ page }) {
  const { pageId, slug, title, content } = page;
  return (
    <>
      <HTMLHead title={title} />
      <main className="flex flex-col p-5">
        <h1 className="font-secondary">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        {slug === "contact" && (
          <p>Contact form coming soon! Use the LinkedIn link above 🔗</p>
        )}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const page = await getPageBySlug(params?.slug);
  return {
    props: {
      page: page,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const pages = await getPages();

  const pagePaths = pages.map((page) => {
    return {
      params: {
        slug: page?.node?.slug,
      },
    };
  });

  return {
    paths: pagePaths,
    fallback: false,
  };
}
