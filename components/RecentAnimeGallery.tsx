import { useState, useRef, useEffect } from "react";
import type { RecentAnimeEpisodes } from "@type/index";

import Link from "next/link";

type Props = {
  data: RecentAnimeEpisodes.RootObject;
};

export default function RecentAnimeGallery({ data }: Props) {
  const [maxDisplay, setMaxDisplay] = useState(5);

  return (
    <section className="container">
      <div className="grid grid-auto-fit-xs gap-5 justify-items-center">
        {data.data.map((anime, index) => {
          if (anime.region_locked) return;
          return (
            <div className="flex flex-col gap-5 justify-between" key={index}>
              <div>
                <Link href={`/anime/${anime.entry.mal_id}`}>
                  <img
                    src={anime.entry.images.jpg.image_url}
                    alt={anime.entry.title}
                    className="h-auto sm:w-52 lg:w-64 hover:scale-110 object-cover transition-all duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="text-center">
                <h2 className="text-sm max-w-prose">{anime.entry.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className="btn-primary mx-auto"
        onClick={() => setMaxDisplay(maxDisplay + 5)}
      >
        Load More
      </button>
    </section>
  );
}
