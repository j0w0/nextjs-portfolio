export default function PageHeading({ title, subtitle, buttons }) {
  return (
    <section
      className={`
      flex
      flex-col
      text-amber-400
    `}
    >
      <div className="container">
        <h1 className={subtitle && `mb-6`}>{title}</h1>
        {subtitle && <h2 className="mb-8">{subtitle}</h2>}
        {buttons && (
          <div className="font-heading flex flex-row flex-wrap gap-2">
            {buttons}
          </div>
        )}
      </div>
    </section>
  );
}
