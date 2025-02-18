import { GoArrowRight } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { Link } from "react-router";

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto px-4 md:px-8 ">
      {/* card 1 */}
      <div className="border-b-2 border-[#0084FF] px-2 py-2 md:px-8 md:py-12 hover:bg-[#0084FF] hover:text-white hover:border-white">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Creative Design</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/creativeDesign">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      
      {/* Repeat for other cards */}
      {/* card 2 */}
      <div className="border-l-0 md:border-l-2 border-[#0084FF] hover:bg-[#0084FF] hover:text-white hover:border-white px-6 py-8 md:px-8 md:py-12 border-b-2">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Website</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/website">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      
      {/* card 3 */}
      <div className="border-b-2 md:border-l-2  border-[#0084FF] px-6 py-2 md:px-8 md:py-12 hover:bg-[#0084FF] hover:text-white hover:border-white">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Software</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/software">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      
      {/* Repeat for other cards */}
      {/* card 4 */}
      <div className="  border-[#0084FF] hover:bg-[#0084FF] hover:text-white hover:border-white px-6 py-8 md:px-8 md:py-12 ">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Digital Marketing</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/digitalMarketing">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      {/* card 5 */}
      <div className="md:border-l-2  border-[#0084FF] hover:bg-[#0084FF] hover:text-white hover:border-white px-6 py-8 md:px-8 md:py-12 ">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Website</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/website">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      {/* card 6 */}
      <div className="md:border-l-2  border-[#0084FF] hover:bg-[#0084FF] hover:text-white hover:border-white px-6 py-8 md:px-8 md:py-12 ">
        <div className="flex items-center gap-2">
          <TfiWorld className="text-2xl" />
          <p className="text-blue-700 text-2xl">Website</p>
        </div>
        <p className="py-4">
          Our website development expertise goes beyond coding from concept to execution, we sculpt digital experiences.
        </p>
        <Link to="/website">
          <button className="mt-4 flex w-40 items-center gap-2 text-[#002A64] hover:text-white py-2 px-3 rounded-lg hover:border-white">
            Explore All
            <GoArrowRight className="rounded-full text-2xl px-1 border hover:text-white" />
          </button>
        </Link>
      </div>
      
      {/* Repeat for remaining cards */}
    </div>
  );
};

export default Services;
