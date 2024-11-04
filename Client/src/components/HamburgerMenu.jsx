import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../providers/ThemeProvider';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const menuRef = useRef(null); // Create a ref for the menu

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the menu
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu
      }
    };

    // Add event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]); // Add menuRef to dependencies

  return (
    <div className="relative">
      {/* Menu Icon */}
      <button onClick={toggleMenu} className="text-2xl p-2">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu Content */}
      {isOpen && (
        <div
          ref={menuRef} // Attach the ref to the menu
          className={`absolute right-0 top-12 w-48 p-4 rounded-lg shadow-lg 
            ${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-900'}`}
        >
          <ul className="flex flex-col gap-4">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>

          {/* Theme Toggle Icon */}
          <button
            onClick={toggleTheme}
            className="mt-4 flex items-center gap-2 p-2 rounded text-lg 
            hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
            <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
