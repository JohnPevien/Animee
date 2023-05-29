import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import TopAnimeGallery from '@components/TopAnimeGallery'
import RecentAnimeGallery from '@components/RecentAnimeGallery'
import type { RecentAnimeEpisodes, TopAnime } from 'shared/types'

import { HiArrowLongRight } from 'react-icons/hi2'

interface Props {
    topAnime: TopAnime.RootObject
    recentAnime: RecentAnimeEpisodes.RootObject
}

export default function Home({ topAnime, recentAnime }: Props) {
    return (
        <>
            <Head>
                <title>Animee | Home</title>
                <meta name="description" content="Top anime and manga." />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />

            <section className="px-5 py-12 ">
                <div className="flex flex-col justify-center items-center gap-12">
                    <h2 className="block text-4xl font-semibold text-white text-left  w-full">
                        <span className="gradient-heading">
                            Recent Episodes
                        </span>
                    </h2>

                    <RecentAnimeGallery data={recentAnime} />

                    <Link
                        href="/anime/recent"
                        className="flex flex-row justify-center items-center gap-3"
                    >
                        View All Recent Episodes <HiArrowLongRight />
                    </Link>
                </div>
            </section>
            <section className="px-5 py-12 ">
                <div className="flex flex-col justify-center items-center gap-12">
                    <h2 className="block text-4xl font-semibold text-white text-left w-full">
                        <span className="gradient-heading">Top Anime</span>
                    </h2>

                    <TopAnimeGallery data={topAnime} />

                    <Link
                        href="/anime/recent"
                        className="flex flex-row justify-center items-center gap-3"
                    >
                        View All Top Anime <HiArrowLongRight />
                    </Link>
                </div>
            </section>
        </>
    )
}

// getStaticProps jikan anime api
export async function getStaticProps() {
    const res = await fetch('https://api.jikan.moe/v4/top/anime')
    const topAnimedata: TopAnime.RootObject = await res.json()

    // sleep for 2 seconds to prevent api rate limit
    await new Promise((r) => setTimeout(r, 2000))

    //request recent anime
    const res2 = await fetch('https://api.jikan.moe/v4/watch/episodes')
    const recentAnimedata: RecentAnimeEpisodes.RootObject = await res2.json()

    return {
        props: { topAnime: topAnimedata, recentAnime: recentAnimedata },
    }
}
