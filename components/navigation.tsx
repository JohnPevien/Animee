import { useState, useEffect } from "react";
import Link from "next/link";

type Props = {};
export default function Navigation({}: Props) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header
      className={`fixed transition-all ease-in-out duration-300  w-full p-5 backdrop-blur-xl  z-30 ${
        scrolled ? "border-b top-0" : "-top-32"
      }`}
    >
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className=" text-2xl uppercase font-bold">
          Animee
        </Link>
        <ul className="flex items-center ml-5">
          <li className="mr-5 text-lg">
            <Link href="/anime">Anime</Link>
          </li>
          <li className="mr-5 text-lg">
            <Link href="/manga">Manga</Link>
          </li>
          <li className="mr-5 text-lg ">
            <Link href="/search" className="btn-primary">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
