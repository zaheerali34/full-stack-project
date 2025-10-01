import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageDB from "../../utils/ImageDB";
import { Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full px-8 -mt-10">
      <div className="w-full relative">
        <button
          ref={prevRef}
          className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all duration-200 border-2 border-blue-500 cursor-pointer"
          style={{ left: "-20px" }}
          aria-label="Previous"
        >
          <ChevronLeft />
        </button>
        <button
          ref={nextRef}
          className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white  text-gray-500 rounded-full w-12 h-12 flex items-center justify-center shadow-xl  transition-all duration-200 border-2 border-blue-500 cursor-pointer"
          style={{ right: "-20px" }}
          aria-label="Next"
        >
          <ChevronRight />
        </button>
        <Swiper
          slidesPerView={7}
          spaceBetween={15}
          modules={[Pagination, Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          breakpoints={{
            300: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 7,
              spaceBetween: 15,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full flex items-center justify-center"
        >
          {ImageDB.map((items, idx) => (
            <SwiperSlide key={idx} className="w-full py-20">
              <img
                src={items.url}
                alt=""
                className="w-[200px] object-cover rounded-xl transform transition-transform duration-500 hover:scale-110 max-md:hover:scale-100"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
