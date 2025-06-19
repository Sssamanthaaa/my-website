import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import sfLogo from '../images/sf-logo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white drop-shadow-[0_4px_4px_rgba(236,72,153,0.4)] shadow-md">
      <div className="w-full px-6 py-4 flex justify-between items-center">
        {/* logo might need to change doesnt really fit the page rn  */}
        <a href="#home">
          <img
            src={sfLogo}
            alt="SF Logo"
            className="h-10 w-10 object-contain scale-150 cursor-pointer"
          />
        </a>

        {/* normal nav bar */}
        <ul className="hidden md:flex space-x-6 text-base font-medium">
          <li><a href="#about" className="font-medium text-gray-800 hover:text-pink-600">About me</a></li>
          <li><a href="#projects" className="font-medium text-gray-800 hover:text-pink-600">Projects</a></li>
          <li><a href="#resume" className="font-medium text-gray-800 hover:text-pink-600">My Resume</a></li>
          <li>
            <a
              href="mailto:samantha.flores@berkeley.edu"
              className="bg-gray-800 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition"
            >
              Contact me
            </a>
          </li>
        </ul>

        {/* if on mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4">
          <a href="#about" className="block text-gray-800 font-medium hover:text-pink-600">About me</a>
          <a href="#projects" className="block text-gray-800 font-medium hover:text-pink-600">Projects</a>
          <a href="#resume" className="block text-gray-800 font-medium hover:text-pink-600">My Resume</a>
          <a
            href="mailto:samantha.flores@berkeley.edu"
            className="block text-white bg-gray-800 px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition text-center"
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}
