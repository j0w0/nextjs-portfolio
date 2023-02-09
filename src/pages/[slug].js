import HTMLHead from "../components/HTMLHead/HTMLHead";
import PageHeading from "../components/PageHeading/PageHeading";
import Sidebar from "../components/Sidebar/Sidebar";
import { getPages, getPageBySlug } from "../lib/wp-graphql";

export default function Contact({ page }) {
  const { pageId, slug, title, content } = page;
  return (
    <>
      <HTMLHead title={title} />
      <PageHeading title={title} />
      <section className="flex flex-col">
        <div className="container pt-5 pb-12 lg:pt-16 lg:pb-20">
          <div className="grid lg:grid-cols-12 xl:gap-12">
            <div className="lg:col-span-8">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <Sidebar />
            </div>
          </div>
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
  let pages = await getPages();

  const newPages = pages.filter((page) => {
    return page?.node?.slug !== "contact";
  });

  const pagePaths = newPages.map((page) => {
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
