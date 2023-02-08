import type { Anime } from '@type/index'

type Props = {
    anime: Anime.RootObject | undefined
}
function AnimeDetailsMain({ anime }: Props) {
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
        </>
    )
}
export default AnimeDetailsMain
