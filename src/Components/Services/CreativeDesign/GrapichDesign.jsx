import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { img } from "framer-motion/client";
import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";

const GrapichDesign = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 2.5, spacing: 10 },
    range: {
      min: -5,
      max: 5,
    },
  });
  return (
    <div>
      {/* top sections */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-10 rounded-xl shadow-lg mt-6">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Unleash Your Brand's
            <br /> Potential with Our <br /> Graphic Design Service
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Our Graphic Design service is your gateway to transform your vision
            into visually stunning designs. From compelling logos and business
            identities to social media graphics, we provide a full spectrum of
            design services that promote your brand's aesthetic and connect with
            your audience on a deeper level.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co.com/Nnd6Gdrq/Palette-pana.png"
            alt="Accounting & Finance"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>
      {/* Image Section */}
      <div className="w-full sm:w-[800px] md:w-[1200px] mx-auto my-20">
        <img
          className="w-full h-full rounded-2xl"
          src="https://i.ibb.co.com/QFVncpbt/hero-616eebcf.webp"
          alt=""
        />
      </div>
      {/* slider sections */}
      <div>
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <img
              src="https://i.ibb.co.com/JjzmtX14/Whats-App-Image-2025-01-30-at-12-49-54-87495b7f.jpg"
              alt="e-comerce"
            />
          </div>
          <div className="keen-slider__slide number-slide2">
            <img
              src=" https://i.ibb.co.com/Hm0X8x8/slider1-50e59575.webp"
              alt="card"
            />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src="https://i.ibb.co.com/N2WgmrKj/brand1.jpg" alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img
              src="https://i.ibb.co.com/ZzLy4ZGR/slider3-0b009414.webp"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img
              src="https://i.ibb.co.com/BHDDq7yD/Whats-App-Image-2025-01-22-at-14-20-16-17964eda.jpg"
              alt=""
            />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src="https://i.ibb.co.com/5gwrbVK8/brand2.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* faq  */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className=" text-4xl text-start font-bold text-gray-900 my-10">
              What Do You Expect from Our Graphic <br /> Design Services
            </h1>
            <div className="">
              {/* Question 1 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  How does Haque Digital tailor UI/UX design to my project?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  We conduct a thorough discovery phase, understanding your
                  goals and audience to customize design strategies for optimal
                  user engagement.
                </div>
              </div>

              {/* Question 2 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Can Haque Digital work with existing design elements or
                  branding guidelines?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Certainly. We incorporate existing design elements and adhere
                  to established branding guidelines, ensuring a cohesive and
                  recognizable visual identity.
                </div>
              </div>

              {/* Question 3 */}
              <div className="collapse collapse-plus border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  What types of projects can benefit from UI/UX design services?
                </div>
                <div className="collapse-content text-sm text-gray-700 ">
                  Any digital project, from websites and mobile apps to software
                  interfaces, can benefit from UI/UX design to enhance user
                  satisfaction and functionality.
                </div>
              </div>

              {/* Question 4 */}
              <div className="collapse collapse-plus  rborder-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Can Haque Digital assist with implementing UI/UX designs into
                  my website or app?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  While we primarily focus on design, we collaborate with
                  developers or provide guidance to ensure seamless
                  implementation of UI/UX designs.
                </div>
              </div>

              {/* Question 5 */}
              <div className="collapse collapse-plus  border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Can Haque Digital assist with implementing UI/UX designs into
                  my website or app?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  While we primarily focus on design, we collaborate with
                  developers or provide guidance to ensure seamless
                  implementation of UI/UX designs.
                </div>
              </div>

              {/* Question 6 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  How does Haque Digital stay updated with the latest UI/UX
                  design trends and technologies?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Our team engages in continuous learning, research, and
                  industry participation, staying abreast of the latest trends
                  and technologies to ensure cutting-edge UI/UX designs.
                </div>
              </div>

              {/* Question 7 */}
              <div className="collapse collapse-plus border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Can Haque Digital provide ongoing support or updates for UI/UX
                  designs after project completion?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Yes, we offer post-project support and updates as needed,
                  ensuring your UI/UX designs remain current, effective, and
                  aligned with your evolving business goals.
                </div>
              </div>

              {/* Question 8 */}
              <div className="collapse collapse-plus  border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  How does UI/UX design impact website or app performance and
                  user engagement?
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Effective UI/UX design enhances user satisfaction, navigation
                  ease, and overall engagement, contributing to increased user
                  retention and the success of digital platforms.
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://i.ibb.co.com/BH9PS5sY/imagefaq-d48f3d73.png"
              alt="FAQ Illustration"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
      {/* review sections */}

      <Testimonial></Testimonial>
      {/* faq questions */}
      <div className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-md my-16">
        <p className="text-center pt-10 text-lg text-white">Find Answer</p>
        <h1 className="text-center text-3xl font-bold text-white">
          Frequently Asked Question
        </h1>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-2 bg-blue-900 text-white p-4 rounded-lg">
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              What is graphic design, and how does it benefit my business?
              </div>
              <div className="collapse-content text-white  text-sm ">
              Graphic design visually communicates ideas, enhancing brand aesthetics and promoting engagement across various mediums for effective communication.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can Digital haque create a logo that reflects my brand's unique identity?
              </div>
              <div className="collapse-content text-sm text-white ">
              Absolutely. We craft distinctive logos that encapsulate your brand's essence and values and resonate with your target audience.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              How does Haque digital approach the design of company profiles?
              </div>
              <div className="collapse-content text-sm text-white ">
              We blend aesthetics with information, creating visually compelling company profiles that effectively showcase your brand's values, services, and achievements.

              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              What stationary items can haque digital design for my business?
              </div>
              <div className="collapse-content text-sm text-white ">
              We design a range of professional stationery, including business cards, letterheads, envelopes, and other essential collateral, ensuring a cohesive and impactful brand image.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can haque digital incorporate existing branding elements into new designs?
              </div>
              <div className="collapse-content text-sm text-white ">
              Certainly. We integrate existing brand elements seamlessly into new designs, maintaining consistency and reinforcing your brand identity across various materials and platforms.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              How does haque digital ensure a cohesive brand identity across design elements?
              </div>
              <div className="collapse-content text-sm text-white ">
              We establish and adhere to clear brand guidelines, ensuring consistency in color schemes, typography, and visual elements to create a unified and recognizable brand identity.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can haque digital  design graphics for digital platforms and social media?
              </div>
              <div className="collapse-content text-sm text-white ">
              Our graphic design services extend to digital platforms, including social media graphics, ensuring a visually compelling and cohesive online brand presence.

              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              How does haque digital ensure graphic designs resonate with my target audience?
              </div>
              <div className="collapse-content text-sm text-white ">
              We conduct thorough research to understand your target audience, tailoring designs that align with their preferences ensuring maximum engagement and resonance.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* lests talk sections */}
      <LetsTalk></LetsTalk>
    </div>
  );
};

export default GrapichDesign;
