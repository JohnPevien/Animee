import Link from "next/link";

type Props = {};
function navigation({}: Props) {
  return (
    <header className="fixed top-0 w-full p-5 bg-slate-900  backdrop-blur-xl shadow text-white">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className=" text-2xl uppercase">
          Animee
        </Link>
        <ul className="flex items-center ml-5">
          <li className="mr-5">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-5">
            <Link href="/anime">Anime</Link>
          </li>
          <li className="mr-5">
            <Link href="/manga">Manga</Link>
          </li>
          <li className="mr-5 text-slate-900 bg-slate-200 hover:bg-slate-300 rounded-xl px-4 py-1">
            <Link href="/search">Search</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default navigation;
