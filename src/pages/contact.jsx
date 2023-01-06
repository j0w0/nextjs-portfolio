import HTMLHead from "../components/HTMLHead/HTMLHead";

export default function Contact({ page }) {
  return (
    <>
      <HTMLHead title="Contact!" />
      <main>
        <h1 className="font-secondary">Contact</h1>
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
