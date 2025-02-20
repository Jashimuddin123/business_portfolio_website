import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-full md:h-[600px] lg:h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide>
        <div
  className="w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-b from-blue-600 to-white text-white px-6 relative"
>
  {/* Left Section */}
  <div className="flex-1 mt-5 md:mt-0 px-2.5 md:px-10 flex flex-col justify-center items-start">
    {/* Title */}
    <h1 className="text-3xl md:text-7xl font-bold mt-4 md:mt-0 mb-4 text-[#002A64]">
      UI/UX Design Service
    </h1>

    {/* Description */}
    <p className="text-white md:text-[#002A64] md:text-lg max-w-md md:max-w-2xl opacity-90">
      Enhance user experience with top-notch UI/UX design services tailored to your brand.
    </p>

    {/* Button */}
    <Link to="/services">
      <button
        className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-white text-blue-600 font-semibold 
          rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        Explore More
      </button>
    </Link>

   {/* Stats Section (Mobile) */}
<div className="flex md:hidden w-full mt-5 ml-2.5 justify-center">
  <div className="grid grid-cols-4 gap-4 w-full text-center">
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">990+</h2>
      <p className="text-sm opacity-90">Projects</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">500+</h2>
      <p className="text-sm opacity-90">Clients</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Years</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Awards</p>
    </div>
  </div>
</div>

  </div>

  {/* Right Section */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
    <img
      src="https://i.ibb.co/JjmsPG2w/UI-UX-differences-cuate.png"
      alt="UI/UX Design"
      className="w-full md:w-[400px] h-auto max-h-[450px] object-contain drop-shadow-xl"
    />
  </div>

  {/* Stats Section (Desktop) */}
  <div className="hidden md:flex md:mr-60 absolute bottom-0 right-6 gap-20 bg-opacity-20 p-6 rounded-lg">
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">990+</h2>
      <p className="text-lg opacity-90">Projects Completed</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">500+</h2>
      <p className="text-lg opacity-90">Happy Clients</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Years of Experience</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Awards</p>
    </div>
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>
        <div
  className="w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-b from-blue-600 to-white text-white px-6 relative"
>
  {/* Left Section */}
  <div className="flex-1 mt-5 md:mt-0 px-2.5 md:px-10 flex flex-col justify-center items-start">
    {/* Title */}
    <h1 className="text-3xl md:text-7xl font-bold mt-4 md:mt-0 mb-4 text-[#002A64]">
    Digital Marketing Service
    </h1>

    {/* Description */}
    <p className="text-white md:text-[#002A64] md:text-lg max-w-md md:max-w-2xl opacity-90">
      Enhance user experience with top-notch UI/UX design services tailored to your brand.
    </p>

    {/* Button */}
    <Link to="/services">
      <button
        className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-white text-blue-600 font-semibold 
          rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        Explore More
      </button>
    </Link>

    
   {/* Stats Section (Mobile) */}
<div className="flex md:hidden w-full mt-5 ml-2.5 justify-center">
  <div className="grid grid-cols-4 gap-4 w-full text-center">
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">990+</h2>
      <p className="text-sm opacity-90">Projects</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">500+</h2>
      <p className="text-sm opacity-90">Clients</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Years</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Awards</p>
    </div>
  </div>
</div>

  </div>

  {/* Right Section */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
    <img
      src="https://i.ibb.co.com/1f2ktzGm/Ecommerce-web-page-rafiki-1.png"
      alt="UI/UX Design"
      className="w-full md:w-[400px] h-auto max-h-[450px] object-contain drop-shadow-xl"
    />
  </div>

  {/* Stats Section (Desktop) */}
  <div className="hidden md:flex  md:mr-60  absolute bottom-6 right-6 gap-20 bg-opacity-20 p-6 rounded-lg">
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">990+</h2>
      <p className="text-lg opacity-90">Projects Completed</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">500+</h2>
      <p className="text-lg opacity-90">Happy Clients</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Years of Experience</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Awards</p>
    </div>
  </div>
</div>


        </SwiperSlide>
        <SwiperSlide>
        <div
  className="w-full min-h-[650px] flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-b from-blue-600 to-white text-white px-6 relative"
>
  {/* Left Section */}
  <div className="flex-1 mt-5 md:mt-0 px-2.5 md:px-10 flex flex-col justify-center items-start">
    {/* Title */}
    <h1 className="text-3xl md:text-7xl font-bold mt-4 md:mt-0 mb-4 text-[#002A64]">
    Web Development Service
    </h1>

    {/* Description */}
    <p className="text-white md:text-[#002A64] md:text-lg max-w-md md:max-w-2xl opacity-90">
      Enhance user experience with top-notch UI/UX design services tailored to your brand.
    </p>

    {/* Button */}
    <Link to="/services">
      <button
        className="mt-6 px-6 md:px-8 py-2 md:py-3 bg-white text-blue-600 font-semibold 
          rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
      >
        Explore More
      </button>
    </Link>

   
    {/* Stats Section (Mobile) */}
<div className="flex md:hidden w-full mt-5 ml-2.5 justify-center">
  <div className="grid grid-cols-4 gap-4 w-full text-center">
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">990+</h2>
      <p className="text-sm opacity-90">Projects</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">500+</h2>
      <p className="text-sm opacity-90">Clients</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Years</p>
    </div>
    <div className="text-blue-800">
      <h2 className="text-xl font-bold">5+</h2>
      <p className="text-sm opacity-90">Awards</p>
    </div>
  </div>
</div>

  </div>

  {/* Right Section */}
  <div className="flex-1 flex justify-center items-center mt-6 md:mt-0">
    <img
      src="https://i.ibb.co.com/vxvhXdRJ/Website-designer-pana.png"
      alt="web development"
      className="w-full md:w-[400px] h-auto max-h-[450px] object-contain drop-shadow-xl"
    />
  </div>

  {/* Stats Section (Desktop) */}
  <div className="hidden md:flex md:mr-60 absolute bottom-6 right-6 gap-20 bg-opacity-20 p-6 rounded-lg">
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">990+</h2>
      <p className="text-lg opacity-90">Projects Completed</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">500+</h2>
      <p className="text-lg opacity-90">Happy Clients</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Years of Experience</p>
    </div>
    <div className="text-center text-blue-800">
      <h2 className="text-3xl font-bold">5+</h2>
      <p className="text-lg opacity-90">Awards</p>
    </div>
  </div>
</div>


        </SwiperSlide>

      
      </Swiper>
    </div>
  );
};

export default Banner;
