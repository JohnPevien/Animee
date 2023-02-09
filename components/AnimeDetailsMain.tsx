import type { Anime, AnimeCharacters } from '@type/index'
import useSWR from 'swr'
import { Splide, SplideSlide } from '@splidejs/react-splide'

import '@splidejs/react-splide/css/skyblue'

type Props = {
    anime: Anime.RootObject | undefined
    characters: AnimeCharacters.RootObject | undefined
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function AnimeDetailsMain({ anime, characters }: Props) {
    return (
        <>
            <div className="mb-5 md:mb-12">
                <div className="flex flex-col gap-4">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Details
                    </p>

                    <div className="flex flex-row gap-4 items-stretch rounded bg-primary min-h-[75px] w-fit">
                        <div className="flex flex-wrap flex-row gap-4 items-center px-4  ">
                            <p className="font-medium text-xl">Score</p>
                            <p className="text-2xl font-bold">
                                {anime?.data?.score}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mb-5 md:mb-12">
                <div className="flex flex-col gap-4">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Synopsis
                    </p>
                    <p className="max-w-prose">{anime?.data?.synopsis}</p>
                </div>
            </div>

            <div className="mb-5 md:mb-12">
                <div className="flex flex-col gap-4">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Characters
                    </p>
                    {characters && (
                        <Splide
                            options={{
                                gap: '1rem',
                                rewind: true,
                                drag: false,
                                reduceMotion: true,
                                perPage: 5,
                                breakpoints: {
                                    768: {
                                        perPage: 3,
                                    },
                                },
                            }}
                        >
                            {characters?.data?.map((character) => (
                                <SplideSlide key={character?.character?.mal_id}>
                                    <img
                                        src={
                                            character?.character?.images?.webp
                                                ?.image_url
                                        }
                                        alt={`image of character ${character?.character?.name}`}
                                        className="object-fit w-40 h-auto rounded-md"
                                    />
                                </SplideSlide>
                            ))}
                        </Splide>
                    )}
                </div>
            </div>
        </>
    )
}

export default AnimeDetailsMain
