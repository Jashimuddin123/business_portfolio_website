import { Link } from "react-router";
import LetsTalk from "../../SharedPage/letsTalk";

const Software = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
        {/* E-Commerce Card */}
        <div className="card bg-[#E2E2FF] p-6 w-full shadow-xl rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-64 md:h-96 object-contain"
              src="https://i.ibb.co.com/SXR5h8GB/Ecommerce-campaign-amico-1.png"
              alt="E-Commerce"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl md:text-3xl font-semibold text-[#002A64]">E-Commerce</h2>
            <p className="text-lg text-[#323232] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti laudantium ea veniam harum nisi? Enhance user experiences with intuitive and modern design.
            </p>
            <div className="mt-4 flex justify-end">
              <Link to="/eCommerce">
                <button className="bg-white text-orange-600 px-6 py-3 text-sm md:text-base font-semibold rounded-md transition hover:bg-orange-500 hover:text-white">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* CRM Card */}
        <div className="card bg-[#FFE5E5] p-6 w-full shadow-md rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-64 md:h-96 object-contain"
              src="https://i.ibb.co.com/m5Sv4scj/grapich.png"
              alt="CRM"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl md:text-3xl font-semibold text-[#002A64]">CRM</h2>
            <p className="text-lg text-[#323232] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique qui vero tenetur dolorem deleniti. Create visually stunning designs for digital and print media.
            </p>
            <div className="mt-4 flex justify-end">
              <button className="bg-white text-blue-600 px-6 py-3 text-sm md:text-base font-semibold rounded-md transition hover:bg-indigo-500 hover:text-white">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3rd Card - HR Management */}
      <div className="flex py-16 flex-col items-center bg-[#C7E7FF] p-6 md:p-12 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-4xl">
          <img
            src="https://i.ibb.co.com/YxdNFWb/Business-ethics-amico-1.png"
            alt="HR Management"
            className="w-full md:w-96 h-64 md:h-80 object-contain rounded-lg"
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-[#002A64]">HR Management</h2>
            <p className="text-[#323232] mt-3 text-lg md:text-base leading-relaxed">
              Elevate your brand with high-quality motion graphics, animations, and interactive visuals. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa esse repellendus qui at iure excepturi adipisci, corporis cupiditate dolores aliquam?
            </p>
           <Link to="/hrManagement">
           <button className="mt-5 bg-white text-blue-600 px-6 py-3 text-sm md:text-base font-semibold flex items-center gap-2 mx-auto md:mx-0 hover:bg-blue-600 hover:text-white transition-all">
              See More
            </button>
           </Link>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 mb-10 gap-6">
        {/* Mobile App Card */}
        <div className="card bg-[#E2E2FF] p-6 w-full shadow-xl rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-64 md:h-96 object-contain"
              src="https://i.ibb.co.com/ns6DzgBt/Mobile-wireframe-bro.png"
              alt="Mobile App"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl md:text-3xl font-semibold text-[#002A64]">Mobile App</h2>
            <p className="text-lg text-[#323232] mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores deleniti laudantium ea veniam harum nisi? Enhance user experiences with intuitive and modern design.
            </p>
            <div className="mt-4 flex justify-end">
          <Link to="/mobileApp">
          <button className="bg-white text-orange-600 px-6 py-3 text-sm md:text-base font-semibold rounded-md transition hover:bg-orange-500 hover:text-white">
                See More
              </button>
          </Link>
            </div>
          </div>
        </div>

        {/* Account & Finance Card */}
        <div className="card bg-[#FFE5E5] p-6 w-full shadow-md rounded-lg">
          <figure className="overflow-hidden rounded-t-lg">
            <img
              className="w-full h-64 md:h-96 object-contain"
              src="https://i.ibb.co.com/3ygtqtFk/Finance-leaders-rafiki.png"
              alt="Account & Finance"
            />
          </figure>
          <div className="p-4">
            <h2 className="text-xl md:text-3xl font-semibold text-[#002A64]">Account & Finance</h2>
            <p className="text-lg text-[#323232] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi similique qui vero tenetur dolorem deleniti. Create visually stunning designs for digital and print media.
            </p>
            <div className="mt-4 flex justify-end">
             <Link to="/accountFinnace">
             <button className="bg-white text-blue-600 px-6 py-3 text-sm md:text-base font-semibold rounded-md transition hover:bg-indigo-500 hover:text-white">
                See More
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>

      {/* LetsTalk Section */}
      <LetsTalk />
    </div>
  );
};

export default Software;
