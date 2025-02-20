import { BiSolidMessageDetail } from "react-icons/bi";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-[#002A64] text-white py-20 px-4 md:px-8 lg:px-12">
      <footer className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <img
              className="w-40 mb-4"
              src="https://i.ibb.co/ccBLKKQx/logo.png"
              alt="Logo"
            />
            <p className="text-sm p-4 mb-8">
              Your trusted partner in digital solutions. We craft innovative
              designs and effective marketing strategies.
            </p>
            <p className="ml-2 mb-2">Subscribe for updates and news.</p>
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="p-2 pr-10 rounded-full bg-white text-black w-full focus:outline-none"
              />
              <button className="absolute inset-y-0 right-3 flex items-center text-blue-500 hover:text-blue-600">
                <FaArrowRight className="text-xl" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/aboutUs" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/carrer" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="hover:underline">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/caseStudies" className="hover:underline">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4">
                <li>
                  <Link to="/creativeDesign" className="hover:underline">
                    Creative Design
                  </Link>
                </li>
                <li>
                  <Link to="/website" className="hover:underline">
                    Website
                  </Link>
                </li>
                <li>
                  <Link to="/software" className="hover:underline">
                    Software
                  </Link>
                </li>
                <li>
                  <Link to="/seo" className="hover:underline">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="/digitalMarketing" className="hover:underline">
                    Digital Marketing
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <ul className="space-y-8">
              <li className="flex items-center gap-4">
                <BiSolidMessageDetail className="text-lg" />
                <p>haquedigitalagency@gmail.com</p>
              </li>
              <li className="flex items-center gap-4">
                <IoLocationSharp className="text-lg" />
                <p>Habib Tower, Maijdee Bazar, Noakhali</p>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-lg" />
                <p>+880 1615-865253</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t border-white mt-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <p className="text-sm">
            &copy; 2025 Haque Digital Agency LIMITED. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.facebook.com/haquedigitalagency" className="text-2xl ml-6  hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/company/haquedigital/" className="text-2xl ml-6 hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" className="text-2xl ml-6 hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-2xl ml-6 hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
