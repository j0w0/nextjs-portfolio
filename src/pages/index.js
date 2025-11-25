import { getRandomProjects } from "../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import UFOScene from "../components/UFOScene/UFOScene";
import styles from "../styles/home.module.scss";

export default function Home({ page, projects }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock // Software Engineer" home={true} />

      <section className={styles.atf}>
        <div className={styles.atf__container}>
          <div className={styles.atf__greeting}>
            <h1>{page.greeting}, I’m Josh</h1>
            <h2>Software Engineer</h2>
          </div>

          <div className={styles.atf__ufo}>
            <UFOScene />
          </div>

          <div className={styles.atf__intro}>
            <p>
              Software Engineer specializing in front-end development with 5+
              years of experience building websites and web application
              interfaces that enhance efficiency, streamline processes, and
              drive lead generation for B2B and B2C marketing, advertising, and
              sales teams.
            </p>
            <div className={styles.buttons}>
              <ButtonLink href="/work" text="View My Work" internal={true} />
              <ButtonLink
                href="//resume.j0w0.com"
                text="View My Resume"
                internal={false}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={styles.projects__container}>
          <h3 className={styles.projects__heading}>Web Development Work</h3>
          <div className={styles.projects__grid}>
            {projects.map((project) => (
              <ProjectCard key={project.databaseId} project={project} />
            ))}
          </div>
          <ButtonLink href="/work" text="View More Work" internal={true} />
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const portfolioPosts = await getRandomProjects(8);

  const newPortfolioPosts = await Promise.all(
    portfolioPosts.map(async (post) => {
      const ftImgUrl = post.featuredImage.node.mediaItemUrl;
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

  const GREETINGS = ["Hello", "Hi", "Hey"];
  const randomIdx = Math.floor(Math.random() * GREETINGS.length);
  const greeting = GREETINGS[randomIdx];

  return {
    props: {
      projects: newPortfolioPosts,
      page: {
        greeting,
      },
    },
    revalidate: 10,
  };
}
