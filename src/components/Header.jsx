import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Certificates from './Certificates';

const Header = () => {
  const location = useLocation();
  const navRef = useRef(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const updateUnderline = () => {
      const activeLink = navRef.current.querySelector('.text-pink-500');
      if (activeLink) {
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = activeLink.getBoundingClientRect();
        setUnderlineStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
        });
      }
    };

    updateUnderline();
    window.addEventListener('resize', updateUnderline);
    return () => window.removeEventListener('resize', updateUnderline);
  }, [location.pathname]);

  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Portfolio</h2>
        <nav className="mt-4 relative" ref={navRef}>
          <div className="flex justify-center space-x-4 sm:space-x-8">
            {['home', 'about', 'project', 'skill', 'contact','internship','certificates'].map((section) => (
              <NavLink
                key={section}
                to={section === 'home' ? '/' : `/${section}`}
                className={({ isActive }) =>
                  `cursor-pointer text-base sm:text-lg font-medium transition-colors duration-300 ${
                    isActive ? 'text-pink-500' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </NavLink>
            ))}
          </div>
          <div
            className="absolute bottom-0 h-1 bg-pink-500 transition-all duration-300"
            style={{
              left: `${underlineStyle.left}px`,
              width: `${underlineStyle.width}px`,
            }}
          ></div>
        </nav>
      </div>
    </header>
  );
};

export default Header;