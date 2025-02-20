import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card1 */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <img
            src="https://i.ibb.co.com/qMVy7Gh0/Whats-App-Image-2025-02-12-at-16-40-43-be8f73fb.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />
          <h1 className="text-xl font-bold mt-4">
            SEO Techniques That Ranked Regina Divorce Lawyer #1
          </h1>
          <p>
            We employed cutting-edge SEO strategies that helped our client,
            Regina Divorce Lawyer, achieve a #1 ranking in esults,
            
          </p>
          <Link
            to="/caseDetailsOne"
            className="mt-4 flex w-40 items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
          >
            Read Case <GoArrowRight className="rounded-full text-2xl px-1 border" />
          </Link>
        </div>

        {/* card2 */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <img
            src="https://i.ibb.co.com/KcxvxtWQ/Whats-App-Image-2025-02-12-at-16-41-07-6093f7f8.jpg"
            alt=""
            className="w-full h-64 object-cover rounded-md"
          />
          <h1 className="text-xl font-bold mt-4">Modern Website Design</h1>
          <p>
            Our team redesigned the website with a modern, user-friendly
            interface, boosting engagement and improving overall brand presence.
          </p>
          <Link
            to="/caseDetailTwo"
            className="mt-4 flex w-40 items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
          >
            Read Case <GoArrowRight className="rounded-full text-2xl px-1 border" />
          </Link>
        </div>

        {/* card3 */}
        <div className="bg-gray-100 p-6 shadow-lg rounded-2xl transition-transform transform hover:scale-105 hover:shadow-xl duration-500">
          <img
            src="https://i.ibb.co.com/pvvpDF0M/Whats-App-Image-2025-02-12-at-16-41-22-4a49573f.jpg"
            alt=""
            className="w-full h-64 rounded-md"
          />
          <h1 className="text-xl font-bold mt-4">E-commerce Website Redesign</h1>
          <p>
            A comprehensive redesign of an e-commerce platform, focused on
            improving user experience, increasing sales, and optimizing for
            mobile devices.
          </p>
          <Link
            to="/caseDetailThree"
            className="mt-4 flex w-40 items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
          >
            Read Case <GoArrowRight className="rounded-full text-2xl px-1 border" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
