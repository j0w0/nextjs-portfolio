import Link from "next/link";
import HTMLHead from "../../components/HTMLHead/HTMLHead";
import { getInteractivePortfolioPosts } from "../../lib/wp-graphql";

export default function Portfolio({ projects }) {
  return (
    <>
      <HTMLHead title="Work" />
      <main>
        <h1 className="font-secondary">Portfolio of work</h1>
        <ul>
          {projects.map((project, idx) => {
            project = project.node;
            return (
              <li key={project.id}>
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
  return {
    props: {
      projects: portfolioPosts,
    },
  };
}
