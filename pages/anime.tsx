import useSWR from 'swr'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { Anime } from '@type/index'
import Link from 'next/link'

import { HiArrowLeft } from 'react-icons/hi'

import AnimeSideBar from '@components/AnimeDetailsSideBar'

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

            <h1 className="text-4xl py-5 gradient-heading font-display font-medium sm:mt-10 mb-8">
                {data?.data?.title}
            </h1>
            <div className="flex flex-col sm:flex-row gap-12">
                <div className="w-3/4">
                    <div className="mb-5 md:mb-12">
                        <div className="flex flex-col gap-4">
                            <p className="border-b-2 border-primary mb-2 font-display font-semibold gradient-heading sm:text-xl">
                                Details
                            </p>

                            <div className="flex flex-row gap-4 items-stretch rounded bg-primary min-h-[75px] w-fit">
                                <div className="flex flex-wrap flex-row gap-4 items-center px-4  ">
                                    <p className="font-medium text-xl">Score</p>
                                    <p className="text-2xl font-bold">
                                        {data?.data?.score}
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
                            <p className="max-w-prose">
                                {data?.data?.synopsis}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/4 bg-slate-900 h-full rounded-md">
                    <AnimeSideBar anime={data} />
                </div>
            </div>
        </section>
    )
}
export default Anime
