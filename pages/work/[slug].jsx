export default function Work({ post }) {
  console.log(post);
  return <></>;
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
