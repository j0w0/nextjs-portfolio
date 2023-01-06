import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function About({ page }) {
  return (
    <>
      <HTMLHead title="About!" />
      <main>
        <h1 className="font-secondary">About</h1>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      page: {},
    },
  };
}
