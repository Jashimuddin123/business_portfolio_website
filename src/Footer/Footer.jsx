import { FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-full bg-[#002A64] p-10 text-white">
      {/* Footer Content */}
      <footer className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Newsletter */}
          <div>
            <img
              className="w-40 mb-4"
              src="https://i.ibb.co/ccBLKKQx/logo.png"
              alt="Logo"
            />
            <p className="text-sm mb-4">
              Your trusted partner in digital solutions. We craft innovative
              designs and effective marketing strategies.
            </p>
          </div>
          {/* Services */}
          <div>
            <h6 className="font-semibold text-lg mb-2">Services</h6>
            <ul className="space-y-2">
              <Link to="/creativeDesign" className="hover:underline">
                Creative Design
              </Link>{" "}
              <br />
              <Link to="/website" className="hover:underline">
                Website
              </Link>{" "}
              <br />
              <Link to="/software" className="hover:underline">
                Software
              </Link>{" "}
              <br />
              <Link to="/digitalMarketing" className="hover:underline">
                Digital Marketing
              </Link>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h6 className="font-semibold text-lg mb-2">Company</h6>
            <ul className="space-y-2">
              <Link to="/aboutUs" className="hover:underline">
                About Us
              </Link>{" "}
              <br />
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>{" "}
              <br />
              <Link to="/careers" className="hover:underline">
                Careers
              </Link>{" "}
              <br />
              <Link to="/press" className="hover:underline">
                Press
              </Link>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h6 className="font-semibold text-lg mb-2">Legal</h6>
            <ul className="space-y-2">
              <Link to="/terms" className="hover:underline">
                Terms of Use
              </Link> <br />
              <Link to="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:underline">
                Cookie Policy
              </Link> <br />
              <Link to="/contact" className="hover:underline">
                haquedigitalagency@gmail.com
              </Link>
            </ul>
          </div>
        </div>
      </footer>
      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; 2025 Haque Digital Agency LIMITED. All Rights Reserved
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="text-xl hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-xl hover:text-blue-500">
              <FaLinkedin />
            </a>
            <a href="#" className="text-xl hover:text-red-500">
              <FaYoutube />
            </a>
            <a href="#" className="text-xl hover:text-blue-400">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
