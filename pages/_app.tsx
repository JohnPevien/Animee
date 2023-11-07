import '../styles/globals.css'
import { Poppins } from 'next/font/google'

import type { AppProps } from 'next/app'

import Navigation from '@components/navigation'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${poppins.style.fontFamily};
                }
            `}</style>
            <Navigation />
            <main
                className="relative flex flex-col mt-20 "
                data-scroll-container
            >
                <Component {...pageProps} />
            </main>
        </>
    )
}
