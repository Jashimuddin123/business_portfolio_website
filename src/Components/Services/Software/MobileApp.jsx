import TechnologyUses from "../../SharedPage/TechnologyUses";

const MobileApp = () => {
  return (
    <div className="px-4">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto bg-blue-100 p-6 md:p-8 rounded-xl shadow-lg">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Share Ultimate <br /> Productivity with <br /> Mobile App
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Stay connected with real-time information, collaborate on projects effortlessly, and share files seamlessly. 
            This tool simplifies your workflow for maximum efficiency, whether you're managing tasks or communicating with your team.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/dYjs3yL/Product-teardown-amico.png"
            alt="Mobile App"
            className="w-full sm:w-72 md:w-96 lg:w-[450px] object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-12 rounded-xl shadow-lg mt-10">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Maximum Reach with <br /> Mobile App
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Get your app in front of as many people as possible with the help of our professional app designers. 
            A mobile app can reach a huge audience thanks to the widespread use of smartphones. 
            Harness the vast potential of app stores to connect with customers all around the globe.
            <br /><br />
            Our customized solutions optimize accessibility for varied demographics by ensuring broad compatibility, 
            whether it's iOS or Android. Incorporate social media, use push notifications, and make the interfaces 
            easy to use to increase engagement.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co/k2k33nb4/2149379900.jpg"
            alt="Mobile App"
            className="w-full sm:w-72 md:w-96 lg:w-[500px] object-contain rounded-2xl"
          />
        </div>
      </div>

      {/* Images Section */}
      <div className="w-full sm:w-[800px] md:w-[1200px] mx-auto my-20">
        <img className="w-full h-full rounded-2xl" src="https://i.ibb.co.com/0R87Lj83/2150169839.jpg" alt="" />
      </div>

      {/* Technologies Section */}
      <TechnologyUses></TechnologyUses>

      {/* Android App Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-12 rounded-xl shadow-lg">
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co.com/GqPG7dN/pngimg-com-android-logo-PNG27.png"
            alt="Mobile App"
            className="w-full sm:w-72 md:w-96 lg:w-[500px] object-contain rounded-2xl"
          />
        </div>
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            Android
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Get your app in front of as many people as possible with the help of our professional app designers. 
            A mobile app can reach a huge audience thanks to the widespread use of smartphones. 
            Harness the vast potential of app stores to connect with customers all around the globe.
            <br /><br />
            Our customized solutions optimize accessibility for varied demographics by ensuring broad compatibility, 
            whether it's iOS or Android. Incorporate social media, use push notifications, and make the interfaces 
            easy to use to increase engagement.
          </p>
        </div>
      </div>

      {/* IOS App Section */}
      <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto p-6 md:p-12 rounded-xl shadow-lg">
        {/* Text Section */}
        <div className="text-center md:text-left md:ml-8 flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            IOS
          </h2>
          <p className="text-gray-700 mt-4 text-base sm:text-lg md:text-xl leading-relaxed">
            Haque Digital Company offers innovative iOS solutions, blending cutting-edge technology with user-centric design. Specializing in mobile app development, the company ensures seamless functionality and visually appealing interfaces tailored to meet the unique needs of businesses.  <br />Their expert team is dedicated to delivering custom iOS applications that enhance user engagement, streamline operations, and boost brand presence. Haque Digital Company employs the latest development frameworks to create responsive and reliable apps, ensuring they perform optimally across various iOS devices. With a focus on quality, security, and user experience, Haque Digital Company is a trusted partner for your iOS app needs.
          </p>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="https://i.ibb.co.com/fG8jNsD0/pngwing-com.png"
            alt="Mobile App"
            className="w-full sm:w-72 md:w-96 lg:w-[500px] object-contain rounded-2xl"
          />
        </div>
      </div>
            {/* FAQ Section */}
  <div className="mt-16 max-w-4xl bg-blue-900 mx-auto rounded-md my-16">
    <p className="text-center pt-10 text-lg text-white">Find Answer</p>
    <h1 className="text-center text-3xl font-bold text-white">Frequently Asked Question</h1>
  <div className="mt-16 max-w-4xl mx-auto">
  <div className="space-y-2 bg-blue-900 text-white p-4 rounded-lg">
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">What is a mobile app, and how does it differ from a website?</div>
      <div className="collapse-content text-white  text-sm ">
      A mobile app is a software application designed to run on mobile devices, such as smartphones and tablets. Unlike websites, mobile apps are typically downloaded and installed on the device, offering a more personalized and interactive user experience.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How are mobile apps developed, and what programming languages are commonly used?</div>
      <div className="collapse-content text-sm text-white ">
      Mobile apps are developed using programming languages like Java, Swift, Kotlin, and React Native, depending on the platform (iOS or Android). Developers use Integrated Development Environments (IDEs) like Xcode for iOS and Android Studio for Android.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">What is the difference between native and hybrid mobile apps?
whiteplus
</div>
      <div className="collapse-content text-sm text-white ">
      Native apps are developed for a specific platform (iOS or Android) using platform-specific languages. Hybrid apps, on the other hand, are built using web technologies (HTML, CSS, JavaScript) and can run on multiple platforms with a single codebase.

      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How do users download and install mobile apps on their devices?</div>
      <div className="collapse-content text-sm text-white ">
      Users download and install mobile apps from digital distribution platforms, commonly known as app stores. For iOS devices, users use the Apple App Store, and for Android devices, they use Google Play Store.
      </div>
    </div>

    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Are mobile apps compatible with all devices, or do they have specific requirements in Haque Digital?</div>
      <div className="collapse-content text-sm text-white ">
      Mobile apps are designed to be compatible with specific operating systems (iOS, Android) and device specifications. Users must ensure that their device meets the minimum requirements specified by the app for optimal performance.
      </div>
    </div>
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Are mobile apps safe to use, and how can users protect their data in Haque Digital?</div>
      <div className="collapse-content text-sm text-white ">
      Generally, mobile apps from reputable app stores undergo security checks. Users can enhance their security by downloading apps only from official stores, keeping their devices updated, and reviewing app permissions to control access to personal data.

      </div>
    </div>
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">How often do mobile apps receive updates, and why are updates important?</div>
      <div className="collapse-content text-sm text-white ">
      Mobile apps receive updates periodically to introduce new features, fix bugs, and improve security. Regular updates are crucial to ensure the app's compatibility with the latest devices and operating system versions.
      </div>
    </div>
    <div className="collapse collapse-plus border border-gray-300 p-2 rounded-lg">
      <input type="checkbox" />
      <div className="collapse-title font-semibold">Are there free and paid mobile apps, and what is the difference between them?</div>
      <div className="collapse-content text-sm text-white ">
      Yes, mobile apps can be either free or paid. Free apps may generate revenue through advertisements or in-app purchases, while paid apps require users to make a one-time payment to download and use the app without additional costs.

      </div>
    </div>
  </div>
</div>
  </div>

    </div>
  );
};

export default MobileApp;
