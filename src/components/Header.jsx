import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateUnderline = () => {
      if (!isMenuOpen) {
        const activeLink = navRef.current.querySelector('.text-pink-500');
        if (activeLink) {
          const navRect = navRef.current.getBoundingClientRect();
          const linkRect = activeLink.getBoundingClientRect();
          setUnderlineStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
          });
        }
      }
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [location.pathname, isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ['home', 'about', 'project', 'skill', 'contact', 'internship', 'certificates'];

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Portfolio</h2>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <nav
          className={`mt-4 relative ${isMenuOpen ? 'block' : 'hidden'} md:block`}
          ref={navRef}
        >
          <div
            className={`flex flex-col md:flex-row md:justify-center md:space-x-6 ${
              isMenuOpen ? 'space-y-2 py-4' : ''
            }`}
          >
            {navItems.map((section) => (
              <NavLink
                key={section}
                to={section === 'home' ? '/' : `/${section}`}
                className={({ isActive }) =>
                  `cursor-pointer text-sm sm:text-base md:text-lg font-medium transition-colors duration-300 ${
                    isActive ? 'text-pink-500' : 'text-gray-300 hover:text-white'
                  } ${isMenuOpen ? 'py-2 px-4' : ''}`
                }
                onClick={() => setIsMenuOpen(false)} 
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
          </div>
          <div
            className={`absolute bottom-0 h-1 bg-pink-500 transition-all duration-300 ${
              isMenuOpen ? 'hidden' : 'md:block'
            }`}
            style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
            }}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;