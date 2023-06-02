import type { Anime, AnimeCharacters } from '@type/index'

import Image from 'next/image'

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
                        Characters And Cast
                    </p>

                    <div className="flex flex-row overflow-x-auto gap-5 md:gap-8">
                        {characters && (
                            <>
                                {characters?.data?.map((character) => (
                                    <div
                                        className="flex flex-col "
                                        key={character?.character?.mal_id}
                                    >
                                        <div className="mb-12 bg-slate-900 rounded-lg w-max-content">
                                            <div className="relative w-full h-52 ">
                                                <Image
                                                    src={
                                                        character?.character
                                                            ?.images?.webp
                                                            ?.image_url
                                                    }
                                                    alt={`image of character ${character?.character?.name}`}
                                                    className="rounded-tr-lg rounded-tl-lg object-cover object-center"
                                                    fill
                                                />
                                            </div>

                                            <div className="px-10 py-2">
                                                <h3 className="text-sm text-center">
                                                    {character?.character?.name}
                                                </h3>
                                                <p className="text-center text-xs">
                                                    {character?.role}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-12 bg-slate-900 rounded-lg w-max-content">
                                            <div className="relative w-full h-52">
                                                <Image
                                                    src={
                                                        character
                                                            ?.voice_actors[0]
                                                            ?.person?.images
                                                            ?.jpg?.image_url
                                                    }
                                                    alt={`image of voice actor ${character?.voice_actors[0]?.person?.name}`}
                                                    className="rounded-tr-lg rounded-tl-lg object-cover object-center"
                                                    fill
                                                />
                                            </div>

                                            <div className="px-10 py-2">
                                                <h3 className="text-sm text-center">
                                                    {
                                                        character
                                                            ?.voice_actors[0]
                                                            ?.person?.name
                                                    }
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    {/* {characters && (
                        <Splide
                            options={{
                                gap: '1rem',
                                rewind: true,
                                drag: false,
                                reduceMotion: true,
                                autoWidth: false,
                                slidesPerView: 1,
                                perPage: 2,
                                breakpoints: {
                                    640: {
                                        perPage: 1,
                                    },
                                },
                            }}
                        >
                            {characters?.data?.map((character) => (
                                <SplideSlide
                                    key={character?.character?.mal_id}
                                    className=" flex flex-row gap-5 bg-slate-900"
                                >
                                    <div className="flex flex-col gap-2 my-12 p-3 items-center justify-center">
                                        <img
                                            src={
                                                character?.character?.images
                                                    ?.webp?.image_url
                                            }
                                            alt={`image of character ${character?.character?.name}`}
                                            className="object-cover  h-auto md:w-36 "
                                        />
                                        <div>
                                            <h2 className="font-semibold text-center">
                                                {character?.character?.name}
                                            </h2>
                                            <p className="text-center">
                                                {character?.role}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 my-12 p-3 rounded items-center">
                                        <img
                                            src={
                                                character?.voice_actors[0]
                                                    ?.person?.images?.jpg
                                                    ?.image_url
                                            }
                                            alt={`image of character ${character?.character?.name}`}
                                            className="object-cover md:w-36 h-auto"
                                        />
                                        <div>
                                            <h2 className="font-semibold text-center">
                                                {
                                                    character?.voice_actors[0]
                                                        ?.person?.name
                                                }
                                            </h2>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    )} */}
                </div>
            </div>

            <div className="mb-5 md:mb-12">
                <div className="flex flex-col gap-4">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Trailer
                    </p>
                    <div>
                        {anime?.data?.trailer.youtube_id && (
                            <div className="relative w-full pb-[56.25%]">
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
