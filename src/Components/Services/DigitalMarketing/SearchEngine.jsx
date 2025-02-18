import { useState } from "react";
import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";

const SearchEngine = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "SEO Audit",
      description:
        "Our comprehensive SEO Audit is the first step towards transforming your website into a traffic magnet...",
      imageUrl: "https://i.ibb.co/Jj3LFCR/4547777-4158.jpg",
    },
    {
      title: "Technical Issue Fixing",
      description:
        "At the heart of any high-ranking website is a flawless technical setup...",
      imageUrl: "https://i.ibb.co/gM6LMzt/Catalyst-Main.jpg",
    },
    {
      title: "Keyword Research",
      description:
        "Our Keyword Research service goes beyond finding terms; it's about unlocking your customers' language...",
      imageUrl: "https://i.ibb.co/N6qnskg/keyword-research-142.webp",
    },
    {
      title: "Content Writing",
      description:
        "Our content Writing service centers on creating meaningful and engaging content...",
      imageUrl: "https://i.ibb.co/679R6Ls/content-writer.png",
    },
    {
      title: "On-Page SEO",
      description:
        "Our On-Page SEO service fine-tunes the elements of your website that affect your search engine rankings...",
      imageUrl: "https://i.ibb.co/F4bvqSC/cluster-on-page-seo.jpg",
    },
    {
      title: "Link Building",
      description:
        "Our link-building service focuses on developing a robust backlink profile...",
      imageUrl: "https://i.ibb.co/8LT5ttr/628da59e969838d3ce879baf-link-building.png",
    },
    {
      title: "Guest Posting",
      description:
        "Our Guest Posting service leverages the power of collaboration to expand your brand's reach...",
      imageUrl: "https://i.ibb.co/wrsjbLWR/selection-146.png",
    },
    {
      title: "Reporting",
      description:
        "Our Reporting service provides detailed, transparent insights into your SEO campaign's performance...",
      imageUrl: "https://i.ibb.co/9H7SsN01/Social-Media-Report-Template-Example.png",
    },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-10 rounded-xl shadow-lg mt-6">
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Elevate Your Business with High-Performance, SEO-Optimized Websites
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Transform your online presence with expert web development! We
            specialize in fast, responsive, and SEO-optimized websites tailored
            to your business needs.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/mwYhmPY/SEO-bro-1.png"
            alt="Web Development"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* How Do We Work for SEO? */}
      <section className="pt-10 px-4 md:px-6 lg:px-12">
        <h1 className="text-blue-900 font-bold text-center text-3xl md:text-4xl mb-6">
          How Do We Work for SEO?
        </h1>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 ">
            {sections.map((section, index) => (
              <button
                key={index}
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
                className={`w-full sm:w-auto bg-blue-50 px-4 py-2 rounded-lg text-blue-900 hover:bg-blue-200 transition-all text-center ${
                  activeSection === index ? "bg-blue-200" : ""
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col space-y-6">
            {sections.map((section, index) => (
              <div key={index}>
                {activeSection === index && (
                  <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-md mt-4 space-y-6 lg:space-y-0">
                    <div className="flex flex-col lg:w-1/2">
                      <h2 className="text-2xl font-bold text-blue-900">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 mt-4">{section.description}</p>
                    </div>
                    <div className="lg:w-1/2 mt-4 lg:mt-0">
                      <img
                        src={section.imageUrl}
                        alt={section.title}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
           {/*  */}
           <section className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 p-8 md:p-12 rounded-xl">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
              What to Expect from Haque Digital's <br /> SEO Campaign?
            </h1>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Building Domain Authority
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Haque Digital strengthens your website's domain authority with strategic link-building, content marketing, and technical SEO. Higher domain authority means better rankings and increased trust from search engines, leading to more organic traffic and customer engagement.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Content-Rich Website
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Our SEO campaign focuses on crafting high-quality, keyword-optimized content that ranks higher on search engines and engages your audience. Informative blog posts, landing pages, and SEO-friendly web content will position Haque Digital as an industry leader.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Significant Organic Traffic Growth
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Our proven SEO strategies improve your website’s visibility, ensuring a steady increase in organic traffic. We focus on ranking your business for high-intent keywords, driving potential customers directly to your services.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Targeted Audience Reach
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We ensure that your website attracts highly targeted visitors who are genuinely interested in your services. Our SEO tactics help connect Haque Digital with the right audience, boosting conversions and sales.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Conversion Rate Optimization (CRO)
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  We don’t just drive traffic—we ensure visitors take action. By optimizing page layouts, improving user experience, and implementing strong calls-to-action, we turn traffic into valuable leads and customers for Haque Digital.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Increased Brand Visibility in Search Engines
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Our SEO strategies ensure Haque Digital appears prominently on Google and other search engines. By enhancing brand presence through targeted keyword optimization and local SEO, we help your business stand out in the competitive digital landscape.
                </p>
              </details>
            </div>
          </div>

          {/* FAQ Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://i.ibb.co/BH9PS5sY/imagefaq-d48f3d73.png"
              alt="Haque Digital SEO FAQs"
              className="w-full max-w-sm object-cover"
            />
          </div>
        </div>
      </section>
      {/* feedback sections  */}
      <Testimonial></Testimonial>
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
              Will I Get an SEO-ready Website?
            </div>
            <div className="collapse-content text-sm text-white">
              Certainly! Our SEO packages include thorough keyword research
              identifying targeted keywords aligned with your niche to attract
              interested and relevant visitors
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How Many Links Can I Expect?
            </div>
            <div className="collapse-content text-sm text-white">
              Explore our SEO packages to discover the backlink quantities we
              provide. We prioritize ranking on search engines, focusing on
              quality backlinks. All links are acquired from internationally
              renowned websites.
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How Long Will It Take to See Results?
            </div>
            <div className="collapse-content text-sm text-white">
              Results vary depending on competitors and complexity, but
              noticeable improvements may take 3 to 6 months. We ranked web
              pages within a week.
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              Will Your Service Improve My Sales?
            </div>
            <div className="collapse-content text-sm text-white">
              Absolutely! Our service is designed to enhance visibility, drive
              targeted traffic, and ultimately boost sales for your business. We
              improve your SEO so that you get successful leads.
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How can I get unique and structured content for my site?
            </div>
            <div className="collapse-content text-sm text-white">
              We specialize in crafting unique, structured content tailored to
              your site. Our skilled writers ensure engaging, SEO-friendly
              material for optimal impact.
            </div>
          </div>

          {/* Question 6 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              How will you audit the SEO performance of my website? whiteplus
            </div>
            <div className="collapse-content text-sm text-white">
              We conduct a thorough SEO audit, examining on-page elements,
              backlinks, content quality, and technical aspects, ensuring
              comprehensive insights for optimization.
            </div>
          </div>

          {/* Question 7 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              Do You Offer Customer Support?
            </div>
            <div className="collapse-content text-sm text-white">
              Certainly! We provide personalized support tailored to your needs,
              ensuring a customized and effective solution for your business.
            </div>
          </div>

          {/* Question 8 */}
          <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
            <input type="checkbox" />
            <div className="collapse-title font-semibold text-white">
              Is There a Minimum Term Contract?
            </div>
            <div className="collapse-content text-sm text-white">
              We have project packages, yet we offer flexible contract terms
              after discussion. Choose the duration that suits your needs,
              ensuring adaptable and convenient arrangements for your business.
            </div>
          </div>
        </div>
      </section>
<LetsTalk></LetsTalk>
    </div>
  );
};

export default SearchEngine;
