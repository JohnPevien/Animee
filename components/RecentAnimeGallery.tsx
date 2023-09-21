import type { RecentAnimeEpisodes } from '@type/index'

import Link from 'next/link'

type Props = {
    data: RecentAnimeEpisodes.RootObject
}

export default function RecentAnimeGallery({ data }: Props) {
    return (
        <section className="container">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full grid grid-auto-fit-sm gap-x-0 gap-y-10 justify-items-center">
                    {data.data.map((anime, index) => {
                        if (index > 15) return
                        return (
                            <div
                                className="flex flex-col gap-2 items-center  px-4 w-fit-content "
                                key={index}
                            >
                                <div>
                                    <Link
                                        href={`/anime/details?id=${anime.entry.mal_id}`}
                                    >
                                        <img
                                            src={
                                                anime.entry.images.webp
                                                    .large_image_url
                                            }
                                            alt={anime.entry.title}
                                            className="h-auto w-full max-h-[300px] object-cover transition-all duration-300 ease-in-out hover:drop-shadow-lg"
                                        />
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-md max-w-[20ch] whitespace-nowrap  text-slate-100 overflow-hidden  text-ellipsis">
                                        {anime.entry.title}
                                    </h2>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
