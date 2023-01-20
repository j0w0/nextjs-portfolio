import Link from "next/link";
import Image from "next/image";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import { getInteractivePortfolioPosts } from "../../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";
import PageHeading from "../../components/PageHeading/PageHeading";

export default function Portfolio({ projects }) {
  return (
    <>
      <HTMLHead title="Web Development" />
      <PageHeading title="Web Development" />
      <section className="flex flex-col">
        <div className="container py-10">
          <div
            className="
            grid
            grid-cols-1
            gap-2
            md:grid-cols-2
            md:gap-4
            lg:grid-cols-3
            lg:gap-6
            xl:grid-cols-4
            xl:gap-8
            "
          >
            {projects.map((project) => {
              const { mediaItemUrl, altText, mediaDetails, blurDataURL } =
                project.featuredImage;
              return (
                <div key={project.databaseId}>
                  <Link href={`/work/${encodeURIComponent(project.slug)}`}>
                    <Image
                      src={mediaItemUrl}
                      alt={altText}
                      width={mediaDetails.width}
                      height={mediaDetails.height}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                    {project.title}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
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
    revalidate: 10,
  };
}
