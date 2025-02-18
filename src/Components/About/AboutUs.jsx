import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import LetsTalk from "../SharedPage/letsTalk";
import { Link } from "react-router";

const AboutUs = () => {
  return (
    <div className="p-4 md:p-10 text-center">
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center bg-blue-100 p-6 md:p-16 rounded-xl shadow-lg max-w-6xl mx-auto">
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900">
            We are a Result-Driven Software Development & Digital Marketing
            Agency
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Haque Digital Company provides expert SEO, software development, creative design, website development, and digital marketing services. We help businesses grow with innovative solutions and effective digital strategies. Your success is our priority! 
          </p>
       <Link to="/services">
       <button className="mt-3 md:mt-5 bg-blue-600 text-white px-4 md:px-6 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-700 transition-all">
           Explore Our Service <HiArrowLongRight size={20} />
          </button>
       </Link>
        </div>
        <img
          src="https://i.ibb.co/m3VCmK8/Ecommerce-campaign-amico-1.png"
          alt="Motion Graphic Design"
          className="w-full md:w-96 h-60 md:h-80 object-cover rounded-lg"
        />
      </div>

      {/* Mission and Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {/* Our Mission Card */}
        <div className="bg-[#E2E2FF] p-6 shadow-xl rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-48 md:h-64 lg:h-96 object-contain"
              src="https://i.ibb.co/fzRKwqB0/mission-af889212.webp"
              alt="Our Mission"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-lg md:text-2xl font-semibold text-[#002A64]">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-[#323232] mt-2">
              Our mission is to empower businesses through innovative digital
              strategies. We're dedicated to fostering growth, enhancing
              visibility, and delivering unparalleled results.
            </p>
          </div>
        </div>

        {/* Our Vision Card */}
        <div className="bg-[#FFE5E5] p-6 shadow-md rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-48 md:h-64 lg:h-96 object-contain"
              src="https://i.ibb.co/0pV9Tsxx/vission-b0888af1.webp"
              alt="Our Vision"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-lg md:text-2xl font-semibold text-[#002A64]">
              Our Vision
            </h2>
            <p className="text-base md:text-lg text-[#323232] mt-2">
              We are ready to redefine digital possibilities. We aim to pioneer
              groundbreaking strategies, empowering businesses to thrive in an
              ever-evolving digital landscape fostering growth, innovation, and
              sustained success.
            </p>
          </div>
        </div>
      </div>
      <LetsTalk />
    </div>
  );
};

export default AboutUs;
