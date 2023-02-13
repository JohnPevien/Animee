import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { Anime, AnimeCharacters } from '@type/index'
import Link from 'next/link'

import { HiArrowLeft } from 'react-icons/hi'

import AnimeDetailsSideBar from '@components/AnimeDetailsSideBar'
import AnimeDetailsMain from '@components/AnimeDetailsMain'

type Props = {}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function Anime({}: Props) {
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

    useEffect(() => {
        // if (error || !animeData) {
        //     router.push('/404')
        // }
    }, [error, router])

    if (isLoading) return <div>Loading...</div>

    return (
        <section className="container mx-auto mb-20 sm:mt-10 p-5 md:p-0">
            <Link
                href="/"
                className="btn-primary flex flex-row items-center w-fit gap-1"
            >
                <HiArrowLeft />
                Back
            </Link>

            <h1 className="text-4xl py-5 gradient-heading font-display font-medium sm:mt-10 mb-8">
                {data?.data?.title}
            </h1>
            <div className="flex flex-col-reverse md:flex-row gap-12 ">
                <div className=" w-full md:w-1/2 lg:w-3/4">
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
