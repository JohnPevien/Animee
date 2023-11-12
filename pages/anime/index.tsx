import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
import TopAnimeGallery from '@components/AnimeIndex/TopAnimeGallery'
import RecentAnimeGallery from '@components/AnimeIndex/RecentAnimeGallery'
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
            <Header
                headline="*Anime* for the *Adventurous*"
                subheading="Dive into a universe of color, action, and endless possibilities."
            />
            <div className="container">
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
            </div>
        </>
    )
}

// getStaticProps jikan anime api
export async function getStaticProps() {
    try {
        const topAnimeRes = await fetch('https://api.jikan.moe/v4/top/anime')
        if (!topAnimeRes.ok) {
            throw new Error('Top Anime API request failed')
        }
        const topAnimedata = await topAnimeRes.json()

        // Wait for 2 seconds before the next request
        await new Promise((resolve) => setTimeout(resolve, 2000))

        const recentAnimeRes = await fetch(
            'https://api.jikan.moe/v4/watch/episodes'
        )
        if (!recentAnimeRes.ok) {
            throw new Error('Recent Anime API request failed')
        }
        const recentAnimedata = await recentAnimeRes.json()

        return {
            props: { topAnime: topAnimedata, recentAnime: recentAnimedata },
        }
    } catch (error) {
        console.error(error)
        return {
            props: { topAnime: null, recentAnime: null },
        }
    }
}
