import React from "react";
import LetsTalk from "../../SharedPage/letsTalk";
import { Link } from "react-router";

const Website = () => {
  return (
    <div>
      {/* 1st Card */}
      <div className="flex flex-col items-center bg-[#C7E7FF] p-6 md:p-12 rounded-xl shadow-lg mx-4 md:mx-20">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-4xl">
          <img
            src="https://i.ibb.co.com/Xx0mgKNc/Website-Creator-bro.png"
            alt="Motion Graphic Design"
            className="w-full md:w-96 h-64 md:h-80 object-cover rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A64]">Web Design</h2>
            <p className="text-[#323232] mt-3 text-base md:text-lg leading-relaxed">
              Make your online presence stand out with VISER X Web Development. We create websites that look great, work smoothly, and keep your info safe.
            </p>
           <Link to="/webDesign">
           <button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-600 hover:text-white transition-all">
              See More
            </button>
           </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        {/* UI/UX Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left side Design */}
          <div className="card bg-[#E2E2FF] p-6 shadow-xl rounded-lg">
            <figure className="overflow-hidden rounded-t-lg">
              <img className="h-72 md:h-96 object-cover w-full" src="https://i.ibb.co.com/XZWcfBs4/Developer-activity-bro.png" alt="UI/UX Design" />
            </figure>
            <div className="p-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#002A64]">Web Development</h2>
              <p className="text-base md:text-lg text-[#323232] mt-2">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti laudantium ea veniam harum nisi? Enhance user experiences with intuitive and modern design.
              </p>
              <div className="mt-4 flex justify-end">
               <Link to="/webDevelopment">
               <button className="bg-white text-orange-600 px-4 py-2 text-sm font-semibold rounded-md transition hover:bg-orange-500 hover:text-white">
                  See More
                </button>
               </Link>
              </div>
            </div>
          </div>

          {/* Right side Design */}
          <div className="card bg-[#FFE5E5] p-6 shadow-md rounded-lg">
            <figure className="overflow-hidden rounded-t-lg">
              <img className="h-72 md:h-96 object-cover w-full" src="https://i.ibb.co.com/3yvb7dgb/Computer-troubleshooting-amico.png" alt="Graphic Design" />
            </figure>
            <div className="p-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#002A64]">Website Maintenance</h2>
              <p className="text-base md:text-lg text-[#323232] mt-2">
                Get better user experience and SEO rankings with VISER X Website Speed Optimization. Fastest, seamless, and most responsive websites to captivate your users and accelerate your digital success.
              </p>
              <div className="mt-4 flex justify-end">
               <Link to="/websiteMaintenece">
               <button className="bg-white text-blue-600 px-4 py-2 text-sm font-semibold rounded-md transition hover:bg-indigo-500 hover:text-white">
                  See More
                </button>
               </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Card */}
        <div className="flex flex-col items-center bg-[#C7E7FF] p-6 md:p-12 mt-8 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-4xl">
            <img
              src="https://i.ibb.co.com/TM4hXbrF/Server-bro.png"
              alt="Website Speed Optimization"
              className="w-full md:w-96 h-64 md:h-80 object-cover rounded-lg"
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-[#002A64]">Website Speed Optimization</h2>
              <p className="text-[#323232] mt-3 text-base md:text-lg leading-relaxed">
                Elevate your brand with high-quality motion graphics, animations, and interactive visuals. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse repellendus qui at iure excepturi adipisci, corporis cupiditate dolores aliquam?
              </p>
             <Link to="/websiteOptimizations">
             <button className="mt-5 bg-white text-blue-600 px-5 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-600 hover:text-white transition-all">
                See More
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      <LetsTalk />
    </div>
  );
};

export default Website;
