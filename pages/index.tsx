import Head from "next/head";
import Link from "next/link";
import TopAnimeGallery from "@components/TopAnimeGallery";
import RecentAnimeGallery from "@components/RecentAnimeGallery";
import type { RecentAnimeEpisodes, TopAnime } from "shared/types";

import { HiArrowLongRight } from "react-icons/hi2";

interface Props {
  topAnime: TopAnime.RootObject;
  recentAnime: RecentAnimeEpisodes.RootObject;
}

export default function Home({ topAnime, recentAnime }: Props) {
  return (
    <>
      <Head>
        <title>Animee | Home</title>
        <meta name="description" content="Top anime and manga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-dark p-12 pb-0 flex flex-row w-full ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mx-auto container">
          <div className="flex flex-col mr-12 items-center justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl  mb-8 font-bold">
              Explore the World of <span className="text-primary">Anime</span> -
              Discover Your Next <span className="text-primary">Favorite </span>
              Series
            </h1>
            <h2 className=" text-2xl sm:text-xl max-w-prose text-gray-600 font-semibold">
              Browse extensive collection of anime titles, from classic
              favorites to the latest releases, and find the perfect show to
              watch next.
            </h2>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dka0kjngw/image/upload/v1673789400/ANIMEE/ANIMEE_-_Hero_swg2p0.png"
              alt="anime header"
              className="h-auto w-full object-cover drop-shadow-[0_0_15px_rgba(23,105,255,0.8)]"
            />
          </div>
        </div>
      </section>
      <section className="p-5 lg:p-24">
        <div className="flex flex-col justify-center items-center gap-12">
          <h2 className="block text-4xl font-semibold text-white text-left  w-full">
            <span className="gradient-heading">Recent Episodes</span>
          </h2>

          <RecentAnimeGallery data={recentAnime} />

          <Link
            href="/anime/recent"
            className="flex flex-row justify-center items-center gap-3"
          >
            View All Recent Episodes <HiArrowLongRight />
          </Link>
        </div>
      </section>
      <section className="p-5 lg:p-24">
        <div className="flex flex-col justify-center items-center gap-12">
          <h2 className="block text-4xl font-semibold text-white text-left w-full">
            <span className="gradient-heading">Top Anime</span>
          </h2>

          <TopAnimeGallery data={topAnime} />

          <Link
            href="/anime/recent"
            className="flex flex-row justify-center items-center gap-3"
          >
            View All Top Anime <HiArrowLongRight />
          </Link>
        </div>
      </section>
    </>
  );
}

// getStaticProps jikan anime api
export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const topAnimedata: TopAnime.RootObject = await res.json();

  // sleep for 2 seconds to prevent api rate limit
  await new Promise((r) => setTimeout(r, 2000));

  //request recent anime
  const res2 = await fetch("https://api.jikan.moe/v4/watch/episodes");
  const recentAnimedata: RecentAnimeEpisodes.RootObject = await res2.json();

  return {
    props: { topAnime: topAnimedata, recentAnime: recentAnimedata },
  };
}
