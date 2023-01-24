import type { TopAnime } from "@type/index";

import Link from "next/link";

type Props = {
  data: TopAnime.RootObject;
};

export default function TopAnimeGallery({ data }: Props) {
  console.log(data.data[0], "TopAnimeGallery.tsx");
  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full grid grid-auto-fit-xs gap-0 justify-items-center">
          {data.data.map((anime, index) => {
            if (index > 15) return;
            return (
              <div
                className="flex flex-col gap-5 items-center  px-4 w-fit-content "
                key={index}
              >
                <div>
                  <Link href={`/anime/${anime.mal_id}`}>
                    <img
                      src={anime.images.webp.large_image_url}
                      alt={anime.title_english}
                      className="h-auto sm:w-40 max-h-[225px]  hover:scale-110 object-cover transition-all duration-300 ease-in-out"
                    />
                  </Link>
                </div>
                <div className="text-center">
                  <h2 className="text-md max-w-prose text-slate-100">
                    {anime.title}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
