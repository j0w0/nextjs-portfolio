export default function PageHeading({ title, subtitle, buttons }) {
  return (
    <section
      className="
      flex
      flex-col
      bg-neutral-900
      text-amber-400
      bg-[url('/bg-stardust.png')]
      bg-center
    "
    >
      <div className="container pt-10 pb-14">
        <h1 className="mb-6">{title}</h1>
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
