import { useRef } from "react";

import type { Anime } from "@type/anime";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

type Props = {
  data: Anime.RootObject;
};
export default function MarqueeGallery({ data }: Props) {
  const leftButton = useRef<HTMLButtonElement>(null);
  const rightButton = useRef<HTMLButtonElement>(null);

  return (
    <section className="">
      <div className="relative">
        <button
          ref={leftButton}
          className=" absolute top-1/2 -translate-y-1/2 -left-16 z-index-10"
        >
          <HiArrowLeftCircle size={40} color={"#d74cf6"} />
        </button>
        <button
          ref={rightButton}
          className="text-xl absolute top-1/2 -translate-y-1/2 -right-16 z-index-10"
        >
          <HiArrowRightCircle size={40} color={"#d74cf6"} />
        </button>
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          centeredSlidesBounds={true}
          centerInsufficientSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          grabCursor={true}
          className="container bg-transparent "
          navigation={{
            nextEl: rightButton.current!, //assert non-null
            prevEl: leftButton.current!, //assert non-null
          }}
          breakpoints={{
            991: {
              spaceBetween: 30,
            },
            768: {
              spaceBetween: 20,
            },
            640: {
              spaceBetween: 10,
            },
          }}
        >
          {data.data.map((anime, index) => (
            <SwiperSlide key={anime.mal_id} className="w-fit h-80">
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className=" sm:w-52 lg:w-64 h-auto hover:scale-110 object-cover transition-all duration-300 ease-in-out"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
