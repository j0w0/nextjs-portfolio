import Link from "next/link";

export default function ButtonLink({ href, text, internal = false }) {
  const classes = `
    inline-block
    font-heading
    no-underline
    py-2
    px-6
    rounded
    text-amber-400
    border
    border-amber-400
    hover:bg-amber-400
    hover:text-black
    transition-all
  `;

  return (
    <>
      {internal ? (
        <Link href={href} className={classes}>
          {text}
        </Link>
      ) : (
        <a href={href} className={classes} target="_blank" rel="noreferrer">
          {text}
        </a>
      )}
    </>
  );
}
