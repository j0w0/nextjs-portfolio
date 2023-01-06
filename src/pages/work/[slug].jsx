import HTMLHead from "../../components/HTMLHead/HTMLHead";

export default function Work({ post }) {
  console.log(post);
  return (
    <>
      <HTMLHead title="Project!" />
      <main>
        <h1 className="font-secondary">Project</h1>
      </main>
    </>
  );
}

// static (pre-rendered) props sent to Work component
export async function getStaticProps(context) {
  return {
    props: {
      post: {},
    },
  };
}

// create paths for work/portfolio pages
export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    fallback: false,
  };
}
