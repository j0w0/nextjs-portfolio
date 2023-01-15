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

      <section className="flex flex-col">
        <div className="container pt-6 pb-10">
          <p>
            I am a <strong>Front-End Developer / Software Engineer</strong>{" "}
            experienced in building reliable, manageable, and scalable websites
            and web applications. I develop quality products by utilizing
            appropriate technologies and applying best practices for data
            organization and code optimization.
          </p>

          <p>
            <strong>Skills/Technologies:</strong> React, JavaScript, HTML, CSS,
            SCSS and SASS, TypeScript, Vite, Next.js, Node, Express, Google
            Firebase, MongoDB, PostgreSQL, MySQL, Bootstrap, jQuery, PHP, Git,
            creating and consuming RESTful APIs, Wordpress CMS, WooCommerce.
          </p>

          <p>
            Check out my{" "}
            <a href="https://github.com/j0w0" target="_blank" rel="noreferrer">
              Github
            </a>{" "}
            for code and project demos 👨🏻‍💻
          </p>

          <hr />

          <h2>Next.js</h2>

          <p>
            this is a wip. im using next.js to build this site as a headless{" "}
            <Link href="/work">portfolio</Link>. im using{" "}
            <a href="https://www.j0w0.com/" target="_blank" rel="noreferrer">
              my current wordpress site
            </a>{" "}
            as the backend data source.
          </p>

          <ul>
            <li>230104 - started with create-next-app</li>
            <li>230106 - added basic page structure and google fonts</li>
            <li>230108 - added graphql queries to get wordpress data</li>
            <li>230109 - set up next/image for featured images</li>
            <li>
              230110 - added tailwindcss, not sure if i like it over bootstrap
            </li>
            <li>230111 - added tailwind classes for structure and styling</li>
            <li>230112 - added project tags</li>
            <li>230113 - added project images, tailwind styles, mobile menu</li>
          </ul>
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
