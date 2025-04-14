// import Carousel from "../../components/Carousel/Carousel";
import CarouselLightbox from "../../components/CarouselLightbox/CarouselLightbox";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import PageHeading from "../../components/PageHeading/PageHeading";
import Sidebar from "../../components/Sidebar/Sidebar";
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
  const contentLinkFix = content.replace(
    "j0w0.com/portfolio/",
    "j0w0.com/work/"
  );

  return (
    <>
      <HTMLHead title={title} />
      <PageHeading title={title} />
      <section className="flex flex-col">
        <div className="container pb-10 md:pt-8 md:pb-20 xl:py-20">
          <div className="grid lg:grid-cols-12 xl:gap-12">
            <div className="lg:col-span-8">
              {/* <Carousel images={displayImages} /> */}
              <CarouselLightbox images={displayImages} />
              <div
                className="mt-8"
                dangerouslySetInnerHTML={{ __html: contentLinkFix }}
              />
            </div>

            <div className="lg:col-span-3 lg:col-start-10">
              <h4 className="mt-0">Project Tags</h4>
              <ul className="list-none p-0 mb-8 flex items-center flex-wrap gap-3">
                {projectTags.edges.map((tag) => {
                  return (
                    <li
                      key={tag.node.id}
                      className="px-2 py-1 bg-neutral-600/75 text-xs rounded text-white"
                    >
                      {tag.node.name}
                    </li>
                  );
                })}
              </ul>
              <Sidebar />
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
