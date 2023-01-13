import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/web-logo.svg";

const PATHS = [
  {
    href: "/about",
    name: "about",
  },
  {
    href: "/work",
    name: "work",
  },
  {
    href: "/contact",
    name: "contact",
  },
];

export default function Header() {
  return (
    <header className="bg-amber-400 px-4 py-1 flex justify-between items-center">
      <Link href="/" className="no-underline flex items-center gap-1">
        <Image
          src={Logo}
          className="w-10 h-10"
          alt="Josh Woodcock, Front-End Developer"
        />
        <h1 className="text-lg leading-none">
          Josh Woodcock
          <br />
          Front-End Developer
        </h1>
      </Link>
      <nav>
        <menu className="list-none p-0 flex items-center flex-wrap gap-1 text-base">
          {PATHS.map((path) => {
            return (
              <li key={path.name}>
                <Link
                  href={path.href}
                  className="no-underline p-2 hover:underline"
                >
                  {path.name}
                </Link>
              </li>
            );
          })}
        </menu>
      </nav>
    </header>
  );
}
