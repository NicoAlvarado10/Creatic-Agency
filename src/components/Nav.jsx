import { useState } from 'react';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <a className="flex flex-col text-center" href="#">
          <span className="text-primary font-semibold text-2xl">CREATIC</span>
          <span className="text-white text-xs">CREATIVE AGENCY</span>
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <i className="ri-close-line text-2xl"></i>
            ) : (
              <i className="ri-menu-line text-2xl"></i>
            )}
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`text-white flex flex-col md:flex-row items-center gap-8 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Pages
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-primary transition-colors">
              Contact Us
            </a>
          </li>
          <li>
            <a
              className="text-primary font-semibold text-2xl max-md:hidden"
              href="#"
            >
              <i className="ri-search-line"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
