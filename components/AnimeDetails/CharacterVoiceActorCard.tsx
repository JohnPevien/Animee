import React from 'react'
import Image from 'next/image'
import type { AnimeCharacters } from '@type/index'

type Props = {
    group: {
        character: AnimeCharacters.Character
        voiceActor: AnimeCharacters.Person
    }
}

const CharacterVoiceActorCard = ({
    group: { character, voiceActor },
}: Props) => (
    <div className="inline-grid grid-cols-2 bg-slate-900 ">
        <div className="flex gap-2">
            {character?.images?.jpg?.image_url ? (
                <Image
                    src={character.images.jpg.image_url}
                    width={80}
                    height={50}
                    alt={character?.name}
                />
            ) : (
                <div
                    className="flex h-[50px] w-[80px] items-center justify-center bg-slate-700 text-xs text-slate-300"
                    aria-label={character?.name ?? 'No character image'}
                >
                    {(character?.name ?? '?').charAt(0)}
                </div>
            )}
            <div className="flex flex-col justify-center">
                <a
                    className="text-xs"
                    href={character?.url}
                    target="_blank"
                    rel="noreferrer"
                >
                    {character?.name}
                </a>
            </div>
        </div>
        <div className="flex gap-2  flex-row-reverse">
            {voiceActor?.images?.jpg?.image_url ? (
                <Image
                    src={voiceActor.images.jpg.image_url}
                    width={80}
                    height={50}
                    alt={voiceActor?.name}
                />
            ) : (
                <div
                    className="flex h-[50px] w-[80px] items-center justify-center bg-slate-700 text-xs text-slate-300"
                    aria-label={voiceActor?.name ?? 'No voice actor image'}
                >
                    {(voiceActor?.name ?? '?').charAt(0)}
                </div>
            )}

            <div className="flex flex-col justify-center">
                <a
                    href={voiceActor?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs"
                >
                    {voiceActor?.name}
                </a>
            </div>
        </div>
    </div>
)

export default CharacterVoiceActorCard
