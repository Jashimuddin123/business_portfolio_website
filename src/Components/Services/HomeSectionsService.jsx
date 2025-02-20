import { useState } from "react";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router";

import { GoArrowRight } from "react-icons/go";
// import "./styles.css"

const HomeSectionsService = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  const [selectedService, setSelectedService] = useState("Creative Design");

  return (
    <div className="p-12 max-w-7xl mx-auto">
  <div className="flex justify-center mb-6">
  <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-8">
    <button
      onClick={() => setSelectedService("Software")}
      className={`px-4 py-2 rounded-md text-white ${
        selectedService === "Software" ? "bg-blue-700" : "bg-blue-500"
      }`}
    >
      Software
    </button>
    <button
      onClick={() => setSelectedService("Creative Design")}
      className={`px-4 py-2 rounded-md text-white ${
        selectedService === "Creative Design" ? "bg-blue-700" : "bg-blue-500"
      }`}
    >
      Creative Design
    </button>
    <button
      onClick={() => setSelectedService("Website")}
      className={`px-4 py-2 rounded-md text-white ${
        selectedService === "Website" ? "bg-blue-700" : "bg-blue-500"
      }`}
    >
      Website
    </button>
    <button
      onClick={() => setSelectedService("Digital Marketing")}
      className={`px-4 py-2 rounded-md text-white ${
        selectedService === "Digital Marketing" ? "bg-blue-700" : "bg-blue-500"
      }`}
    >
      Digital Marketing
    </button>
    <Link to="/services">
      <button
        className={`px-4 py-2 rounded-md text-white ${
          selectedService === "Digital Marketing" ? "bg-blue-700" : "bg-blue-500"
        }`}
      >
        All Service
      </button>
    </Link>
  </div>
</div>



      {selectedService === "Software" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-lg shadow-md text-center bg-blue-100 flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/kgzsgmyr/ecommerce.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">E-Commerce</h3>
            <p className="text-sm text-gray-700 mb-3">
              E-commerce enables seamless online buying and selling, offering
              convenience, security, and a global marketplace for businesses and
              consumers.
            </p>
            <Link
              to="/eCommerce"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>
          <div className="p-8 rounded-lg shadow-md text-center bg-red-100 flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/jZzHXMcL/team.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">HR Management</h3>
            <p className="text-sm text-gray-700 mb-3">
              HR management streamlines recruitment, training, performance, and
              employee relations to enhance workplace efficiency and growth
            </p>
            <Link
              to="/hrManagement"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-blue-100 flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/N6sdck2B/booking.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">Mobile App</h3>
            <p className="text-sm text-gray-700 mb-3">
              Mobile app development creates user-friendly, high-performance
              applications for seamless experiences on smartphones and tablets.
            </p>
            <Link
              to="/mobileApp"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
             Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-red-100 flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/5hwxRfb6/accounts.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">
              Account & Finance
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Account & Finance manage budgets, transactions, investments, and
              financial planning to ensure stability, growth, and compliance.
            </p>
            <Link
              to="/accountFinnace"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>
        </div>
      )}

      {selectedService === "Creative Design" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-lg shadow-md text-center bg-[#E2E2FF]  flex flex-col items-center justify-center">
            {/* <TbBrandRedux className="text-5xl mb-4" /> */}
            <img
              className="w-16"
              src="https://i.ibb.co.com/xWFDYgZ/web-design.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mt-2 mb-2">UI/UX Design</h3>
            <p className="text-sm text-gray-700 mb-3">
              UI/UX design enhances user experience by creating intuitive,
              visually appealing, and functional interfaces that improve
              usability, engagement, and accessibility across devices.
            </p>
            <Link
              to="/uxDesign"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-[#FFE5E5] flex flex-col items-center justify-center">
            {/* <GrCloudlinux className="text-5xl mb-4" /> */}
            <img
              className="w-16"
              src="https://i.ibb.co.com/fVZWxnTR/vector.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mt-2 mb-2">Graphic Design</h3>
            <p className="text-sm text-gray-700 mb-3">
              Graphic design combines creativity and visual communication to
              create compelling visuals, including logos, branding, and
              marketing materials, enhancing brand identity .
            </p>
            <Link
              to="/grapicDesign"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-[#C7E7FF] flex flex-col items-center justify-center">
            {/* <SiLinuxserver className="text-5xl mb-4" /> */}
            <img
              className="w-16"
              src="https://i.ibb.co.com/Mx9Vt0PD/motion-graphic.png"
              alt=""
            />
            <h3 className="text-lg mt-2 font-semibold mb-2">
              Motion Graphic Design
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Motion graphic design brings visuals to life through animation,
              typography, and effects, enhancing storytelling, branding, and
              audience engagement with dynamic motion.
            </p>
            <Link
              to="motionGrapic"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>
        </div>
      )}

      {selectedService === "Website" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8  rounded-lg shadow-md text-center bg-[#C7E7FF] flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/tpxQVxgz/ux-design.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">Web Design</h3>
            <p className="text-sm text-gray-700 mb-3">
              Web design creates visually appealing, user-friendly, and
              responsive websites that enhance user experience and brand
              identity.
            </p>
            <Link
              to="/webDesign"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8  rounded-lg shadow-md text-center bg-[#E2E2FF] flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/kg6XGJMt/programming.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">Web Development</h3>
            <p className="text-sm text-gray-700 mb-3">
              Web development builds functional, dynamic, and responsive
              websites using coding, databases, and modern technologies for
              seamless user experience.
            </p>
            <Link
              to="/webDevelopment"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8  rounded-lg shadow-md text-center bg-[#FFE5E5] flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/WNYxCNFF/optimize.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">
              Website Maintenance
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Website maintenance ensures optimal performance, security, and
              content updates to enhance user experience and functionality.
            </p>
            <Link
              to="/websiteMaintenece"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8  rounded-lg shadow-md text-center bg-[#C7E7FF] flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/GfZzVR5v/boost.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">
              Website Optimization
            </h3>
            <p className="text-sm text-gray-700 mb-3">
              Website speed optimization improves load times by reducing file
              sizes, enhancing performance, and boosting user experience.
            </p>
            <Link
              to="/websiteOptimizations"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>
        </div>
      )}

      {selectedService === "Digital Marketing" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-8 rounded-lg shadow-md text-center bg-[#E2E2FF] flex flex-col items-center justify-center">
            <img
            className="w-16"
              src="
                 https://i.ibb.co.com/GfdMH0w1/seo-1.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">SEO Services</h3>
            <p className="text-sm text-gray-700 mb-3">
            SEO services enhance website visibility on search engines by optimizing content, keywords, and technical aspects to drive organic traffic.
            </p>
            <Link
              to="/seo"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-[#FFE5E5] flex flex-col items-center justify-center">
            <img
              className="w-16"
              src="https://i.ibb.co.com/0jbCDPdh/bullhorn.png"
              alt=""
            />
            <h3 className="text-lg font-semibold mb-2 mt-2">
              Social Media Marketing
            </h3>
            <p className="text-sm text-gray-700 mb-3">
            Social media marketing promotes brands through strategic content, engagement, and targeted ads to boost visibility, reach, and customer loyalty.
            </p>
            <Link
              to="/mediaMarketing"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>

          <div className="p-8 rounded-lg shadow-md text-center bg-[#C7E7FF] flex flex-col items-center justify-center">
            <img className="w-16" src="https://i.ibb.co.com/M5Q36QVC/search-engine.png" alt="" />
            <h3 className="text-lg font-semibold mb-2 mt-2">
              Search Engine Optimization
            </h3>
            <p className="text-sm text-gray-700 mb-3">
            Search Engine Optimization (SEO) improves website ranking on search engines by optimizing content, keywords, and technical factors for better visibility.
            </p>
            <Link
              to="/searchEngine"
              className="mt-4 flex w-40  font-semibold items-center gap-2 text-[#002A64] py-2 px-3 rounded-lg"
            >
              Explore More{" "}
              <GoArrowRight className="rounded-full text-2xl px-1 border" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeSectionsService;
