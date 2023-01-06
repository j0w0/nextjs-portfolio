import Link from "next/link";
import HTMLHead from "../../components/HTMLHead/HTMLHead";

export default function Portfolio({ projects }) {
  return (
    <>
      <HTMLHead title="Work/Portfolio!" />
      <main>
        <h1 className="font-secondary">Portfolio of work</h1>

        <ul>
          {projects.map((project, idx) => {
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

export async function getStaticProps(context) {
  return {
    props: {
      projects: [],
    },
  };
}
