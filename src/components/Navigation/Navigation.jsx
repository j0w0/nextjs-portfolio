import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import useWindowDimensions from "../../hooks/useWindowDimensions";

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

const Menu = ({ mobile = false, handleMobileMenuVisibility = null }) => {
  let menuBase = `list-none p-0 flex gap-1 text-base`;
  let linkBase = `no-underline hover:bg-inherit`;

  let menuClasses = `${menuBase} items-center flex-wrap`;
  let linkClasses = `${linkBase} p-2 hover:underline`;

  if (mobile) {
    menuClasses = `${menuBase} flex-col`;
    linkClasses = `${linkBase} py-2 block hover:text-amber-400 text-center`;
  }

  return (
    <menu className={menuClasses}>
      {PATHS.map((path) => {
        return (
          <li key={path.name}>
            <Link
              href={path.href}
              className={linkClasses}
              onClick={handleMobileMenuVisibility}
            >
              {path.name}
            </Link>
          </li>
        );
      })}
    </menu>
  );
};

export default function Navigation() {
  const { windowWidth, windowHeight } = useWindowDimensions();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const handleMobileMenuVisibility = () =>
    setMobileMenuVisible(!mobileMenuVisible);

  useEffect(() => {
    if (windowWidth > 767) setMobileMenuVisible(false);
  }, [windowWidth]);

  return (
    <nav>
      {windowWidth > 767 ? (
        <Menu handleMobileMenuVisibility={handleMobileMenuVisibility} />
      ) : (
        <>
          <FontAwesomeIcon
            icon={faBars}
            className="cursor-pointer"
            onClick={handleMobileMenuVisibility}
            size="2x"
          />
          <div
            className={`
            fixed
            top-0
            ${mobileMenuVisible ? `right-0` : `right-[-250px]`}
            w-[240px]
            h-screen
            z-50
          bg-neutral-900
          text-white
            p-5
            flex
            flex-col
            space-y-5
            duration-300
            drop-shadow
          `}
          >
            <div className="flex flex-row items-center justify-between border-b border-amber-400 pb-4">
              <Link
                href="/"
                className="font-bold no-underline hover:text-amber-400 hover:bg-inherit"
                onClick={handleMobileMenuVisibility}
              >
                j0w0
              </Link>
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer"
                onClick={handleMobileMenuVisibility}
                size="xl"
              />
            </div>
            <Menu
              mobile={true}
              handleMobileMenuVisibility={handleMobileMenuVisibility}
            />
          </div>
        </>
      )}
    </nav>
  );
}
