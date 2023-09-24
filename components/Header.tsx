type props = {
    headline: string
    subheading: string
}

export default function Header({ headline, subheading }: props) {
    const headlineParts = headline.split('*')
    return (
        <section className="bg-dark p-12 lg:pb-0 flex flex-row w-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5 mx-auto container">
                <div className="flex flex-col  items-center justify-center">
                    <h1 className="text-4xl lg:text-7xl  mb-8 font-bold">
                        {headlineParts.map((part, index) =>
                            index % 2 === 0 ? (
                                <>{part}</>
                            ) : (
                                <span key={index} className="text-primary">
                                    {part}
                                </span>
                            )
                        )}
                    </h1>
                    <h2 className="text-lg md:text-xl max-w-prose text-gray-600 font-semibold">
                        {subheading}
                    </h2>
                </div>
                <div>
                    <img
                        src="https://res.cloudinary.com/dka0kjngw/image/upload/v1673789400/ANIMEE/ANIMEE_-_Hero_swg2p0.png"
                        alt="anime header"
                        className="h-auto w-full object-cover drop-shadow-[0_0_15px_rgba(23,105,255,0.8)]"
                    />
                </div>
            </div>
        </section>
    )
}
