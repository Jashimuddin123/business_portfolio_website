import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between  bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
            <div className="flex-1 flex flex-col justify-center items-start text-left p-6 md:p-12">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">UI/UX Design Service</h1>
              <p className="text-lg md:text-xl max-w-lg md:max-w-2xl opacity-90">Enhance user experience with top-notch UI/UX design services tailored to your brand.</p>
             <Link to="/services">
             <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Explore More</button>
             </Link>
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <img src="https://i.ibb.co/JjmsPG2w/UI-UX-differences-cuate.png" alt="UI/UX Design" className="max-w-full max-h-[400px] md:max-h-[450px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        
               <div className="w-full h-full flex flex-col md:flex-row items-center justify-between  bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
            <div className="flex-1 flex flex-col justify-center items-start text-left p-6 md:p-12">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight w-[550px] mb-4 drop-shadow-lg">Web Development Service</h1>
              <p className="text-lg md:text-xl max-w-lg md:max-w-2xl opacity-90">Enhance user experience with top-notch UI/UX design services tailored to your brand.</p>
              <Link to="/services">
             <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Explore More</button>
             </Link>
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <img src="  https://i.ibb.co.com/qMwzznVh/Development-pana.png" alt="UI/UX Design" className="max-w-full max-h-[400px] md:max-h-[500px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </SwiperSlide>
        {/* https://i.ibb.co/mCY9NyFH/Static-assets-bro.png */}
      
        <SwiperSlide>
          <div className="w-full h-full flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-600 text-white relative">
            <div className="flex-1 flex flex-col justify-center items-start text-left p-6 md:p-12">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">Digital Marketing Service</h1>
              <p className="text-lg md:text-xl max-w-lg md:max-w-2xl opacity-90">Boost your brand's online presence with cutting-edge digital marketing strategies.</p>
              <Link to="/services">
             <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">Explore More</button>
             </Link>
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <img src="https://i.ibb.co/m5YySSvH/Generating-new-leads-pana.png" alt="Digital Marketing" className="max-w-full max-h-[400px] md:max-h-[500px] object-contain drop-shadow-xl" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;