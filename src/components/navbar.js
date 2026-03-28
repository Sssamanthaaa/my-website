import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import sfLogo from '../images/logo-full.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  const toggleMenu = () => setIsOpen((open) => !open);

  useEffect(() => {
    const homeSection = document.getElementById('home');

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowLogo(!entry.isIntersecting);
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
      className="theme-nav fixed top-0 left-0 w-full z-40 transition-colors duration-300"
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
            <li><a href="#about" className="theme-link font-medium">About me</a></li>
            <li><a href="#projects" className="theme-link font-medium">Projects</a></li>
            <li><a href="#resume" className="theme-link font-medium">My Resume</a></li>
            <li>
              <a
                href="mailto:samantha.flores@berkeley.edu"
                className="theme-primary-button px-6 py-2 rounded-full font-medium transition"
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
          <a href="#about" onClick={() => setIsOpen(false)} className="theme-link block font-medium">About me</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="theme-link block font-medium">Projects</a>
          <a href="#resume" onClick={() => setIsOpen(false)} className="theme-link block font-medium">My Resume</a>
          <a
            href="mailto:samantha.flores@berkeley.edu"
            onClick={() => setIsOpen(false)}
            className="theme-primary-button block px-6 py-3 rounded-full font-medium transition text-center"
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}
