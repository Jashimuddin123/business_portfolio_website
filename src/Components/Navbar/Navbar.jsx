import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; 

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setServicesDropdown(false);
    setAboutDropdown(false);
    setMenuOpen(false); 
  }, [location]);

  const navbarBgColor = location.pathname === "/" ? "" : "bg-white";

  const navLinks = (
    <>
      <li className="mr-2 text-[16px]">
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>
      <li
        className="mr-2 text-lg relative"
        onMouseEnter={() => setServicesDropdown(true)}
        onMouseLeave={() => setServicesDropdown(false)}
      >
        <div className="cursor-pointer text-[16px]">
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        </div>
        {servicesDropdown && (
          <ul className="absolute bg-[#DBF0FF] text-[#002A64] mt-10 w-56 rounded-lg z-10 shadow-lg">
            <li className="p-2 text-[16px]">
              <Link to="/creativeDesign" onClick={() => setMenuOpen(false)}>Creative Design</Link>
            </li>
            <li className="p-2 text-[16px]">
              <Link to="/software" onClick={() => setMenuOpen(false)}>Software</Link>
            </li>
            <li className="p-2 text-[16px]">
              <Link to="/website" onClick={() => setMenuOpen(false)}>Website</Link>
            </li>
            <li className="p-2 text-[16px]">
              <Link to="/digitalMarketing" onClick={() => setMenuOpen(false)}>Digital Marketing</Link>
            </li>
          </ul>
        )}
      </li>
      <li className="mr-2 text-[16px]">
        <Link to="/caseStudies" onClick={() => setMenuOpen(false)}>Case Studies</Link>
      </li>
      <li className="mr-2 text-[16px]">
        <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
      </li>
      <li
        className="mr-2 text-[16px] relative"
        onMouseEnter={() => setAboutDropdown(true)}
        onMouseLeave={() => setAboutDropdown(false)}
      >
        <div className="cursor-pointer">
          <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About</Link>
        </div>
        {aboutDropdown && (
          <ul className="absolute bg-[#DBF0FF] text-[#002A64] mt-10 w-56 rounded-lg z-10 shadow-lg">
            <li className="p-2 text-[16px]">
              <Link to="/aboutUs" onClick={() => setMenuOpen(false)}>About Us</Link>
            </li>
            <li className="p-2 text-[16px]">
              <Link to="/carrer" onClick={() => setMenuOpen(false)}>Career</Link>
            </li>
            <li className="p-2 text-[16px]">
              <Link to="/architech" onClick={() => setMenuOpen(false)}>Life at Haque Digital</Link>
            </li>
          </ul>
        )}
      </li>
      <li className="mr-2 text-[16px]">
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className={`navbar text-[#002A64] py-4 bg-white sticky top-0 z-50 shadow-md ${navbarBgColor}`}>
      <div className="flex items-center justify-between w-full px-4 lg:px-10">
        <div className="flex-shrink-0">
          <img className="w-40 mb-4 mt-4" src="https://i.ibb.co.com/ccBLKKQx/logo.png" alt="Logo" />
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-ghost">
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
      </div>

      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="absolute top-full left-0 w-full bg-[#DBF0FF] text-black shadow-lg lg:hidden"
    >
      <ul className="p-4  ">{navLinks}</ul>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Navbar;
