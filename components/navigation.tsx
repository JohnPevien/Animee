import Link from "next/link";

type Props = {};
function navigation({}: Props) {
  return (
    <header className="fixed top-0 w-full p-5 backdrop-blur-xl  z-30">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className=" text-2xl uppercase">
          Animee
        </Link>
        <ul className="flex items-center ml-5">
          <li className="mr-5 text-lg">
            <Link href="/">Home</Link>
          </li>
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
export default navigation;
