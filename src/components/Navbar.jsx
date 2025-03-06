import React, { useState } from "react";
import { Link } from "react-router-dom";
import navbarItems from "../utils/navbarData";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(1);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (id) => {
    setActiveItem(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 px-6 flex md:justify-around justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <div className="text-2xl font-bold bg-gradient-to-r from-white to-[var(--primary)] text-transparent bg-clip-text">
            WebApp
          </div>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-12">
        {navbarItems.map((item) => (
          <Link
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            to={item.path}
            className={`transition-transform duration-300 hover:scale-110 ${
              item.id === activeItem
                ? "font-bold text-[var(--primary)]"
                : "text-gray-600 hover:text-[var(--primary)] transition-colors duration-300 font-medium"
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <Link to="/contact" onClick={() => handleItemClick(5)}>
          <button className="">Contact us</button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ">
        <button
          onClick={toggleMenu}
          className={`text-gray-600 focus:outline-none `}
        >
          <div
            className={`w-6 h-6 transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-90" : ""
            }`}
          >
            {isMenuOpen ? (
              <IoMdClose className="w-6 h-6 " />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 right-0 
        bg-white shadow-md py-4 px-6 
        md:hidden z-50 flex flex-col space-y-4
        transition-opacity duration-300 ease-in-out
        ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        {navbarItems.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            onClick={() => handleItemClick(item.id)}
            className={`transition-transform duration-300 hover:translate-x-2 ${
              item.id === activeItem
                ? "font-bold text-[var(--primary)]"
                : "text-gray-600 hover:text-[var(--primary)] transition-colors duration-300"
            }`}
          >
            {item.title}
          </Link>
        ))}
        <Link to="/contact">
          <button className="w-full" onClick={() => handleItemClick(5)}>
            Contact us
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
