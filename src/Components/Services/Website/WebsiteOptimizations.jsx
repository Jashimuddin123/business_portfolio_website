import { FaShieldAlt, FaSyncAlt, FaTachometerAlt } from "react-icons/fa";

const WebsiteOptimizations = () => {
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
              src="https://i.ibb.co.com/23skX7HV/sliderimages-c86e96c1.png"
              alt="Website Maintenance"
              className="w-full sm:w-80 md:w-96 lg:w-[450px] object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* 2nd sections */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
              What Do You Expect from Our Website Speed Optimization Services?
            </h1>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Performance Analysis:
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We start with thoroughly assessing your website to identify
                  factors that are slowing it down. We analyze various elements
                  using advanced tools such as load times, code efficiency, and
                  server response times.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Image Optimization:
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Large, unoptimized images are a common cause of slow website
                  speeds. We employ compression, proper format selection, and
                  responsive images to reduce file sizes without compromising
                  quality. This ensures faster loading times and a better user
                  experience across devices
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Minification of CSS, JavaScript, and HTML:
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We can significantly reduce file sizes by removing unnecessary
                  characters from your website's code (like whitespace,
                  comments, and unused code). This process, known as
                  minification, helps speed up page rendering and decreases load
                  times.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Leveraging Browser Caching: plus
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We optimize your website to make effective use of browser
                  caching. This means instructing browsers on how long to store
                  the downloaded resources of your website. It reduces the need
                  for repeated loading of static resources, making subsequent
                  visits to your site significantly faster.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Optimizing Server Response Time:
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Your web server's performance is critical to how quickly your
                  website loads. We assess and optimize server configuration,
                  including upgrading your hosting solution if necessary, and
                  apply best practices to improve server response times.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Reducing Redirects:
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Each redirect on your website triggers an HTTP request,
                  increasing load time. We identify and minimize unnecessary
                  redirects, streamlining the path to your content and improving
                  the overall speed of your site.
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
                Speed Optimization
              </h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We ensure your website is always updated with the latest software,
              security patches, and backups, keeping it secure and running
              smoothly.
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
              Our continuous security monitoring prevents cyber threats,
              ensuring your website remains safe from malware, hacking, and
              vulnerabilities.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <FaTachometerAlt className="text-blue-700 text-3xl" />
              <h2 className="text-xl font-semibold text-gray-900">
                Performance Enhancement
              </h2>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              We enhance your website’s speed and performance with caching,
              image optimization, and fast-loading strategies to improve user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <div className="mt-20 text-center max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-800">
          Compare to other Website Speed Optimization Service
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
      {/* freequintly sections here */}
      <section className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-md p-10 mb-10">
        <p className="text-center text-lg text-white">Find Answer</p>
        <h1 className="text-center text-3xl font-bold text-white">
          Frequently Asked Questions
        </h1>

        <div className="mt-10 space-y-4">
          {/* Question 1 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How does Haque Digital improve my website's speed?
            </div>
            <div className="collapse-content text-sm text-white">
              We use speed optimization techniques such as caching, image
              compression, script minimization, and server-side improvements to
              ensure your website loads quickly and performs smoothly.
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              What is caching and how does it improve my website's speed?
            </div>
            <div className="collapse-content text-sm text-white">
              Caching stores frequently accessed data in a temporary storage,
              reducing the time it takes to load pages, which significantly
              boosts website speed.
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              Can image optimization improve my website's performance?
            </div>
            <div className="collapse-content text-sm text-white">
              Yes, optimizing images by compressing them without losing quality
              reduces load times and improves the overall performance of your
              website.
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How does script minimization help my website load faster?
            </div>
            <div className="collapse-content text-sm text-white">
              Minimizing scripts removes unnecessary spaces, comments, and code,
              reducing file sizes and allowing your website to load more
              quickly.
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              What tools does Haque Digital use for website speed testing?
            </div>
            <div className="collapse-content text-sm text-white">
              We use industry-standard tools such as Google PageSpeed Insights,
              GTmetrix, and Lighthouse to analyze and optimize website
              performance.
            </div>
          </div>

          {/* Question 6 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How long does it take to see improvements in website speed?
            </div>
            <div className="collapse-content text-sm text-white">
              The improvements can be seen immediately after the optimization
              process is complete, but ongoing optimizations will ensure
              consistent performance.
            </div>
          </div>

          {/* Question 7 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              Does website speed optimization affect SEO?
            </div>
            <div className="collapse-content text-sm text-white">
              Yes, faster website loading times directly impact SEO rankings as
              search engines favor websites that provide a better user
              experience.
            </div>
          </div>

          {/* Question 8 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How do I get started with Haque Digital's website speed
              optimization services?
            </div>
            <div className="collapse-content text-sm text-white">
              Simply reach out to us, and we'll assess your website's speed and
              performance, then create a custom optimization plan to boost its
              speed.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteOptimizations;
