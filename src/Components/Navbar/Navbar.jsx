import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setServicesDropdown(false);
    setAboutDropdown(false);
    setMenuOpen(false);
  }, [location]);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar py-2 bg-blue-600 sticky top-0 z-50">
      <div className="flex items-center justify-between w-full px-4 lg:px-10">
        {/* Logo */}
        <Link to="/">
          <div className="flex-shrink-0">
            <img className="w-40" src="https://i.ibb.co/ccBLKKQx/logo.png" alt="Logo" />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-white text-[16px]">Home</Link>
          <div className="relative group">
            <Link to="/services" className="text-white text-[16px]">Services</Link>
            <div className="absolute hidden group-hover:block py-4 text-black w-56 bg-blue-100 rounded-lg shadow-lg">
              <Link to="/creativeDesign" className="block p-2">Creative Design</Link>
              <Link to="/software" className="block p-2">Software</Link>
              <Link to="/website" className="block p-2">Website</Link>
              <Link to="/digitalMarketing" className="block p-2">Digital Marketing</Link>
            </div>
          </div>
          <Link to="/caseStudies" className="text-white text-[16px]">Case Studies</Link>
          <Link to="/blog" className="text-white text-[16px]">Blog</Link>
          <div className="relative group">
            <Link to="/aboutUs" className="text-white text-[16px]">About</Link>
            <div className="absolute hidden group-hover:block bg-blue-100 p-4 text-black  w-56 rounded-lg shadow-lg">
              <Link to="/aboutUs" className="block p-2">About Us</Link>
              <Link to="/carrer" className="block p-2">Career</Link>
              <Link to="/lifeAtHaqueDigital" className="block p-2">Life at Haque Digital</Link>
            </div>
          </div>
          <Link to="/contact" className="text-white text-[16px]">Contact</Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex">
          <Link to="/contact" className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-blue-700 transition duration-300">
            Let's Talk
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost text-white">
            {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full  w-84 ml-4 rounded 
             bg-blue-100 mx-auto shadow-lg lg:hidden mt-2 p-4"
          >
            <ul className="text-black space-y-4">
              <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>

              <li>
                <button
                  onClick={() => setServicesDropdown(!servicesDropdown)}
                  className="flex items-center justify-between w-full text-left"
                >
                  Services {servicesDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {servicesDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      <li><Link to="/creativeDesign" onClick={() => setMenuOpen(false)}>Creative Design</Link></li>
                      <li><Link to="/software" onClick={() => setMenuOpen(false)}>Software</Link></li>
                      <li><Link to="/website" onClick={() => setMenuOpen(false)}>Website</Link></li>
                      <li><Link to="/digitalMarketing" onClick={() => setMenuOpen(false)}>Digital Marketing</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              <li><Link to="/caseStudies" onClick={() => setMenuOpen(false)}>Case Studies</Link></li>
              <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

              <li>
                <button
                  onClick={() => setAboutDropdown(!aboutDropdown)}
                  className="flex items-center justify-between w-full text-left"
                >
                  About {aboutDropdown ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                <AnimatePresence>
                  {aboutDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-4 space-y-2 mt-2"
                    >
                      <li><Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About Us</Link></li>
                      <li><Link to="/career" onClick={() => setMenuOpen(false)}>Career</Link></li>
                      <li><Link to="/lifeAtHaqueDigital" onClick={() => setMenuOpen(false)}>Life at Haque Digital</Link></li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* Mobile Contact Button */}
            <div className="mt-4 text-center">
              <Link to="/contact" className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition duration-300">
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
