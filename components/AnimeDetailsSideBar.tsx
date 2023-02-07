import type { Anime } from '@type/index'

type Props = {
    anime: Anime.RootObject | undefined
}
function AnimeSideBar({ anime }: Props) {
    console.log(anime)
    return (
        <>
            <img
                src={anime?.data?.images.webp.large_image_url}
                alt={anime?.data?.title}
                className="h-auto w-full rounded-tr-md rounded-tl-md"
            />
            <div className="py-8 px-5">
                <div className="mb-5 sm:mb-8">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Titles
                    </p>

                    <div className="flex flex-col gap-1">
                        {anime?.data?.title.toLowerCase() !==
                            anime?.data?.title_english.toLowerCase() && (
                            <div className="flex flex-wrap flex-row gap-1">
                                <p className="font-display ">
                                    {anime?.data?.title}
                                </p>
                            </div>
                        )}
                        <div className="flex flex-row gap-2">
                            <p className="font-display font-medium">English:</p>
                            <p className="font-display ">
                                {anime?.data?.title_english}
                            </p>
                        </div>
                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">
                                Japanese:
                            </p>
                            <p className="font-display ">
                                {anime?.data?.title_japanese}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-5 sm:mb-8">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Information
                    </p>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Type:</p>
                            <p className="">{anime?.data?.type}</p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">
                                Episodes:
                            </p>
                            <p className="">{anime?.data?.episodes}</p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Status:</p>
                            <p className="">{anime?.data?.status}</p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">
                                Producers:
                            </p>
                            <div>
                                {anime?.data?.producers.map(
                                    (producer, index) => (
                                        <a
                                            href={producer.url}
                                            key={index}
                                            className="block text-primary"
                                        >
                                            {producer.name}
                                        </a>
                                    )
                                )}
                            </div>
                        </div>

                        {anime?.data?.licensors &&
                            anime?.data?.licensors?.length > 0 && (
                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Licensors:
                                    </p>
                                    <div>
                                        {anime?.data?.licensors.map(
                                            (producer, index) => (
                                                <a
                                                    href={producer.url}
                                                    key={index}
                                                    className="block text-primary"
                                                >
                                                    {producer.name}
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            )}

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Source:</p>
                            <p className="">{anime?.data?.source}</p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Genres:</p>
                            <div>
                                <ul>
                                    {anime?.data?.genres.map((genre, index) => (
                                        <li key={index}>
                                            <a
                                                href={genre.url}
                                                className="inline-block text-primary"
                                            >
                                                {genre.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Themes:</p>
                            <div>
                                <ul>
                                    {anime?.data?.themes.map((theme, index) => (
                                        <li key={index}>
                                            <a
                                                href={theme.url}
                                                className="inline-block text-primary"
                                            >
                                                {theme.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">
                                Duration:
                            </p>
                            <p className="">{anime?.data?.duration}</p>
                        </div>

                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Rating:</p>
                            <p className="">{anime?.data?.rating}</p>
                        </div>
                    </div>
                </div>

                <div className="mb-5 sm:mb-8">
                    <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                        Statistics
                    </p>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Score:</p>
                            <p className="">
                                {anime?.data?.score} scored by (
                                {anime?.data.scored_by} users)
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">Ranked:</p>
                            <p className="">#{anime?.data?.rank}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-wrap flex-row gap-1">
                            <p className="font-display font-medium">
                                Popularity:
                            </p>
                            <p className="">#{anime?.data?.popularity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AnimeSideBar
