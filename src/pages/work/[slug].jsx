import HTMLHead from "../../components/HTMLHead/HTMLHead";
import {
  getInteractivePortfolioPosts,
  getPortfolioPost,
} from "../../lib/wp-graphql";

export default function Post({ post }) {
  const { projectId, slug, title, content, websiteUrl } = post;
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
    project = project.node;
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
