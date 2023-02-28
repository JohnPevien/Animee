import type { TopAnime } from '@type/index'

import Link from 'next/link'

type Props = {
    data: TopAnime.RootObject
}

export default function TopAnimeGallery({ data }: Props) {
    return (
        <section className="container">
            <div className="flex flex-col sm:flex-row">
                <div className="w-full grid grid-auto-fit-sm gap-x-0 gap-y-10 justify-items-center">
                    {data.data.map((anime, index) => {
                        if (index > 15) return
                        return (
                            <div
                                className="flex flex-col gap-2 items-center px-4 w-fit-content "
                                key={index}
                            >
                                <div>
                                    <Link href={`/anime/?id=${anime.mal_id}`}>
                                        <img
                                            src={
                                                anime.images.webp
                                                    .large_image_url
                                            }
                                            alt={anime.title_english}
                                            className="h-auto w-full max-h-[300px] object-cover transition-all duration-300 ease-in-out"
                                        />
                                    </Link>
                                    <div className="bg-primary px-2"></div>
                                </div>
                                <div className="text-center">
                                    <h2 className="text-md max-w-[20ch] whitespace-nowrap text-slate-100 overflow-hidden  text-ellipsis">
                                        {anime.title}
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
