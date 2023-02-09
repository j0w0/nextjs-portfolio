import ButtonLink from "../ButtonLink/ButtonLink";

export default function Sidebar() {
  const LINKS = [
    {
      href: "https://www.github.com/j0w0",
      name: "Github",
    },
    {
      href: "http://resume.j0w0.com",
      name: "My Resume",
    },
  ];

  return (
    <aside>
      <h4>Connect with me</h4>

      <div className="flex flex-wrap gap-2">
        {LINKS.map((link) => {
          return (
            <ButtonLink
              key={link.name}
              href={link.href}
              text={link.name}
              internal={true}
            />
          );
        })}
      </div>
    </aside>
  );
}
