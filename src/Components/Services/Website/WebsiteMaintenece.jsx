import React from "react";
import { FaShieldAlt, FaSyncAlt, FaTachometerAlt } from "react-icons/fa";
import LetsTalk from "../../SharedPage/letsTalk";

const WebsiteMaintenece = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center bg-blue-50 p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug">
              Optimize Performance with <br className="hidden md:block" /> Our
              Website Maintenance Services
            </h2>
            <p className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
              Elevate your online presence with our Website Maintenance
              Solutions. Ensure peak performance, security, and seamless user
              experiences. Our tailored solutions provide a reliable foundation
              for long-term digital success.
            </p>
            <button className="mt-6 px-6 py-3 text-white font-medium text-lg rounded-lg bg-blue-600 hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/MDQP1KS7/grapich.png"
              alt="Website Maintenance"
              className="w-full sm:w-80 md:w-96 lg:w-[450px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
              What Do You Expect from Our Website Maintenance Solutions?
            </h1>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Regular Updates
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We keep your website up-to-date with the latest software
                  updates and technologies. Regular CMS, plugin, and script
                  updates prevent security vulnerabilities and improve
                  functionality.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Security Monitoring
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Your website's security is our top priority. We monitor
                  threats, implement strong security measures, and take
                  immediate action to ensure safety from malware and cyber
                  threats.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Performance Optimization
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We focus on speed optimization, caching, and image compression
                  to enhance performance, ensuring fast loading times and
                  improved SEO rankings.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Regular Backups
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We perform regular backups of your website’s files and
                  databases, ensuring quick restoration in case of data loss or
                  security breaches.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Content Updates
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Engaging content is key to audience retention. We update
                  blogs, product listings, and images regularly to keep your
                  website fresh and relevant.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  SEO Monitoring and Updates
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We track search performance, optimize keywords, and adjust
                  meta tags to improve visibility and attract organic traffic.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Technical Support
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Our expert team is always available to assist with queries,
                  troubleshooting, and enhancements for smooth website
                  operations.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Impact of UI/UX Design
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Effective UI/UX improves user satisfaction, navigation, and
                  engagement, increasing retention and overall digital success.
                </p>
              </details>
            </div>
          </div>

          {/* FAQ Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://i.ibb.co/BH9PS5sY/imagefaq-d48f3d73.png"
              alt="FAQ Illustration"
              className="w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* website maintenece sections here */}
      <section className="max-w-7xl mx-auto rounded-2xl px-20 py-16">
      <h1 className="text-blue-900 font-extrabold text-center text-4xl mb-8">
        Website Maintenance Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <FaSyncAlt className="text-blue-700 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Regular Updates & Backups
            </h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            We ensure your website is always updated with the latest software, 
            security patches, and backups, keeping it secure and running smoothly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <FaShieldAlt className="text-blue-700 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Security Monitoring
            </h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our continuous security monitoring prevents cyber threats, ensuring your 
            website remains safe from malware, hacking, and vulnerabilities.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <FaTachometerAlt className="text-blue-700 text-3xl" />
            <h2 className="text-xl font-semibold text-gray-900">
              Performance Optimization
            </h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            We enhance your website’s speed and performance with caching, image 
            optimization, and fast-loading strategies to improve user experience.
          </p>
        </div>
      </div>
    </section>
    <section className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-md p-10">
      <p className="text-center text-lg text-white">Find Answer</p>
      <h1 className="text-center text-3xl font-bold text-white">
        Frequently Asked Questions
      </h1>

      <div className="mt-10 space-y-4">
        {/* Question 1 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            What website maintenance services does Haque Digital offer?
          </div>
          <div className="collapse-content text-sm text-white">
            We provide regular updates, security monitoring, performance optimization, bug fixes, backup management, and content updates to ensure your website runs smoothly.
          </div>
        </div>

        {/* Question 2 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            How often should I update my website?
          </div>
          <div className="collapse-content text-sm text-white">
            Regular updates are recommended at least once a month, including software updates, security patches, and content refreshes to keep your website secure and relevant.
          </div>
        </div>

        {/* Question 3 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            Can Haque Digital help improve my website's speed and performance?
          </div>
          <div className="collapse-content text-sm text-white">
            Yes, we optimize website speed by implementing caching techniques, compressing images, reducing unnecessary scripts, and improving server response times.
          </div>
        </div>

        {/* Question 4 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            How does Haque Digital ensure my website stays secure?
          </div>
          <div className="collapse-content text-sm text-white">
            We implement security best practices such as SSL certificates, firewalls, malware scanning, and regular security updates to protect your website from threats.
          </div>
        </div>

        {/* Question 5 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            Does website maintenance include content updates?
          </div>
          <div className="collapse-content text-sm text-white">
            Yes, we update your website content, including text, images, and blog posts, ensuring your site remains fresh and engaging for visitors.
          </div>
        </div>

        {/* Question 6 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            What happens if my website goes down unexpectedly?
          </div>
          <div className="collapse-content text-sm text-white">
            Our team provides emergency support and troubleshooting to quickly resolve any issues and get your website back online with minimal downtime.
          </div>
        </div>

        {/* Question 7 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            Can Haque Digital help with website backups?
          </div>
          <div className="collapse-content text-sm text-white">
            Yes, we set up automatic website backups to ensure you always have a recent copy of your site in case of data loss or cyberattacks.
          </div>
        </div>

        {/* Question 8 */}
        <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg ">
          <input type="checkbox" />
          <div className="collapse-title font-semibold text-white">
            How do I get started with Haque Digital's website maintenance services?
          </div>
          <div className="collapse-content text-sm text-white">
            Contact us today, and we'll assess your website’s needs, provide a maintenance plan, and ensure your site remains secure, fast, and up-to-date.
          </div>
        </div>
      </div>
    </section>
    {/* lets talk sectionn here */} 
    <LetsTalk></LetsTalk>
    </div>
  );
};

export default WebsiteMaintenece;
