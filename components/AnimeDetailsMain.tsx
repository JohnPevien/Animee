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
                    <p className="sm:text-lg">{anime?.data?.synopsis}</p>
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
                                autoWidth: false,
                                // perPage: 3,
                                // breakpoints: {
                                //     768: {
                                //         perPage: 2,
                                //     },
                                // },
                            }}
                        >
                            {characters?.data?.map((character) => (
                                <SplideSlide
                                    key={character?.character?.mal_id}
                                    className="flex flex-col gap-2 my-12 border-2 border-slate-900 rounded-md max-w-[200px] pb-3"
                                >
                                    <img
                                        src={
                                            character?.character?.images?.webp
                                                ?.image_url
                                        }
                                        alt={`image of character ${character?.character?.name}`}
                                        className="object-cover w-full h-auto"
                                    />
                                    <div className="text-center">
                                        <h2 className="font-semibold">
                                            {character?.character?.name}
                                        </h2>
                                        <p>{character?.role}</p>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    )}
                </div>
            </div>

            <div className="mb-5 md:mb-12">
                <div className="flex flex-col gap-4">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Trailer
                    </p>
                    <div>
                        {anime?.data?.trailer.youtube_id && (
                            <div className="relative md:w-2/3 pb-[56.25%]">
                                <iframe
                                    width="100%"
                                    height="auto"
                                    src={`https://www.youtube.com/embed/${anime?.data?.trailer.youtube_id}?modestbranding=1`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                    allowFullScreen
                                    className="absolute top-0 left-0 w-full h-full "
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnimeDetailsMain
