import Link from "next/link";
import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Home({ page }) {
  return (
    <>
      <HTMLHead title="Josh Woodcock / Front-End Developer" />
      <main className="flex flex-col p-5">
        <h1>{page.greeting}, I&rsquo;m Josh</h1>

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
          <a href="https://github.com/j0w00" target="_blank" rel="noreferrer">
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
          <li>230112 - add tags to projects</li>
          <li>230113 - add attached media images to projects</li>
        </ul>
      </main>
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
