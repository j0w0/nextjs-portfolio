import Link from "next/link";
import { getRandomProjects } from "../lib/wp-graphql";
import { getPlaiceholder } from "plaiceholder";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import PageHeading from "../components/PageHeading/PageHeading";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home({ page, projects }) {
  const LINKS = [
    {
      href: "//www.github.com/j0w0",
      name: "Check out my Github",
    },
    {
      href: "http://resume.j0w0.com",
      name: "View my Resume",
    },
  ];

  return (
    <>
      <HTMLHead title="Josh Woodcock // Front-End Developer" home={true} />

      <PageHeading
        title={
          <span
            dangerouslySetInnerHTML={{
              __html: `${page.greeting},<br /> I’m Josh`,
            }}
          />
        }
        subtitle="Front-End Developer"
        buttons={LINKS.map((link) => {
          return (
            <a
              key={link.name}
              href={link.href}
              className="
                no-underline
                py-2
                px-4
                rounded
                border
                border-amber-400
                hover:bg-amber-400
                hover:text-black
                transition-all
              "
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          );
        })}
      />

      <section>
        <div className="container py-10">
          <div
            className="
              grid
              lg:grid-cols-4
              lg:gap-6
              xl:gap-8
            "
          >
            <div className="lg:col-span-3">
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
                className="
                  grid
                  grid-cols-1
                  gap-2
                  md:grid-cols-2
                  md:gap-4
                  xl:grid-cols-4
                  xl:gap-8
                "
              >
                {projects.map((project) => (
                  <ProjectCard key={project.databaseId} project={project} />
                ))}
              </div>

              <Link
                href="/work"
                className="
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
                "
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
