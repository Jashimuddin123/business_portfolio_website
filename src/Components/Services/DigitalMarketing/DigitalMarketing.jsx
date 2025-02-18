import { Link } from "react-router";
import LetsTalk from "../../SharedPage/letsTalk";


const DigitalMarketing = () => {
    return (
        <div>
 <div className="max-w-6xl mx-auto py-12 px-6">
       {/* UI/UX Design */}
       <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
      {/* UI/UX Design */}
      <div className="card bg-[#E2E2FF] p-6 w-full shadow-xl rounded-lg">
        <figure className="overflow-hidden rounded-t-lg">
          <img
            className="h-96 object-cover"
            src="https://i.ibb.co.com/s91jRx6B/SEO-rafiki.png"
            alt="UI/UX Design"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-3xl font-semibold text-[#002A64] ">Seo</h2>
          <p className=" text-lg text-[#323232]  mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti laudantium ea veniam harum nisi?  Enhance user experiences with intuitive and modern design.
          </p>
          <div className="mt-4 flex justify-end">
         <Link to="/seo">
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
            src="https://i.ibb.co.com/TDJXGTQD/Social-media-bro.png"
            alt="Graphic Design"
          />
        </figure>
        <div className="p-4">
          <h2 className="text-3xl font-semibold text-[#002A64]">Social Media Marketing </h2>
          <p className=" text-lg text-[#323232]  mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique qui vero tenetur dolorem deleniti. Create visually stunning designs for digital and print media.
          </p>
          <div className="mt-4 flex justify-end">
           <Link to="/mediaMarketing">
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
          src="https://i.ibb.co.com/HTkFr7px/Browser-stats-amico.png"
          alt="Motion Graphic Design"
          className="w-full md:w-96 h-80 object-cover rounded-lg"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-[#002A64]">Search Engine Optimization</h2>
          <p className="text-[#323232] mt-3 text-lg md:text-base leading-relaxed">
            Elevate your brand with high-quality motion graphics, animations, and interactive visuals. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse repellendus qui at iure excepturi adipisci, corporis cupiditate dolores aliquam?
          </p>
          <Link to="/searchEngine">
          <button className="mt-5 bg-white text-blue-600 px-6 py-2 rounded-md font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-600 hover:text-white transition-all">
            See More
          
          </button>
          </Link>
        </div>
      </div>
    </div>

      <LetsTalk />
    </div>
        </div>
    );
};

export default DigitalMarketing;