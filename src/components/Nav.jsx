import  { useState } from 'react';

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-7xl mx-auto flex justify-around items-center py-7 px-4">
      <a className="flex flex-col text-center" href="#">
        <span className="text-primary font-semibold text-2xl">CREATIC</span>
        <span className="text-white text-xs">CREATIVE AGENCY</span>
      </a>
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <i className="ri-close-line text-2xl"></i> : <i className="ri-menu-line text-2xl"></i>}
        </button>
      </div>
      <ul className={`text-white flex-col md:flex-row flex items-center gap-8 md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a className='text-primary font-semibold text-2xl' href="#"><i className="ri-search-line"></i></a>
        </li>
      </ul>
    </nav>
  );
};
