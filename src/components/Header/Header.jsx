import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={`${styles.header} bg-indigo-900 text-white`}>
      <Link href="/" className="font-secondary text-2xl">
        Josh Woodcock
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/work">work</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
