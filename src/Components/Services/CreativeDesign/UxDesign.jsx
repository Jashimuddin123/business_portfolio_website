import LetsTalk from "../../SharedPage/letsTalk";

const UxDesign = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-10 rounded-xl shadow-lg my-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            Raise Your Brand with <br /> Our UI/UX Design <br /> Services
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Our UI/UX Design Services are meticulously crafted to catch the eye
            and captivate your audience's heart and mind. We create intuitive,
            user-centric designs that drive user satisfaction and conversion
            rates. We ensure your digital presence is not just seen but
            remembered.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/HLgdpH7r/Mobile-UI-UX-amico-1.png"
            alt="Accounting & Finance"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* 2nd Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-10 rounded-xl shadow-lg my-10">
        {/* Text Section */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Why UI/UX Design is <br /> Important for Your Business
          </h2>
          <p className="text-gray-700 mt-4  sm:text-lg md:text-xl leading-relaxed">
            UI/UX design is the backbone of any digital presence, acting as the
            bridge between your business and your customers. Good UI/UX design
            increases user engagement, leading to higher retention rates and
            more conversions. It simplifies the user journey, making it easy for
            customers to find what they need, understand what you offer, and
            take action. <br /> Moreover, a well-designed UI/UX boosts your
            website's SEO rankings. Investing in professional UI/UX design is
            not an expense; it's a strategic move that enhances your digital
            footprint, drives business growth, and builds.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end  md:mt-0">
          <img
            src="https://i.ibb.co.com/GvB6s5cy/16923194-5741174.jpg"
            alt="UI/UX Design"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] lg:h-[450px]  rounded-lg "
          />
        </div>
      </div>
      {/* Images Section */}
      <div className="w-full sm:w-[800px] md:w-[1200px] mx-auto my-20">
        <img
          className="w-full h-full rounded-2xl"
          src="https://i.ibb.co.com/MyqwDGhp/smart-Digital-13b60f4b.webp"
          alt=""
        />
      </div>
      {/* our work process sections */}
      <div className="mt-16 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Work Process
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">📊</div>
            <h2 className="mt-3 text-lg font-semibold">Strategic Plan</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              A thorough strategy to align business goals with the design
              process for optimal results.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">📝</div>
            <h2 className="mt-3 text-lg font-semibold">Wireframe</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              A low-fidelity representation of the layout structure, focusing on
              functionality and user flow.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">🎨</div>
            <h2 className="mt-3 text-lg font-semibold">Visual Design</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              Crafting the aesthetic and brand elements to create a visually
              appealing and cohesive design.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">📱</div>
            <h2 className="mt-3 text-lg font-semibold">Prototyping</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              Building interactive models to test design ideas and gather
              feedback before development.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">🔍</div>
            <h2 className="mt-3 text-lg font-semibold">QA & User Testing</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              Ensuring the product meets quality standards and works seamlessly
              through user feedback and testing.
            </p>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-4xl text-blue-900">🚚</div>
            <h2 className="mt-3 text-lg font-semibold">Review & Delivery</h2>
            <p className="mt-2 text-gray-700 text-sm text-center">
              Final product review, ensuring all requirements are met before
              delivery to the client.
            </p>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
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
                How does haque digital tailor UI/UX design to my project?
              </div>
              <div className="collapse-content text-white  text-sm ">
                We conduct a thorough discovery phase, understanding your goals
                and audience to customize design strategies for optimal user
                engagement.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Can haque digital work with existing design elements or branding
                guidelines?
              </div>
              <div className="collapse-content text-sm text-white ">
                Certainly. We incorporate existing design elements and adhere to
                established branding guidelines, ensuring a cohesive and
                recognizable visual identity.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                What types of projects can benefit from UI/UX design services?
              </div>
              <div className="collapse-content text-sm text-white ">
                Any digital project, from websites and mobile apps to software
                interfaces, can benefit from UI/UX design to enhance user
                satisfaction and functionality.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                What is the typical timeline for completing a UI/UX design
                project with Haque digital?
              </div>
              <div className="collapse-content text-sm text-white ">
                Timelines vary based on project complexity. We provide estimated
                timelines upon project initiation, ensuring timely delivery of
                high-quality UI/UX designs.
              </div>
            </div>

            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                Can haque digital assist with implementing UI/UX designs into my
                website or app?
              </div>
              <div className="collapse-content text-sm text-white ">
                While we primarily focus on design, we collaborate with
                developers or provide guidance to ensure seamless implementation
                of UI/UX designs.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
                How does haque digital stay updated with the latest UI/UX design
                trends and technologies? whiteplus
              </div>
              <div className="collapse-content text-sm text-white ">
              Our team engages in continuous learning, research, and industry participation, staying abreast of the latest trends and technologies to ensure cutting-edge UI/UX designs.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              Can haque digital provide ongoing support or updates for UI/UX designs after project completion?
              </div>
              <div className="collapse-content text-sm text-white ">
              Yes, we offer post-project support and updates as needed, ensuring your UI/UX designs remain current, effective, and aligned with your evolving business goals.
              </div>
            </div>
            <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
              <input type="checkbox" />
              <div className="collapse-title font-semibold">
              How does UI/UX design impact website or app performance and user engagement?
              </div>
              <div className="collapse-content text-sm text-white ">
              Effective UI/UX design enhances user satisfaction, navigation ease, and overall engagement, contributing to increased user retention and the success of digital platforms.
              </div>
            </div>
          </div>
        </div>
      </div>
      <LetsTalk></LetsTalk>
    </div>
  );
};

export default UxDesign;
