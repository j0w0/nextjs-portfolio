export default function Button({ text, onClick }) {
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
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
