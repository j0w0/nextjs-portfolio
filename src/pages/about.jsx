import HTMLHead from "../components/HTMLHead/HTMLHead";
import { getPageBySlug } from "../lib/wp-graphql";

export default function About({ page }) {
  const { pageId, slug, title, content } = page;
  return (
    <>
      <HTMLHead title={title} />
      <main>
        <h1 className="font-secondary">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </>
  );
}

export async function getStaticProps() {
  const page = await getPageBySlug("about");
  return {
    props: {
      page: page,
    },
  };
}
