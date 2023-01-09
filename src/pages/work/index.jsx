import Link from "next/link";
import Image from "next/image";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import { getInteractivePortfolioPosts } from "../../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";

export default function Portfolio({ projects }) {
  return (
    <>
      <HTMLHead title="Work" />
      <main>
        <h1 className="font-secondary">Portfolio of work</h1>
        <ul>
          {projects.map((project) => {
            const { mediaItemUrl, altText, mediaDetails, blurDataURL } =
              project.featuredImage;
            return (
              <li key={project.databaseId}>
                <Image
                  src={mediaItemUrl}
                  alt={altText}
                  width={mediaDetails.width}
                  height={mediaDetails.height}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                />
                <Link href={`/work/${encodeURIComponent(project.slug)}`}>
                  {project.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const portfolioPosts = await getInteractivePortfolioPosts();

  const newPortfolioPosts = await Promise.all(
    portfolioPosts.map(async (post) => {
      const ftImgUrl = post.featuredImage.node.mediaItemUrl;
      // https://github.com/lovell/sharp/issues/3438
      const { base64 } = await getPlaiceholder(ftImgUrl);

      return {
        ...post,
        featuredImage: {
          ...post.featuredImage.node,
          blurDataURL: base64,
        },
      };
    })
  ).then((values) => values);

  return {
    props: {
      projects: newPortfolioPosts,
    },
  };
}
