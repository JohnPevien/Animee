import { useRef } from "react";

import type { TopAnime } from "@type/index";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";

import { HiArrowRightCircle, HiArrowLeftCircle } from "react-icons/hi2";

type Props = {
  data: TopAnime.RootObject;
};

const LeftButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className=" absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer"
      onClick={() => {
        swiper.slidePrev();
      }}
    >
      <HiArrowLeftCircle size={40} color={"#d74cf6"} />
    </div>
  );
};

const RightButton = () => {
  const swiper = useSwiper();
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer"
      onClick={() => {
        swiper.slideNext();
      }}
    >
      <HiArrowRightCircle size={40} color={"#d74cf6"} />
    </div>
  );
};

export default function MarqueeGallery({ data }: Props) {
  return (
    <section className="container">
      <div className="">
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
          className="bg-transparent"
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

          <LeftButton />
          <RightButton />
        </Swiper>
      </div>
    </section>
  );
}
