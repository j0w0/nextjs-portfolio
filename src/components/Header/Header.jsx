import Link from "next/link";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Logo from "../../../public/web-logo.svg";

export default function Header() {
  return (
    <header
      className={`
      bg-amber-400
      text-neutral-900
        px-4
        py-1
        flex
        justify-between
        items-center
        fixed
        w-full
        shadow
        drop-shadow
        z-10
        site-header
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
        <h1 className="text-lg leading-none tracking-tight text-neutral-900">
          Josh Woodcock
          <br />
          Front-End Developer
        </h1>
      </Link>
      <Navigation />
    </header>
  );
}
