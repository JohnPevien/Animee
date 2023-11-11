import { useState } from 'react'
import type { Anime, AnimeCharacters } from '@type/index'
import CharacterVoiceActorCard from '@components/AnimeDetails/CharacterVoiceActorCard'

type Props = {
    anime: Anime.RootObject | undefined
    characters: AnimeCharacters.RootObject | undefined
}

function AnimeDetailsMain({ anime, characters }: Props) {
    const characterVoiceActorGroups = characters?.data?.map((character) => {
        return {
            character: character?.character,
            voiceActor: character?.voice_actors.filter(
                (actor) => actor.language === 'Japanese'
            )[0]?.person,
        }
    })

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
                        Characters & Voice Actors
                    </p>
                    {characterVoiceActorGroups && (
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5">
                            {characterVoiceActorGroups.map((group, index) => (
                                <CharacterVoiceActorCard
                                    group={group}
                                    key={index}
                                />
                            ))}
                        </div>
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
