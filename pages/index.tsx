import Head from "next/head";
import type { Anime } from "@type/anime";

export default function Home({ data }: { data: Anime.RootObject }) {
  return (
    <>
      <Head>
        <title>Animee | Home</title>
        <meta name="description" content="Top anime and manga." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="p-5 flex flex-row  container mx-auto">
        <div className="flex flex-col mr-12 ">
          <h1 className="text-6xl mb-8">
            Explore the World of Anime - Discover Your Next Favorite Series
          </h1>
          <h2 className="text-xl max-w-prose">
            Browse extensive collection of anime titles, from classic favorites
            to the latest releases, and find the perfect show to watch next.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {data.data.map((anime, index) => {
            if (index > 4) return null;

            return (
              <div
                key={anime.mal_id}
                className="bg-transparent border-2 border-slate-800 backdrop-blur-xl text-white backdro-blur-xl opacity-50 shadow-xl hover:opacity-90 cursor-pointer"
              >
                <div>
                  <img
                    src={anime.images.jpg.image_url}
                    alt={anime.title}
                    className="w-auto h-52 object-cover"
                  />
                </div>

                <div className="p-5">
                  <h2 className="text-2xl">{anime.title}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

// getStaticProps jikan anime api
export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime");
  const data = await res.json();
  return {
    props: { data },
  };
}
