import styles from "../styles/Page.module.scss";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import { getPageBySlug } from "../lib/wp-graphql";

export default function Contact({ page }) {
  const { pageId, slug, title, content } = page;
  return (
    <>
      <HTMLHead title={title} />
      <main className={styles.main}>
        <h1 className="font-secondary">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const page = await getPageBySlug("contact");
  return {
    props: {
      page: page,
    },
  };
}
