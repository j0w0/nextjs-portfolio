export default function Sidebar() {
  const LINKS = [
    {
      href: "https://www.github.com/j0w0",
      name: "Check out my Github",
    },
    {
      href: "http://resume.j0w0.com",
      name: "View my Resume",
    },
  ];

  return (
    <aside className="">
      <h4 className="text-xl">Connect! 📬</h4>

      <div className="flex flex-wrap gap-2">
        {LINKS.map((link) => {
          return (
            <a
              key={link.name}
              href={link.href}
              className="
                no-underline
                border
                border-neutral-900
                rounded
                py-2
                px-4
                ring-amber-400
                text-neutral-900
                hover:bg-amber-400
                focus:outline-none
                focus:ring-2
                transition-all
              "
              target="_blank"
              rel="noreferrer"
            >
              {link.name} &raquo;
            </a>
          );
        })}
      </div>
    </aside>
  );
}
