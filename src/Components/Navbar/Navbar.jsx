import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const location = useLocation();

  // Hide dropdowns on route change
  useEffect(() => {
    setServicesDropdown(false);
    setAboutDropdown(false);
  }, [location]);

  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Home
        </NavLink>
      </li>

      {/* Services Dropdown */}
      <li
        className="mr-2  font-semibold text-lg relative"
        onMouseEnter={() => setServicesDropdown(true)}
        onMouseLeave={() => setServicesDropdown(false)}
      >
        <div className="cursor-pointer">Services</div>
        {servicesDropdown && (
          <ul className="absolute bg-gradient-to-r from-blue-500 to-cyan-500 text-white mt-10 w-56 rounded-lg z-10 shadow-lg">
            <li className="p-2">
              <NavLink to="/companyProfile" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Creative Design
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/management" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Graphics Design
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/architech" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              UI/UX Design
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/structure" className={({ isActive }) => isActive ? "text-red-500" : ""}>
              Motion Design
              </NavLink>
            </li>
            {/* <li className="p-2">
              <NavLink to="/constructionTeam" className={({ isActive }) => isActive ? "text-red-500" : ""}>
                Construction Team
              </NavLink>
            </li> */}
          </ul>
        )}
      </li>

      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/ourService" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Case Studies
        </NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Blog
        </NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500" : ""}>
          Contact Us
        </NavLink>
      </li>

      {/* About Dropdown */}
      <li
        className="mr-2 font-semibold text-lg relative"
        onMouseEnter={() => setAboutDropdown(true)}
        onMouseLeave={() => setAboutDropdown(false)}
      >
        <div className="cursor-pointer">About</div>
        {aboutDropdown && (
          <ul className="absolute bg-sky-500 text-white mt-3 w-56 rounded-lg z-10 shadow-lg">
            <li className="p-2">
              <NavLink to="/companyProfile" className={({ isActive }) => isActive ? "text-red-500" : ""}>
                About Us
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/management" className={({ isActive }) => isActive ? "text-red-500" : ""}>
                Career
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/architech" className={({ isActive }) => isActive ? "text-red-500" : ""}>
                Life at Haque Digital
              </NavLink>
            </li>
          </ul>
        )}
      </li>
    </>
  );

  return (
    <div  className="navbar bg-gradient-to-r from-blue-700 to-cyan-500 py-4 text-white sticky top-0 z-50 shadow-md">

      <div className="navbar-start">
        {/* Mobile Menu Toggle */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {/* Mobile Dropdown Menu */}
          <ul
            tabIndex={0}
            className="absolute left-0 bg-white text-black w-56 p-2 rounded-lg shadow-lg mt-2"
          >
            {navLinks}
          </ul>
        </div>

        {/* Logo */}
        <div className="ml-6">
          <p className="text-3xl font-bold">Small Business</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
