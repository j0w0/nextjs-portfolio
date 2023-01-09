import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">j0w0</Link>
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
