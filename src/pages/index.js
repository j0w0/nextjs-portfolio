import { getRandomProjects } from "../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import ContactForm from "../components/ContactForm/ContactForm";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import UFOScene from "../components/UFOScene/UFOScene";
import atfStyles from "../styles/above-the-fold.module.css";

export default function Home({ page, projects }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock // Front-End Developer" home={true} />

      <section className={atfStyles["above-the-fold"]}>
        <div className={atfStyles.atf__container}>
          <div className={atfStyles.atf__greeting}>
            <h1 className="text-amber-400">{page.greeting}, I’m Josh</h1>
            <h2 className="mt-0">Front-End Developer</h2>
          </div>

          <div className={atfStyles.atf__ufo}>
            <UFOScene />
          </div>

          <div className={atfStyles.atf__intro}>
            <p className="mb-6">
              I am a Front-End Developer experienced in building websites and
              web app user interfaces. I enjoy engineering solutions to improve
              efficiency and automate processes.
            </p>
            <div className="flex flex-col gap-4 items-center md:flex-row">
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
        <div className="container pb-10">
          <h3 className="text-3xl mb-8 text-amber-400">Web Development Work</h3>
          <div
            className={`
              grid
              grid-cols-1
              gap-2
              md:grid-cols-2
              md:gap-4
              xl:grid-cols-4
              xl:gap-8
              mb-8
            `}
          >
            {projects.map((project) => (
              <ProjectCard key={project.databaseId} project={project} />
            ))}
          </div>
          <ButtonLink href="/work" text="View More Work" internal={true} />
        </div>
      </section>

      <section>
        <div className="container pb-10">
          <h3 className="text-3xl mb-8 text-amber-400">E.T. Phone Home</h3>
          <p>
            Ready to make something outta this world? Contact me on{" "}
            <a
              href="https://www.linkedin.com/in/j0w0/"
              targe="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>{" "}
            or use the form below to send me a message.
          </p>
          <ContactForm />
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

  // greeting
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
