import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { Anime } from '@type/index'
import Link from 'next/link'

import { HiArrowLeft } from 'react-icons/hi'

type Props = {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Anime({}: Props) {
    const router = useRouter()
    const { id } = router.query

    const { data, error, isLoading } = useSWR<Anime.RootObject>(
        `https://api.jikan.moe/v4/anime/${id}/full`,
        fetcher
    )

    console.log(data)
    useEffect(() => {
        // if (error || !animeData) {
        //     router.push('/404')
        // }
    }, [error, router])

    if (isLoading) return <div>Loading...</div>

    return (
        <section className="container mx-auto mb-20 sm:mt-10">
            <Link
                href="/"
                className="btn-primary flex flex-row items-center w-fit gap-1"
            >
                <HiArrowLeft />
                Back
            </Link>

            <h1 className="text-4xl py-5 gradient-heading font-display font-medium sm:mt-10">
                {data?.data?.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-12">
                <div className="w-1/4 bg-slate-900 h-full rounded-md">
                    <img
                        src={data?.data?.images.webp.large_image_url}
                        alt={data?.data?.title}
                        className="h-auto w-full rounded-tr-md rounded-tl-md"
                    />
                    <div className="py-8 px-5">
                        <div className="mb-5">
                            <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                                Titles
                            </p>

                            <div className="flex flex-col gap-1">
                                {data?.data?.title.toLowerCase() !==
                                    data?.data?.title_english.toLowerCase() && (
                                    <div className="flex flex-wrap flex-row gap-1">
                                        <p className="font-display ">
                                            {data?.data?.title}
                                        </p>
                                    </div>
                                )}
                                <div className="flex flex-row gap-2">
                                    <p className="font-display font-medium">
                                        English:
                                    </p>
                                    <p className="font-display ">
                                        {data?.data?.title_english}
                                    </p>
                                </div>
                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Japanese:
                                    </p>
                                    <p className="font-display ">
                                        {data?.data?.title_japanese}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                                Information
                            </p>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Type:
                                    </p>
                                    <p className="">{data?.data?.type}</p>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Episodes:
                                    </p>
                                    <p className="">{data?.data?.episodes}</p>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Status:
                                    </p>
                                    <p className="">{data?.data?.status}</p>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Producers:
                                    </p>
                                    <div>
                                        {data?.data?.producers.map(
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

                                {data?.data?.licensors &&
                                    data?.data?.licensors?.length > 0 && (
                                        <div className="flex flex-wrap flex-row gap-1">
                                            <p className="font-display font-medium">
                                                Licensors:
                                            </p>
                                            <div>
                                                {data?.data?.licensors.map(
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
                                    <p className="font-display font-medium">
                                        Source:
                                    </p>
                                    <p className="">{data?.data?.source}</p>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Genres:
                                    </p>
                                    <div>
                                        {data?.data?.genres.map(
                                            (genre, index) => (
                                                <>
                                                    <a
                                                        href={genre.url}
                                                        key={index}
                                                        className="inline-block text-primary"
                                                    >
                                                        {genre.name}
                                                    </a>
                                                    {', '}
                                                </>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Themes:
                                    </p>
                                    <div>
                                        {data?.data?.themes.map(
                                            (theme, index) => (
                                                <>
                                                    <a
                                                        href={theme.url}
                                                        key={index}
                                                        className="inline-block text-primary"
                                                    >
                                                        {theme.name}
                                                    </a>
                                                    {', '}
                                                </>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Duration:
                                    </p>
                                    <p className="">{data?.data?.duration}</p>
                                </div>

                                <div className="flex flex-wrap flex-row gap-1">
                                    <p className="font-display font-medium">
                                        Rating:
                                    </p>
                                    <p className="">{data?.data?.rating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-3/4"></div>
            </div>
        </section>
    )
}
export default Anime
