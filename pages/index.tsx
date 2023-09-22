import Head from 'next/head'
import Link from 'next/link'
import Header from '@components/Header'
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
            <div className="container"></div>
        </>
    )
}
