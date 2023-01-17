import type { Anime } from "@type/anime";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: Anime.RootObject;
};
export default function MarqueeGallery({ data }: Props) {
  return (
    <section className="">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        grabCursor={true}
        className="max-w-screen-xl shadow-2xl bg-transparent lg:max-h-50"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
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
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
}
