import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import TopSection from "../SharedPage/TopSection ";
import { div } from "framer-motion/client";
import Email from "./Email";
// import EmailSent from "./EmailSent";

const ContactUs = () => {
  return (
    
<div>

<div>
       <TopSection title="Contact us"></TopSection>
        <div id="contact" className="min-h-screen bg-gray-100">
        
        {/* Contact form and map section */}
        <div className="container mx-auto p-4 md:p-10 space-y-10">
          {/* Contact Details and Form */}
          <div className="flex flex-col md:flex-row gap-8 bg-white shadow-lg p-6 md:p-10 rounded-lg">
            {/* Contact Details */}
            <div className="flex-1 space-y-8 mt-28  rounded-xl">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#002A64]">
                Ready to Bring Your Yours Ideas?
              </h3>
             
              {/* icons div */}
              {/* WhatsApp Icon Section */}
              <div className="w-full flex items-center space-x-4 ">
                {/* WhatsApp Icon Section */}
                <div className="w-12 h-12 bg-[#0084FF] flex items-center justify-center ">
                  <FaWhatsapp className="text-3xl text-white" />
                </div>
  
                {/* Text Section */}
                <div>
                  <p className="text-lg font-semibold text-[#002A64]">
                  +880 1615-865253
                  </p>
                  <p className="text-sm text-gray-600">Our WhatsApp Number</p>
                </div>
              </div>
              {/* WhatsApp Icon Section */}
              <div className="w-full flex items-center space-x-4 ">
                {/* WhatsApp Icon Section */}
                <div className="w-12 h-12 bg-[#0084FF] flex items-center justify-center ">
                  <FaEnvelope className="text-3xl text-white" />
                </div>
  
                {/* Text Section */}
                <div>
                  <p className="text-lg font-semibold text-[#002A64]">
                  haquedigitalagency@gmail.com

                  </p>
                  <p className="text-sm text-[#002A64]">Our suport email</p>
                </div>
              </div>
              {/* WhatsApp Icon Section */}
              <div className="w-full flex items-center space-x-4">
                {/* WhatsApp Icon Section */}
                <div className="w-12 h-12 bg-[#0084FF] flex items-center justify-center ">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                </div>
  
                {/* Text Section */}
                <div>
                  <p className="text-lg font-semibold text-[#002A64]">
                  Habib Tower, (BB Convention Hall).5th Floor, Maijdee Bazar, Noakhali
                  </p>
                  <p className="text-sm text-[#002A64]">Our office Address</p>
                </div>
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="flex-1">{/* <EmailSent /> */}
<Email></Email>

            </div>
          </div>
          {/*  faq sections */}
          <div>
            <h1 className="text-center text-2xl text-[#002A64]">Faq</h1>
            <p className="text-center text-4xl mb-6">Have any Questions?</p>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                How do I create an account?
              </div>
              <div className="collapse-content text-sm">
                Click the "Sign Up" button in the top right corner and follow the
                registration process.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                I forgot my password. What should I do?
              </div>
              <div className="collapse-content text-sm">
                Click on "Forgot Password" on the login page and follow the
                instructions sent to your email.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I update my profile information?
              </div>
              <div className="collapse-content text-sm">
                Go to "My Account" settings and select "Edit Profile" to make
                changes.
              </div>
            </div>
          </div>
  
          {/* Map Section */}
          <div className="overflow-hidden border border-gray-300 rounded-lg shadow-md">
            <iframe
              title="Contact Map - Pabna, Bangladesh"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3583914854285!2d89.22178641529418!3d24.006962484280885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbf0f5b5d9137b%3A0x1e3587ef967fc87f!2sPabna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1631667652495"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="border-none rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    {/* email .js  */}
    <div>
 
    </div>
</div>
  );
};

export default ContactUs;
