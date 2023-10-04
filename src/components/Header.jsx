import React, { useState } from "react";
import { motion } from "framer-motion";

import { logoIcon, closeIcon, hamburgerIcon } from "../../assets/icons";
import { nav } from "../data.json";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  // State to manage the active link in the nav
  const [activeLink, setActiveLink] = useState("home");
  // Get the current route
  const location = useLocation().pathname;
  // State to manage the toggle of the mobile menu
  const [toggleMenu, setToggleMenu] = useState(false);
  // Variants for menu animation
  const menuVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: "100%", opacity: 0 },
  };
  return (
    <header className="md:relative">
      {/* Monbile menu overlay */}
      <motion.div
        variants={menuVariants}
        animate={toggleMenu ? "visible" : "hidden"}
        transition={{ duration: 0.4 }}
        className="fixed w-[65%] nav-background md:hidden right-0 top-0 h-full z-10 opacity-0"
      >
        {/* Mobile menu */}
        <ul className="flex flex-col justify-center pl-10 sm:pl-14 gap-8 mt-36">
          {nav.map((i, index) => (
            <Link to={i.link} key={i.name + index}>
              <li
                className={`z-10 py-1 uppercase font-barlowcond tracking-[2.7px] text-white relative li-line-mob-hover before:hover:h-full cursor-pointer ${
                  i.link === location && "before:h-full before:opacity-100"
                }`}
              >
                <span className="tracking-[2.7px] font-[700] mr-1">
                  0{index}
                </span>{" "}
                {i.name}
              </li>
            </Link>
          ))}
        </ul>
      </motion.div>
      <div className="flex xl:pl-8 custom-container justify-between items-center">
        <div>
          <img src={logoIcon} alt="logo" />
        </div>
        {/* Navigation menu */}
        <nav className="relative">
          <ul className="hidden flex-1 md:flex justify-end items-center gap-10 xl:mr-4">
            {nav.map((i, index) => (
              <Link to={i.link} key={i.name + index}>
                <li
                  className={`z-10 py-2 uppercase font-barlowcond tracking-widest text-white relative li-line-hover before:hover:w-full cursor-pointer ${
                    i.link === location && "before:w-full before:opacity-100"
                  }`}
                >
                  <span className="hidden lg:inline tracking-widest font-[700] mr-1">
                    0{index}
                  </span>{" "}
                  {i.name}
                </li>
              </Link>
            ))}
          </ul>
        </nav>
        {/* Menu background */}
        <div className="absolute before-line md:w-3/5 xl:w-1/2 nav-background hidden sm:block right-0 top-0 lg:top-6 sm:h-[96px]"></div>
        <div className="cursor-pointer md:hidden">
          <img
            src={hamburgerIcon}
            alt="humburger-icon"
            className={`h-6 hover:opacity-75 duration-300 ${
              toggleMenu ? "hidden" : "block"
            }`}
            onClick={() => setToggleMenu(true)}
          />
          <img
            src={closeIcon}
            alt=" close-icon"
            className={` z-20 relative h-6 hover:opacity-75 ${
              toggleMenu ? "block" : "hidden"
            }`}
            onClick={() => setToggleMenu(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
