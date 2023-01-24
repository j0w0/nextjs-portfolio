import Carousel from "../../components/Carousel/Carousel";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import PageHeading from "../../components/PageHeading/PageHeading";
import {
  getInteractivePortfolioPosts,
  getPortfolioPost,
} from "../../lib/wp-graphql";

export default function Post({ post }) {
  const {
    content,
    databaseId,
    featuredImage,
    featuredImages,
    projectTags,
    slug,
    title,
    websiteUrl,
  } = post;

  const displayImages = [featuredImage, ...featuredImages.edges];

  return (
    <>
      <HTMLHead title={title} />
      <PageHeading title={title} />
      <section className="flex flex-col">
        <div className="container py-10 lg:py-20">
          <div className="grid gap-2 xl:grid-cols-12 xl:gap-8">
            <div className="xl:col-span-6 2xl:col-start-1 2xl:col-end-7">
              <Carousel images={displayImages} />
            </div>

            <div className="xl:col-span-6">
              <div dangerouslySetInnerHTML={{ __html: content }} />
              <ul className="list-none p-0 mb-4 flex items-center flex-wrap gap-2">
                {projectTags.edges.map((tag) => {
                  return (
                    <li
                      key={tag.node.id}
                      className="px-2 py-1 bg-neutral-100 text-xs"
                    >
                      {tag.node.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// static (pre-rendered) props sent to this Post component
export async function getStaticProps({ params }) {
  const portfolioPost = await getPortfolioPost(params?.slug);

  if (!portfolioPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: portfolioPost,
    },
    revalidate: 10,
  };
}

// create paths for work/portfolio pages
export async function getStaticPaths() {
  const interactivePosts = await getInteractivePortfolioPosts();

  const portfolioPaths = interactivePosts.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths: portfolioPaths,
    fallback: "blocking",
  };
}
