import React from "react";
import LetsTalk from "../../SharedPage/letsTalk";
import { Link } from "react-router";

const CreativeDesign = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* UI/UX Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
        {/* UI/UX Design */}
        <div className="card bg-[#E2E2FF] p-6 w-full shadow-xl rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="h-96 object-cover"
              src="https://i.ibb.co.com/twJPzgtj/Mobile-UI-UX-amico.png"
              alt="UI/UX Design"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-[#002A64] ">
              UI/UX Design
            </h2>
            <p className=" text-lg text-[#323232]  mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
              deleniti laudantium ea veniam harum nisi? Enhance user experiences
              with intuitive and modern design.
            </p>
            <div className="mt-4 flex justify-end">
              <Link to="/uxDesign">
                <button className="bg-white text-orange-600 px-4 py-2 text-sm font-semibold rounded-md transition hover:bg-orange-500 hover:text-white">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Graphic Design */}
        <div className="card bg-[#FFE5E5] p-6 w-full shadow-md rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className=" h-96 object-cover"
              src="https://i.ibb.co.com/m5Sv4scj/grapich.png"
              alt="Graphic Design"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-[#002A64]">
              Graphic Design
            </h2>
            <p className=" text-lg text-[#323232]  mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              similique qui vero tenetur dolorem deleniti. Create visually
              stunning designs for digital and print media.
            </p>
            <div className="mt-4 flex justify-end">
              <Link to="/grapicDesign">
                <button className="bg-white text-blue-600 px-4 py-2 text-sm font-semibold rounded-md transition hover:bg-indigo-500 hover:text-white">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Card */}
      <div className="flex py-16 flex-col items-center bg-[#C7E7FF] p-8 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
          <img
            src="https://i.ibb.co.com/8DVmxN9w/Innovation-amico.png"
            alt="Motion Graphic Design"
            className="w-full md:w-96 h-80 object-cover rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#002A64]">
              Motion Graphic Design
            </h2>
            <p className="text-[#323232] mt-3 text-lg md:text-base leading-relaxed">
              Elevate your brand with high-quality motion graphics, animations,
              and interactive visuals. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Culpa esse repellendus qui at iure excepturi
              adipisci, corporis cupiditate dolores aliquam?
            </p>
            <Link to="/motionGrapic">
              <button className="mt-5 bg-white text-blue-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-600 hover:text-white transition-all">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>

      <LetsTalk />
    </div>
  );
};

export default CreativeDesign;
