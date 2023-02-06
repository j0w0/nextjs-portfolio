import Link from "next/link";
import { getRandomProjects } from "../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Sidebar from "../components/Sidebar/Sidebar";
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
            <ButtonLink href="/work" text="View My Work" internal={true} />
          </div>
        </div>
      </section>

      <section>
        <div className="container py-10">
          <div
            className={`
              grid
              lg:grid-cols-4
              lg:gap-6
              xl:gap-8
            `}
          >
            <div className="lg:col-span-3">
              <p>
                I built this site as a Headless CMS using Next.js with
                TailwindCSS for the front end and, via GraphQL, my{" "}
                <a
                  href="https://wordpress.j0w0.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  existing Wordpress website
                </a>{" "}
                as the data source. It is a hybrid web app that uses server-side
                rendering and static generation, so enjoy the speed! ⚡️
              </p>

              <h3 className="text-3xl mb-6">Hello, world!</h3>

              <div className="mb-10">
                <p>
                  I am a <strong>Front-End Developer</strong> experienced in
                  building reliable, manageable, and scalable websites and web
                  applications by utilizing appropriate technologies and
                  applying best practices and industry standards.
                </p>

                <p>
                  <strong>Skills/Technologies:</strong> React, JavaScript, HTML,
                  CSS, SCSS, TypeScript, Vite, Next.js, Node, Express, Google
                  Firebase, MongoDB, GraphQL, PostgreSQL, MySQL, Bootstrap,
                  Tailwind, jQuery, PHP, Git, Jira, creating and consuming
                  RESTful APIs, Wordpress & Headless CMS, WooCommerce.
                </p>

                <p>
                  Check out my{" "}
                  <a
                    href="https://github.com/j0w0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>{" "}
                  for code and project demos or{" "}
                  <Link href="/work">view my work</Link> 👨🏻‍💻
                </p>
              </div>

              <h3 className="text-3xl mb-6">Web Projects</h3>

              <div
                className={`
                  grid
                  grid-cols-1
                  gap-2
                  md:grid-cols-2
                  md:gap-4
                  xl:grid-cols-4
                  xl:gap-8
                `}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.databaseId} project={project} />
                ))}
              </div>

              <Link
                href="/work"
                className={`
                  no-underline
                  py-2
                  px-4
                  my-4
                  rounded
                  border
                  border-neutral-900
                  hover:bg-amber-400
                  hover:text-black
                  transition-all
                  inline-block
                `}
              >
                View all web projects &raquo;
              </Link>
            </div>
            <Sidebar />
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const portfolioPosts = await getRandomProjects(4);

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
