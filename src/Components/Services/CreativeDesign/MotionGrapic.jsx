import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import TechnologyUses from "../../SharedPage/TechnologyUses";
import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";
const MotionGrapic = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });
  return (
    <div>
      {/* top sections */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-10 rounded-xl shadow-lg mt-6">

        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Animate Your Ideas with Our Motion Graphic <br /> Design
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
            src="https://i.ibb.co/7NGk2mnc/Motion-Graphics.png"
            alt="Motion Graphic"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>
      {/* Large Image Section */}
      <div className="w-full sm:w-[800px] md:w-[1200px] mx-auto my-20">
        <img
          className="w-full h-full rounded-2xl"
          src="https://i.ibb.co/q34988M8/hero-ce7bdf6b.webp"
          alt=""
        />
      </div>
      {/* Slider Section */}
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <img
            src="https://i.ibb.co.com/sJjKjJR8/istockphoto-478177202-612x612.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <img
            src="
https://i.ibb.co.com/pv7vfrMk/professional-Motion-Graphic-Designer-In-Bangladesh.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img
            src="https://i.ibb.co.com/nN1GwydT/abstract-dynamic-pattern-wallpaper-vector-53876-43459-1.jpg"
            alt=""
          />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="https://i.ibb.co.com/Ps4dQZ53/Vector-mobile.jpg" alt="" />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img
            src="https://i.ibb.co.com/DPQwB6L8/the-use-of-animation-in-modern-graphic-design.webp"
            alt=""
          />
        </div>
      </div>

      {/* technology sections */}
      <TechnologyUses></TechnologyUses>

      {/* faq  */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className=" text-4xl text-start font-bold text-gray-900 my-10">
              What Do You Expect from Our Motion <br /> Graphic Services
            </h1>
            <div className="">
              {/* Question 1 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Customized Creative Concepts
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Every project starts with a unique idea tailored to your
                  brand’s goals and audience. Expect creative concepts that not
                  only align with your messaging but also stand out in the
                  digital landscape, capturing attention and sparking interest.
                </div>
              </div>

              {/* Question 2 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Dynamic Storytelling
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Through the art of motion graphics, we transform your message
                  into an engaging story. Our designs are not just visually
                  appealing; they're structured to guide your audience through a
                  narrative journey, making complex information digestible and
                  entertaining.
                </div>
              </div>

              {/* Question 3 */}
              <div className="collapse collapse-plus border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Brand Identity
                </div>
                <div className="collapse-content text-sm text-gray-700 ">
                  Motion graphics add a new dimension to your brand identity,
                  making it more dynamic and memorable. Expect animations that
                  reflect your brand’s personality, using consistent colors,
                  typography, and style to strengthen brand recognition across
                  all platforms.
                </div>
              </div>

              {/* Question 4 */}
              <div className="collapse collapse-plus   border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  High-Quality Animation
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Quality is paramount. Our motion graphics are crafted with
                  precision and artistic excellence, employing cutting-edge
                  techniques and software. The result is smooth, high-resolution
                  animations that look fantastic on any screen.
                </div>
              </div>

              {/* Question 5 */}
              <div className="collapse collapse-plus  border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Engagement Boost plus
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Motion graphics are inherently engaging. By incorporating them
                  into your digital marketing strategy, you can significantly
                  increase viewer engagement, encouraging shares, likes, and
                  comments, which in turn boosts your visibility and reach.
                </div>
              </div>

              {/* Question 6 */}
              <div className="collapse collapse-plus  border-b">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Versatile Content Applications
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Whether it’s social media content, website headers, explainer
                  videos, or digital advertisements, our motion graphics are
                  versatile and adaptable. Expect content that’s not only
                  eye-catching but also suitable for a wide range of media
                  platforms.
                </div>
              </div>

              {/* Question 7 */}
              <div className="collapse collapse-plus border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Social Media Benefits
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Videos and animated content are favored by search engine
                  algorithms and social media platforms alike. Integrating our
                  motion graphics into your content strategy can improve SEO
                  rankings and enhance social media performance, driving more
                  traffic to your site.
                </div>
              </div>

              {/* Question 8 */}
              <div className="collapse collapse-plus  border-b ">
                <input type="checkbox" />
                <div className="collapse-title font-semibold text-gray-900">
                  Professional Collaboration and Support
                </div>
                <div className="collapse-content text-sm text-gray-700">
                  Our team works closely with you throughout the entire process,
                  from initial concept to final delivery. Expect a collaborative
                  approach, with regular updates and the flexibility to
                  incorporate your feedback, ensuring the final product
                  perfectly aligns with your vision.
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
      {/* feedback sections */}
      <Testimonial></Testimonial>

      {/* faq sections here */}
      <div className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-xl my-16">
        <p className="text-center pt-10 text-lg text-white">Find Answer</p>
        <h1 className="text-center text-3xl font-bold text-white">
          Frequently Asked Question
        </h1>
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="space-y-2 bg-blue-900 text-white p-4 rounded-lg">
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Why are motion graphics required for visual communication?
              </div>
              <div className="collapse-content text-white  text-sm ">
                Motion graphics involve animated visual elements, enhancing
                storytelling and conveying information dynamically for engaging
                and impactful communication.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Can haque digital animate existing logos for a dynamic brand
                presentation? whiteplus
              </div>
              <div className="collapse-content text-sm text-white ">
                Certainly. We specialize in logo animation, transforming static
                logos into dynamic, memorable sequences that enhance brand
                recognition and engagement.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                How can motion graphics enhance my social media ads?
              </div>
              <div className="collapse-content text-sm text-white ">
                Motion graphics add dynamic elements to social media ads,
                capturing attention and conveying messages effectively in a
                visually engaging and memorable way.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                What industries or projects can benefit from explainer videos
                with motion graphics? whiteplus
              </div>
              <div className="collapse-content text-sm text-white ">
                Explainer videos with motion graphics are versatile, benefiting
                various industries by simplifying complex concepts, educating
                audiences, and enhancing overall communication.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Can haque digital create character animations for storytelling
                or branding purposes?
              </div>
              <div className="collapse-content text-sm text-white ">
                Absolutely. We excel in character animation, bringing stories
                and brand elements to life with animated characters that
                resonate and entertain audiences effectively.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                How long does completing a motion graphics project with haque
                digital take?
              </div>
              <div className="collapse-content text-sm text-white ">
                Project timelines vary based on complexity. We provide estimated
                timelines upon project initiation, ensuring the timely delivery
                of high-quality motion graphics.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Can haque digital incorporate existing branding elements into
                motion graphics designs? whiteplus
              </div>
              <div className="collapse-content text-sm text-white ">
                Yes, we seamlessly integrate existing branding elements into
                motion graphics, maintaining consistency and reinforcing your
                brand identity within dynamic visual sequences.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                How does haque digital ensure that motion graphics align with my
                brand's visual identity?
              </div>
              <div className="collapse-content text-sm text-white ">
                We adhere to established brand guidelines, ensuring motion
                graphics designs align with your brand's color schemes,
                typography, and overall visual identity for consistency.
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

export default MotionGrapic;
