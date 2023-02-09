import type { RecentAnimeEpisodes } from '@type/index'
import { limitCharacters } from '@common/helpers'

import Link from 'next/link'

type Props = {
    data: RecentAnimeEpisodes.RootObject
}

export default function RecentAnimeGallery({ data }: Props) {
  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full grid grid-auto-fit-xs gap-y-5 justify-items-center">
          {data.data.map((anime, index) => {
            if (index > 15) return;
            return (
              <div
                className="flex flex-col gap-3 items-center  px-4 w-fit-content "
                key={index}
              >
                <div>
                  <Link href={`/anime/?id=${anime.entry.mal_id}`}>
                    <img
                      src={anime.entry.images.webp.large_image_url}
                      alt={anime.entry.title}
                      className="h-auto sm:w-40 max-h-[225px]  hover:scale-110 object-cover transition-all duration-300 ease-in-out hover:drop-shadow-lg drop-shadow-slate-100"
                    />
                  </Link>
                </div>
            </div>
        </section>
    )
}
