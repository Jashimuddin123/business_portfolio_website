import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="w-full bg-green-600 h-full flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
            // style={{ backgroundImage: "url('https://i.ibb.co.com/ym2CKypw/banner.jpg')" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Welcome to Adventure
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Discover the beauty of nature with us.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Explore More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full bg-sky-300 h-full flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
            // style={{ backgroundImage: "url('https://i.ibb.co.com/ym2CKypw/banner.jpg')" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Experience Serenity
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Relax and rejuvenate in scenic locations.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Explore More
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="w-full bg-amber-700 h-full flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
            // style={{ backgroundImage: "url('https://i.ibb.co.com/ym2CKypw/banner.jpg')" }}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Unleash Your Spirit
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl">
              Embrace thrilling adventures and challenges.
            </p>
            <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded text-white">
              Explore More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
