import Testimonial from "../../../Testimonial/Testimonial";
import LetsTalk from "../../SharedPage/letsTalk";

const MediaMarketing = () => {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row items-center bg-[#E2E2FF] p-8 md:p-12 rounded-2xl shadow-xl">
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-snug">
              Social Media
              <br />
              Management Service <br /> for Strong Online <br />
              Presence
            </h2>
            <p className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
              Transform your Online Presence with VISER X's Social Media
              Management Services. It is designed to elevate your brand's online
              visibility, engage your audience, and drive tangible results.
              Whether you're looking to increase brand awareness or boost sales,
              VISER X turns your social media channels into powerful assets.
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
      {/* social management sections */}
      <div className="py-10 bg-gray-50">
        <h1 className="text-4xl text-center font-bold text-blue-900 mb-8">
          Social Media Management Service
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white pb-6 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/CpxDTZC9/2150208239.jpg"
              alt="Social Media"
              className="w-full object-covert h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Social Media Growth Strategy
              </h2>
              <p className="text-gray-600 mt-2">
              Developing a strong social media plan that focuses on audience engagement, brand awareness, and platform-specific strategies to maximize online presence and business growth.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white pb-6 shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/gL4jvjZM/2150208260.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Content Development and Scheduling
              </h2>
              <p className="text-gray-600 mt-2">
              Crafting high-quality, engaging content tailored for each social media platform, ensuring consistent posting schedules to maintain audience interaction and brand visibility effectively.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/JwnQk6S2/2150168648.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Posting Schedule Management
              </h2>
              <p className="text-gray-600 mt-2">
              Organizing and optimizing post timings to maximize reach, engagement, and audience interaction while maintaining a consistent and strategic content flow across all platforms.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/1G8YxXkF/campaign.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Targeted Ad Campaigns
              </h2>
              <p className="text-gray-600 mt-2">
              Designing and managing paid advertising campaigns that reach the right audience, increasing conversions, brand awareness, and engagement through data-driven marketing strategies.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/hxtRGKpx/2150461313.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Performance Tracking and Insights
              </h2>
              <p className="text-gray-600 mt-2">
              Analyzing social media metrics, tracking engagement, and refining strategies based on real-time data to optimize marketing performance and audience targeting.


              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/spv6p305/2148524064.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Brand Monitoring and Engagement
              </h2>
              <p className="text-gray-600 mt-2">
              Actively tracking brand mentions, audience sentiments, and responding to interactions to maintain a positive brand image and build stronger customer relationships.


              </p>
            </div>
          </div>
          {/* Card 7 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/zWBxXdXW/2148950371.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Reputation and Crisis Handling
              </h2>
              <p className="text-gray-600 mt-2">
              Managing negative feedback, addressing customer concerns, and implementing crisis communication strategies to protect brand reputation and maintain audience trust.
              </p>
            </div>
          </div>
          {/* Card 8 */}
          <div className="bg-white shadow-lg pb-6 rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co.com/SwBZrvST/shutterstock-594314150.jpg"
              alt="Social Media"
              className="w-full h-80 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800">
                Social Profile Optimization
              </h2>
              <p className="text-gray-600 mt-2">
              Enhancing social media profiles with compelling visuals, SEO-friendly descriptions, and strategic content to improve visibility and audience engagement across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12  p-8 md:p-12 rounded-xl ">
          {/* FAQ Content */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8">
            What You Expect from Our Social <br /> Media Management Service
            </h1>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                Enhanced Online Presence and Brand Awareness
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                We amplify your brand’s visibility across all relevant social platforms. We significantly enhance your online presence by creating consistent, impactful content according to your brand's voice and audience preferences. This approach boosts brand awareness and positions your brand as a leader in its industry.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                Increased Engagement and Community Building
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                Engagement is the heart of social media. Our strategies focus on creating interactive, compelling content that resonates with your audience, encouraging likes, shares, comments, and discussions. Beyond content creation, we actively manage community interactions to enable a loyal and active community around your brand, turning followers into brand advocates.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                Data-Driven Insights and Optimization
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                Leveraging cutting-edge analytics tools, we continuously monitor and analyze the performance of your social media activities, providing insights into audience behavior, content preferences, and engagement patterns. These insights inform our ongoing strategy, allowing for data-driven optimizations that enhance campaign performance and ROI.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                Proactive Reputation Management and Crisis Mitigation
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                Maintaining a positive brand image is crucial in today's fast-paced digital world. We proactively monitor your social media channels for mentions, comments, and feedback, allowing us to respond promptly and appropriately to both positive and negative interactions. In the event of a potential crisis, our team is equipped to act swiftly to mitigate issues, protect your brand's reputation, and maintain trust with your audience.
                </p>
              </details>
            </div>

            <div className="border-b pb-3">
              <details className="group">
                <summary className="cursor-pointer flex justify-between items-center font-semibold text-gray-900 py-3 hover:text-blue-600 transition-all">
                Simplified Operations and Time Savings
                  <span className="text-gray-500 group-open:rotate-180 transition-transform">
                    +
                  </span>
                </summary>
                <p className="text-sm text-gray-700 leading-relaxed pl-4">
                Our comprehensive management service takes the burden of day-to-day social media activities off your shoulders, freeing up your time to focus on core business operations. From content creation and scheduling to monitoring and engagement, our end-to-end management services ensure your social media operations are efficient, effective, and aligned with your business goals.
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
      {/* feedback section  */}
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
        How can Haque Digital improve my brand’s social media presence?
      </div>
      <div className="collapse-content text-sm text-white">
        We create high-quality content, manage posts, engage with followers, and implement data-driven strategies to boost your brand visibility and engagement.
      </div>
    </div>

    {/* Question 2 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        Which social media platforms does Haque Digital manage?
      </div>
      <div className="collapse-content text-sm text-white">
        We manage Facebook, Instagram, LinkedIn, Twitter, TikTok, and YouTube, optimizing content and engagement tailored for each platform.
      </div>
    </div>

    {/* Question 3 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        Can Haque Digital create content for my social media pages?
      </div>
      <div className="collapse-content text-sm text-white">
        Yes! Our expert team creates engaging posts, graphics, and videos tailored to your brand’s voice and audience.
      </div>
    </div>

    {/* Question 4 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        How does Haque Digital handle social media ads?
      </div>
      <div className="collapse-content text-sm text-white">
        We plan, create, and optimize paid ad campaigns to ensure maximum reach, engagement, and conversions on all major platforms.
      </div>
    </div>

    {/* Question 5 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        Will I receive reports on my social media performance?
      </div>
      <div className="collapse-content text-sm text-white">
        Yes! We provide detailed analytics reports on engagement, reach, and conversions, helping you track progress and refine strategies.
      </div>
    </div>

    {/* Question 6 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        How often will Haque Digital post on my social media?
      </div>
      <div className="collapse-content text-sm text-white">
        Posting frequency depends on your plan. We ensure consistent, high-quality posts tailored to your audience’s engagement patterns.
      </div>
    </div>

    {/* Question 7 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        Can Haque Digital help with social media crisis management?
      </div>
      <div className="collapse-content text-sm text-white">
        Absolutely! We monitor brand mentions, handle negative comments, and implement crisis strategies to maintain your brand’s reputation.
      </div>
    </div>

    {/* Question 8 */}
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold text-white">
        How do I get started with Haque Digital’s social media services?
      </div>
      <div className="collapse-content text-sm text-white">
        Contact us through our website or email. We’ll discuss your goals, create a customized strategy, and start growing your brand online.
      </div>
    </div>
  </div>
</section>
{/* lets talk sections */}
<LetsTalk></LetsTalk>
    </div>
  );
};

export default MediaMarketing;
