import Head from "next/head";
import Link from "next/link";
import type { Anime } from "@type/anime";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";

export default function Home({ data }: { data: Anime.RootObject }) {
  return (
    <>
      <Head>
        <title>Animee | Home</title>
        <meta name="description" content="Top anime and manga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-12 pb-0 flex flex-row  container mx-auto lg:h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 ">
          <div className="flex flex-col mr-12 items-center justify-center">
            <h1 className="text-5xl leading-tight mb-8 font-bold">
              Explore the World of <span className="text-primary">Anime</span> -
              Discover Your Next <span className="text-primary">Favorite </span>
              Series
            </h1>
            <h2 className="text-xl max-w-prose text-slate-400">
              Browse extensive collection of anime titles, from classic
              favorites to the latest releases, and find the perfect show to
              watch next.
            </h2>
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/dka0kjngw/image/upload/v1673789400/ANIMEE/ANIMEE_-_Hero_swg2p0.png"
              alt="anime header"
              className="h-auto w-full object-cover backdrop-blur-xl"
            />
          </div>
        </div>
      </section>
      <section className="p-12">
        <div className="flex flex-row justify-center">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
            grabCursor={true}
            // Swiper styles
            className="max-w-xl h-auto lg:h-80 bg-white shadow-2xl bg-transparent backdrop-blur-xl rounded-xl"
          >
            {data.data.map((anime, index) => {
              if (index > 10) return null;

              return (
                <SwiperSlide key={anime.mal_id} className="bg-transparent">
                  <div className="flex flex-row gap-5">
                    <div className="w-1/2  min-w-[14rem] relative">
                      <img
                        src={anime.images.jpg.image_url}
                        alt={anime.title}
                        className=" h-auto object-cover"
                      />
                    </div>
                    <div className="grow px-5 py-5">
                      <p className="text-2xl font-semibold mb-3">
                        {anime.title}
                      </p>
                      <p className="mb-5 md:mb-12">
                        {anime.synopsis.slice(0, 155)}...{" "}
                      </p>
                      <div className="text-right">
                        <Link
                          href={`/anime/${anime.mal_id}`}
                          className="bg-slate-800 text-white py-2 px-4 rounded-md hover:scale-105 transform transition duration-300 ease-in-out"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

// getStaticProps jikan anime api
export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await res.json();

  // randomize order of anime
  data.data.sort(() => Math.random() - 0.5);

  return {
    props: { data },
  };
}
