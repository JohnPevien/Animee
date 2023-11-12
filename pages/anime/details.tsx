import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { Anime, AnimeCharacters } from '@type/index'
import Link from 'next/link'

import { HiArrowLeft } from 'react-icons/hi'

import AnimeDetailsSideBar from '@components/AnimeDetails/AnimeDetailsSideBar'
import AnimeDetailsMain from '@components/AnimeDetails/AnimeDetailsMain'

type Props = {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Anime({}: Props) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const LocomotiveScroll = require('locomotive-scroll').default

            const scroll = new LocomotiveScroll({
                el: document.querySelector('[data-scroll-container]'),
            })

            return () => scroll.destroy()
        }
    }, [])

    const router = useRouter()
    const { id } = router.query

    const { data, error, isLoading } = useSWR<Anime.RootObject>(
        `https://api.jikan.moe/v4/anime/${id}/full`,
        fetcher
    )

    const characterRequest = useSWR<AnimeCharacters.RootObject>(
        `https://api.jikan.moe/v4/anime/${id}/characters`,
        fetcher
    )

    const characterData = characterRequest?.data
    if (error) return <div>Failed to load</div>
    if (isLoading) return <div>Loading...</div>

    return (
        <section
            className="container mx-auto mb-20 sm:mt-10 p-5 md:p-0"
            data-scroll-container
        >
            <Link
                href="/"
                className="btn-primary flex flex-row items-center w-fit gap-1 mb-10 md:mb-16"
            >
                <HiArrowLeft />
                Back
            </Link>

            <div
                className="flex flex-col-reverse md:flex-row gap-12 "
                data-scroll-section
            >
                <div className=" w-full md:w-1/2 lg:w-3/4" data-scroll>
                    <h1 className="text-4xl gradient-heading font-display font-medium mb-2">
                        {data?.data?.title_english
                            ? data.data.title_english
                            : data?.data?.title}
                    </h1>
                    {data?.data?.title && (
                        <h2 className="text-xl gradient-heading font-display mb-10 pb-2">
                            ({data?.data?.title})
                        </h2>
                    )}
                    {data && !characterRequest?.isLoading && characterData && (
                        <AnimeDetailsMain
                            anime={data}
                            characters={characterData}
                        />
                    )}
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 bg-slate-900 h-full rounded-md">
                    {data && <AnimeDetailsSideBar anime={data} />}
                </div>
            </div>
        </section>
    )
}
export default Anime
