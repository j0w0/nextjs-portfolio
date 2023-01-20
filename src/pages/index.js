import Link from "next/link";
import HTMLHead from "../components/HTMLHead/HTMLHead";
import PageHeading from "../components/PageHeading/PageHeading";

export default function Home({ page }) {
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
                "
              target="_blank"
              rel="noreferrer"
            >
              {link.name}
            </a>
          );
        })}
      />

      <section className="flex flex-col flex-1 justify-center">
        <div className="container py-10">
          <p>
            I am a <strong>Front-End Developer</strong> experienced in building
            reliable, manageable, and scalable websites and web applications by
            utilizing appropriate technologies and applying best practices and
            industry standards.
          </p>

          <p>
            <strong>Skills/Technologies:</strong> React, JavaScript, HTML, CSS,
            SCSS, TypeScript, Vite, Next.js, Node, Express, Google Firebase,
            MongoDB, GraphQL, PostgreSQL, MySQL, Bootstrap, Tailwind, jQuery,
            PHP, Git, Jira, creating and consuming RESTful APIs, Wordpress &
            Headless CMS, WooCommerce.
          </p>

          <p>
            Check out my{" "}
            <a href="https://github.com/j0w0" target="_blank" rel="noreferrer">
              Github
            </a>{" "}
            for code and project demos 👨🏻‍💻
          </p>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  const GREETINGS = ["Hello", "Hi", "Hey"];
  const randomIdx = Math.floor(Math.random() * GREETINGS.length);
  const greeting = GREETINGS[randomIdx];

  return {
    props: {
      page: {
        greeting,
      },
    },
  };
}
