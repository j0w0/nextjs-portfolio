import styles from "../../styles/Page.module.scss";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import {
  getInteractivePortfolioPosts,
  getPortfolioPost,
} from "../../lib/wp-graphql";

export default function Post({ post }) {
  console.log(post);
  const { projectId, slug, title, content, websiteUrl, projectTags } = post;
  return (
    <>
      <HTMLHead title={title} />
      <main className={styles.main}>
        <h1 className="font-secondary">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />

        <ul className="list-none p-0 flex items-center flex-wrap gap-2">
          {projectTags.edges.map((tag) => {
            const key = tag.node.id;
            const name = tag.node.name;
            return (
              <li key={key} className="px-2 py-1 bg-zinc-100">
                {name}
              </li>
            );
          })}
        </ul>
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
