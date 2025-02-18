import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";
import TechnologyUses from "../../SharedPage/TechnologyUses";

const WebDevelopment = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-10 rounded-xl shadow-lg mt-6">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Elevate Your Business with High-Performance, SEO-Optimized Websites
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Transform your online presence with expert web development! We
            specialize in **fast, responsive, and SEO-optimized** websites
            tailored to your business needs. Whether it's a corporate site,
            e-commerce platform, or custom web application, our solutions ensure
            seamless functionality, modern design, and an exceptional user
            experience across all devices.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/vKCvgBw/Online-world-amico.png"
            alt="Web Development"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* second sections */}
      {/* 2nd Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-10 rounded-xl  my-10">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Win Hearts with Our <br /> Website Development <br />
            Process
          </h2>
          <p className="text-gray-700 mt-4  sm:text-lg md:text-xl leading-relaxed">
            <strong>Discovery:</strong>We start by getting to know your
            business, your target audience, and your objectives. This allows us
            to create a roadmap for a successful project. <br />
            <strong>Design: </strong>Our talented designers work closely with
            you to bring your vision to life. Whether you're looking for a
            modern design or something more creative, we have the expertise to
            deliver. <br />
            <strong>Development:</strong>Once the design is approved, our team
            of developers gets to work bringing it to life. Using clean,
            efficient code, we ensure that your website is not only visually
            stunning but also fast, secure, and <br />
            <strong>Testing and Launch:</strong> Before your website goes live,
            we conduct rigorous testing to identify and fix any issues. Once
            everything is running smoothly, we launch your website and monitor
            its performance. <br />
            <strong>Ongoing Support:</strong>Our relationship doesn't end once
            your website is live. We offer ongoing support and maintenance to
            keep your website running smoothly.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end  md:mt-0">
          <img
            src="https://i.ibb.co.com/TxWLYD0J/Whats-App-Image-2025-01-22-at-14-20-16-17964eda.jpg"
            alt="UI/UX Design"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] lg:h-[450px]  rounded-lg "
          />
        </div>
      </div>

      {/* Comparison Section */}
      <div className="mt-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800">
          Other Website Development Service
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {/* Haque Digital */}
          <div className="bg-blue-50 rounded-lg shadow-lg  py-10">
            <h2 className="text-2xl font-semibold text-blue-900">
              Haque Digital
            </h2>
            <ul className="mt- space-y-6 mt-4  text-gray-700">
              <li className="flex items-start gap-2">
                ✅ Fully customizable e-commerce websites tailored to business
                needs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Secure payment gateway integration for hassle-free
                transactions.
              </li>
              <li className="flex items-start gap-2">
                ✅ Seamless brand identity showcasing with unique designs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Mobile-friendly and optimized for all devices.
              </li>
              <li className="flex items-start gap-2">
                ✅ 24/7 customer support for smooth business operations.
              </li>
              <li className="flex items-start gap-2">
                ✅ Seamless brand identity showcasing with unique designs.
              </li>
              <li className="flex items-start gap-2">
                ✅ Mobile-friendly and optimized for all devices.
              </li>
              <li className="flex items-start gap-2">
                ✅ 24/7 customer support for smooth business operations.
              </li>
            </ul>
          </div>

          {/* Other Agencies */}
          <div className="bg-red-50 p-6 rounded-lg shadow-lg py-10">
            <h2 className="text-2xl font-semibold text-red-900">
              Other Agencies
            </h2>
            <ul className="mt-4 space-y-6 text-gray-700">
              <li className="flex items-start gap-2">
                ❌ Non-customizable templates with limited flexibility.
              </li>
              <li className="flex items-start gap-2">
                ❌ Lack of advanced security measures for payments.
              </li>
              <li className="flex items-start gap-2">
                ❌ Generic designs that fail to showcase unique brand identity.
              </li>
              <li className="flex items-start gap-2">
                ❌ Poor mobile optimization affecting user experience.
              </li>
              <li className="flex items-start gap-2">
                ❌ Limited or no dedicated customer support.
              </li>
              <li className="flex items-start gap-2">
                ❌ Lack of advanced security measures for payments.
              </li>
              <li className="flex items-start gap-2">
                ❌ Generic designs that fail to showcase unique brand identity.
              </li>
              <li className="flex items-start gap-2">
                ❌ Poor mobile optimization affecting user experience.
              </li>
              <li className="flex items-start gap-2">
                ❌ Limited or no dedicated customer support.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Top Section */}
      <div>
        {/* Section Title */}
        <div className=" max-w-6xl mx-auto bg-blue-100 md:p-10 my-16 rounded-xl">
          <h1 className="text-center font-bold text-4xl text-blue-900 mt-6">
            Our Strategic Approach to Web Development Solutions
          </h1>
          {/* Content Section */}
          <div className="flex flex-col items-center md:flex-row  rounded-xl  mt-6">
            {/* Text Section */}
            <div className="text-center md:text-left md:ml-8 flex-1">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">
                Tailored Solutions for Diverse Industries
              </h2>
              <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
                <li>
                  <strong>Corporate Websites:</strong> Professional and
                  brand-focused platforms.
                </li>
                <li>
                  <strong>Educational Websites:</strong> Interactive and
                  engaging e-learning experiences.
                </li>
                <li>
                  <strong>News & Media Websites:</strong> Fast, scalable, and
                  content-rich portals.
                </li>
                <li>
                  <strong>Personal Websites:</strong> Showcasing portfolios,
                  blogs, and personal brands.
                </li>
                <li>
                  <strong>Health & Wellness Websites:</strong> Secure,
                  informative, and user-friendly platforms.
                </li>
                <li>
                  <strong>Real Estate Websites:</strong> Feature-rich listings,
                  maps, and property management tools.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
              <img
                src="https://i.ibb.co.com/MybBtzZL/Mobile-UI-UX-amico.png"
                alt="Web Development"
                className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* technology sections */}
      <TechnologyUses></TechnologyUses>

      <div className="max-w-6xl mx-auto my-10 px-6 md:px-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-900 ">
        Why Choose Haque Digital?
      </h2>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:gap-32  p-6 sm:p-10 md:p-12 lg:p-16 gap-10 rounded-xl ">
        
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src="https://i.ibb.co/tMK052DT/website-maintainence.jpg"
            alt="Website Maintenance"
            className="w-full max-w-[400px] md:max-w-[450px] rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-800 mb-4">
            Win Hearts with Our Website Development Process
          </h3>
          <ul className="text-gray-700 text-base sm:text-lg leading-relaxed space-y-3">
            <li>
              <strong>✅ Customized Solutions:</strong> Unique, brand-focused website designs tailored to your goals.
            </li>
            <li>
              <strong> User-Centric Design:</strong> Intuitive, engaging, and accessible UI/UX for better engagement.
            </li>
            <li>
              <strong> High Performance & Security:</strong> Optimized for speed, SEO, and fortified with security.
            </li>
            <li>
              <strong> Continuous Support & Maintenance:</strong> Regular updates to keep your site secure and efficient.
            </li>
          </ul>
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
              Can I Customize My Website Design?
              </div>
              <div className="collapse-content text-white  text-sm ">
             Haque digital offers a wide range of customizable templates and design elements, allowing you to tailor your website to match your unique style.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              What Types Of Websites Can I Create?
              </div>
              <div className="collapse-content text-sm text-white ">
              Haque digital supports diverse website types, from portfolios and blogs to e-commerce sites. It's versatile for personal and business use.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Is Haque digital Mobile-Friendly?
              </div>
              <div className="collapse-content text-sm text-white ">
              All websites created with VISER X are optimized for mobile devices, ensuring a seamless and responsive user experience across various screens.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can I Integrate Third-Party Apps?
              </div>
              <div className="collapse-content text-sm text-white ">
              Haque digital supports easy integration with popular third-party apps, enhancing your website's functionality, performance, and user engagement.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              What Hosting Options Does haque digital  Offer?
              </div>
              <div className="collapse-content text-sm text-white ">
           Haque digital provides reliable hosting services, ensuring your website is secure and performs optimally. Choose a plan that suits your needs.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Is SEO Optimization included?
              </div>
              <div className="collapse-content text-sm text-white ">
              Haque digital includes built-in SEO tools to help you optimize your website for search engines, improving its visibility, ranking, and overall performance.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can I sell products on my site?
              </div>
              <div className="collapse-content text-sm text-white ">
              Yes, haque digital has robust e-commerce features, allowing you to set up and manage an online store effortlessly, complete with secure payment options.

              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Are There Security Features In Place?
              </div>
              <div className="collapse-content text-sm text-white ">
            Haque digital prioritizes website security, implementing measures to protect your site and users from potential threats.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              How Do I Get Customer Support?
              </div>
              <div className="collapse-content text-sm text-white ">
          Haque digital offers 24/7 customer support via chat and email, ensuring you receive prompt assistance for any inquiries or issues.

              </div>
            </div>
          </div>
        </div>
      </div>

    {/* lets talk sections */}
    <LetsTalk></LetsTalk>
    </div>
  );
};

export default WebDevelopment;
