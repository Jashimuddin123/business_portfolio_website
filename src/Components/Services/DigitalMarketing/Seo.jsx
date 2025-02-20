import React, { useState, useEffect } from "react";
import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";

const Seo = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      title: "SEO Audit",
      description:
        "Our comprehensive SEO Audit is the first step towards transforming your website into a traffic magnet. We analyze your site's structure, content, and user experience to identify barriers to search engine visibility. Using advanced tools and expert insights, we uncover opportunities for improvement, from meta tags to mobile responsiveness. This thorough evaluation sets the stage for an SEO strategy that aligns with your business goals, ensuring your website ranks higher and delivers a remarkable user experience..",
      imageUrl: "https://i.ibb.co.com/Jj3LFCRy/4547777-4158.jpg",
    },
    {
      title: "Technical Issue Fixing",
      description:
        "At the heart of any high-ranking website is a flawless technical setup. Our Technical Issue Fixing service addresses the critical, often invisible, technical SEO aspects that can deter your site's search engine performance. We ensure your website's foundation is solid, from site speed optimization and secure connections (HTTPS) to crawl errors and schema markup. By resolving these technical issues, we make your website more attractive to search engines and users, paving the way for improved visibility and engagement..",
      imageUrl: "https://i.ibb.co.com/gM6LMztF/Catalyst-Main.jpg",
    },
    {
      title: "Keyword Research",
      description:
        "Our Keyword Research service goes beyond finding terms; it's about unlocking your customers' language. We dive deep into your industry, competition, and search trends to identify high-value keywords that align with your customer's intent. This strategic approach ensures that every piece of content on your website attracts visitors and engages them with relevance and value, setting the stage for increased conversions and loyalty..",
      imageUrl: "https://i.ibb.co.com/N6qnskgX/keyword-research-142.webp",
    },
    {
      title: "Content Writing",
      description:
        "Our content Writing service centers on creating meaningful and engaging content according to your audience's needs and search behaviors. By blending SEO best practices with compelling storytelling, we produce articles, blog posts, and web copy that not only ranks well but also informs, entertains, and converts. From industry-specific insights to solution-focused advice, our content positions your brand as an authority, building trust with your audience.",
      imageUrl: "https://i.ibb.co.com/679R6Ls8/content-writer.png",
    },
    {
      title: "On-Page SEO",
      description:
        "Our On-Page SEO service fine-tunes the elements of your website that affect your search engine rankings and user experience. From optimizing title tags and headings to enhancing internal linking and image alt texts, we ensure every page on your site is fully optimized. This meticulous attention to detail boosts your visibility in search results and improves user engagement, driving higher conversion rates..",
      imageUrl: "https://i.ibb.co.com/F4bvqSCB/cluster-on-page-seo.jpg",
    },
    {
      title: "Link Building",
      description:
        "Our link-building service focuses on developing a robust backlink profile that enhances your site's authority and search engine rankings. By securing high-quality, relevant links from reputable sources, we not only improve your site's visibility but also its credibility. This strategic link-building approach drives targeted traffic to your site, fostering growth and building your brand's reputation in your industry..",
      imageUrl:
        "https://i.ibb.co.com/8LT5ttr2/628da59e969838d3ce879baf-link-building.png",
    },
    {
      title: "Guest Posting",
      description:
        "Our Guest Posting service leverages the power of collaboration to expand your brand's reach and authority. By identifying and securing guest posting opportunities on relevant, high-authority sites, we help you tap into new audiences, driving traffic back to your site. This boosts your SEO performance and positions your brand as a thought leader, enhancing your visibility and credibility across the web..",
      imageUrl: "https://i.ibb.co.com/wrsjbLWR/selection-146.png",
    },
    {
      title: "Reporting",
      description:
        "Our Reporting service provides detailed, transparent insights into your SEO campaign's performance. From keyword rankings and traffic analytics to backlink profiles and conversion rates, our reports give you a comprehensive view of your SEO success. This ongoing analysis allows us to refine our strategies, ensuring your SEO efforts deliver maximum impact and ROI..",
      imageUrl:
        "https://i.ibb.co.com/9H7SsN01/Social-Media-Report-Template-Example.png",
    },
  ];

  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center bg-[#E2E2FF] p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug">
              Best SEO Services to <br /> Drive Business <br /> Revenue
            </h2>
            <p className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
              Elevate your online presence with our Website Maintenance
              Solutions. Ensure peak performance, security, and seamless user
              experiences. Our tailored solutions provide a reliable foundation
              for long-term digital success.
            </p>
            <button className="mt-6 mb-4 px-6 py-3 text-white font-medium text-lg rounded-lg bg-blue-600 hover:bg-blue-700 transition-all">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div>
            <div className="flex flex-col items-center space-y-4">
              {/* 100% div - Top with Gradient */}
              <div className="relative border-8 border-white p-4 rounded-full flex flex-col items-center justify-center text-center w-48 h-48 overflow-hidden group hover:rotate-[-360deg] transition-transform duration-500 bg-[#E2E2FF]  shadow-lg">
                <h1 className="text-3xl font-bold text-blue-900">100%</h1>
                <p>Organic Traffic growth</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center mt-8 md:mt-0">
              <div className="flex flex-col items-center justify-center space-y-4 mx-4">
                {/* 200% div - Left with Gradient */}
                <div className="relative border-8 border-white p-4 rounded-full flex flex-col items-center justify-center text-center w-48 h-48 overflow-hidden group hover:rotate-[-360deg] transition-transform duration-500 bg-[#DBF0FF] shadow-lg">
                  <h1 className="text-3xl font-bold text-blue-950">10Max</h1>
                  <p>More keyword visibility</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                {/* 300% div - Right with Gradient */}
                <div className="relative border-8 mb-10 border-white p-4 rounded-full flex flex-col items-center justify-center text-center w-48 h-48 overflow-hidden group hover:rotate-[-360deg] transition-transform duration-500 bg-[#fae9e9] shadow-lg">
                  <h1 className="text-3xl font-bold text-blue-950">#1</h1>
                  <p>Ranking in 90days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* how does */}
      <section className="py-10 px-4 md:px-6 lg:px-12">
      <h1 className="text-blue-900 font-bold text-center text-3xl md:text-4xl mb-6">
        How Do We Work for SEO?
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => setActiveSection(activeSection === index ? null : index)}
              className="w-full sm:w-auto bg-blue-50 px-4 py-2 rounded-lg text-blue-900 hover:bg-blue-200 transition-all text-center"
            >
              {section.title}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-8 space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              {activeSection === index && (
                <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-lg shadow-md mt-4 space-y-6 lg:space-y-0">
                  <div className="flex flex-col lg:w-1/2">
                    <h2 className="text-2xl font-bold text-blue-900">{section.title}</h2>
                    <p className="text-gray-700 mt-4">{section.description}</p>
                  </div>
                  <div className="lg:w-1/2 mt-4 lg:mt-0">
                    <img
                  
                      src={section.imageUrl}
                      alt={section.title}
                      className="w-full h-96   ml-10 rounded-lg shadow-md"
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
      {/* 2nd Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto rounded-xl ">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            516% Organic Traffic <br /> Growth
          </h2>
          <p className="text-gray-700 mt-4  sm:text-lg md:text-xl leading-relaxed">
            We achieved a 516% increase in Clipping Path 360's organic traffic
            by implementing a multifaceted approach. Our services involve
            in-depth keyword research, content optimization, technical SEO
            enhancements, and off-page strategies. <br />
            Through link building, article writing and onsite optimization, the
            firm has generated significant visibility in its local market. As a
            result, the conversion rate increases and the bounce rate
            diminishes.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end  md:mt-0">
          <img
            src="https://i.ibb.co.com/8DtmzSCx/2148541989.jpg"
            alt="UI/UX Design"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] lg:h-[450px]  rounded-lg "
          />
        </div>
      </div>
      {/*  */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row  gap-20 items-center bg-blue-50 p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Image Section */}
          <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="https://i.ibb.co.com/SXf8x3VY/unique-Update-1e1840d2.webp"
              alt="Website Maintenance"
              className="w-full sm:w-80 md:w-96 lg:w-[450px] object-cover rounded-lg"
            />
          </div>
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
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12  p-8 md:p-12 rounded-xl ">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
              What you Expect from Our SEO <br /> Campaign?
            </h1>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Building Domain Authority
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Imagine your website as a reputable go-to source in your
                  industry. That's what we aim for by building your domain
                  authority. Through meticulous link-building, engaging content,
                  and optimizing your site’s structure, we make your website
                  more trustworthy to search engines. This means when customers
                  are looking for expertise, your site stands out as a leader
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Content-Rich Website
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Your website will transform into a treasure of information
                  that your audience values. By crafting high-quality, relevant
                  content, we not only satisfy your audience's queries but also
                  position you as an authority. This isn't just about quantity;
                  it's about delivering value that keeps users coming back for
                  more
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Significant Number of Organic Traffic
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Picture a steady stream of visitors naturally finding their
                  way to your site. That's the power of organic traffic. We
                  optimize your website to rank higher for relevant keywords,
                  making it easier for your target audience to find you. More
                  visibility means more visitors, and more visitors mean more
                  opportunities for conversion.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Targeted Traffic
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  It’s not just about attracting more visitors; it's about
                  attracting the right ones. Our SEO strategies are designed to
                  draw in the audience that is most likely to benefit from your
                  products or services. By focusing on targeted traffic, we
                  ensure that the people who visit your site are those with a
                  genuine interest in what you offer..
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Conversion Optimization
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  What happens when a visitor lands on your site? The journey
                  leads them to take action. Whether it’s making a purchase,
                  signing up for a newsletter, or filling out a contact form,
                  optimization tactics improve the user experience and guide
                  visitors towards converting. It’s about turning traffic into
                  tangible outcomes.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                  Increase Brand Presence in Search Engine
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                  Imagine your brand becoming synonymous with your industry’s
                  top searches. We enhance your visibility on search engines,
                  ensuring that when potential customers search for services or
                  products you offer, your brand appears prominently. An
                  increased brand presence not only boosts traffic but also
                  creates your status in the digital marketplace.
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
                ✅ We meticulously craft strategies tailored to your business,
                ensuring a precise and effective approach that aligns with your
                goals.
              </li>
              <li className="flex items-start gap-2">
                ✅ Our commitment to innovation sets us apart, incorporating the
                latest technologies and trends to keep your SEO ahead of the
                curve.
              </li>
              <li className="flex items-start gap-2">
                ✅We go beyond keywords, focusing on holistic optimization that
                considers content quality, user experience.
              </li>
              <li className="flex items-start gap-2">
                ✅Experience a new level of transparency with comprehensive,
                real-time reporting that keeps you informed about the impact of
                our SEO efforts.
              </li>
              <li className="flex items-start gap-2">
                ✅ Our success stories speak volumes. Explore a track record of
                measurable results and satisfied clients across diverse
                industries.
              </li>
              <li className="flex items-start gap-2">
                ✅Leverage the power of data-driven decision-making, ensuring
                that every strategy is rooted in analytics for optimal
                performance.
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
                ❌ Crafts common strategies and applies them to all clients in
                the same way. So, the SEO campaigns fail in a bad way.
              </li>
              <li className="flex items-start gap-2">
                ❌Still applies the old trends and technologies that is no
                longer supported by search engines like Google or Yahoo.
              </li>
              <li className="flex items-start gap-2">
                ❌Only focuses on common keywords and random links, not ensuring
                the authenticity and unique user experience.
              </li>
              <li className="flex items-start gap-2">
                ❌ Reports you at the end of the project with the most
                successful data, not the time-to-time data to show the ups and
                down cases.
              </li>
              <li className="flex items-start gap-2">
                ❌ Has a limited amount of track record of some non reputed
                companies, instead of local and international brands.
              </li>
              <li className="flex items-start gap-2">
                ❌ Applies assumed decisions and work without clear mission
                goals, as a result cannot find data to imply suitable tactics.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* feedback sections */}
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
      {/* lets talk sections */}
      <LetsTalk></LetsTalk>

    </div>
  );
};

export default Seo;
