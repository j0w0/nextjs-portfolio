export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        no-underline
        py-2
        px-4
        rounded
        border
        border-amber-400
        hover:bg-amber-400
        hover:text-black
        transition-all
      `}
    >
      {text}
    </button>
  );
}
