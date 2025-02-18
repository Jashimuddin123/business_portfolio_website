import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const Testimonial = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((response) => response.json())
      .then((data) => setClients(data))
      .catch((error) => console.error("Error fetching testimonials data:", error));
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 bg-gray-50 mt-10">
      <h2 className="text-4xl font-bold text-blue-900 mt-16 mb-12  text-center  ">
        What Our Clients Say
      </h2>

      <Swiper
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 1 }, 
          768: { slidesPerView: 2 }, 
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20} 
        freeMode={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <img
                src={client.image}
                alt={client.title}
                className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{client.title}</h3>
              <div className="flex justify-center mt-2">{renderStars(client.rating)}</div>
              <p className="mt-2 text-gray-600 italic text-sm">{client.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
