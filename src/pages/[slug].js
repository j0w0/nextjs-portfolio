import ContactForm from "../components/ContactForm/ContactForm";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import PageHeading from "../components/PageHeading/PageHeading";
import { getPages, getPageBySlug } from "../lib/wp-graphql";

export default function Contact({ page }) {
  const { pageId, slug, title, content } = page;
  return (
    <>
      <HTMLHead title={title} />
      <PageHeading title={title} />
      <section className="flex flex-col">
        <div className="container pt-6 pb-10">
          <div dangerouslySetInnerHTML={{ __html: content }} />

          {slug === "contact" && <ContactForm />}
        </div>
      </section>
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
