import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../public/web-logo.svg";

export default function Header() {
  return (
    <header
      className={`
      bg-amber-400
        px-4
        py-1
        flex
        justify-between
        items-center
        sticky
        top-0
        shadow
        drop-shadow
        z-10
      `}
    >
      <Link
        href="/"
        className="no-underline flex items-center gap-1 hover:text-inherit"
      >
        <Image
          src={Logo}
          className="w-10 h-10"
          alt="Josh Woodcock, Front-End Developer"
        />
        <h1 className="text-lg leading-none tracking-tight">
          Josh Woodcock
          <br />
          Front-End Developer
        </h1>
      </Link>
      <Navigation />
    </header>
  );
}
