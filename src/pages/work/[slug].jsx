import HTMLHead from "../../components/HTMLHead/HTMLHead";
import {
  getInteractivePortfolioPosts,
  getPortfolioPost,
} from "../../lib/wp-graphql";
import Image from "next/image";

export default function Post({ post }) {
  const {
    attachedMedia,
    content,
    databaseId,
    featuredImage,
    projectTags,
    slug,
    title,
    websiteUrl,
  } = post;

  return (
    <>
      <HTMLHead title={title} />
      <main className="flex flex-col p-4">
        <h1 className="font-secondary">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <ul className="list-none p-0 mb-4 flex items-center flex-wrap gap-2">
          {projectTags.edges.map((tag) => {
            return (
              <li key={tag.node.id} className="px-2 py-1 bg-zinc-100">
                {tag.node.name}
              </li>
            );
          })}
        </ul>

        {attachedMedia.edges.map((image) => {
          image = image.node;
          return (
            <Image
              key={image.databaseId}
              src={image.mediaItemUrl}
              height={image.mediaDetails.height}
              width={image.mediaDetails.width}
              alt={image.altText}
            />
          );
        })}
      </main>
    </>
  );
}

// static (pre-rendered) props sent to this Post component
export async function getStaticProps({ params }) {
  const portfolioPost = await getPortfolioPost(params?.slug);

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
    fallback: false,
  };
}
