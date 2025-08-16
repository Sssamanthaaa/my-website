import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import sfLogo from '../images/logo-full.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [isHome, setIsHome] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogo(!entry.isIntersecting);
        setIsHome(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  return (
    <nav
      style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${isHome ? 'bg-white' : 'bg-gray-100'}`}
    >
      <div className="w-full px-6 py-4 flex items-center relative">
        {/* logo that appears when not on home */}
        {showLogo && (
          <div className="absolute -top-1 left-6 z-50">
            <a href="#home" className="block">
              <img
                src={sfLogo}
                alt="SF Logo"
                className="h-24 w-auto object-contain cursor-pointer drop-shadow-lg"
              />
            </a>
          </div>
        )}

        {/* nav links */}
        <div className="ml-auto">
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
        </div>

        {/* mobile menu toggle */}
        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* mobile dropdown menu */}
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
