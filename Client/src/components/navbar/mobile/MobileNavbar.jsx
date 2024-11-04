// src/components/mobile/MobileNavbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../../../providers/ThemeProvider';
import { logo } from "../../../assets/index";
import ThemeToggle from '../../ThemeToggle';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900">
      <Link to="/">
        <img src={logo} alt="Social Shelters Logo" className="h-10" /> {/* Logo in mobile */}
      </Link>
      <button onClick={toggleMenu} className="text-2xl">
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isOpen && (
        <div className={`absolute right-0 top-12 w-48 bg-${isDarkMode ? 'gray-800' : 'white'} rounded-lg shadow-lg`}>
          <ul className="flex flex-col p-4">
            <li>
              <Link to="/" onClick={toggleMenu} className="text-lg hover:text-green-500">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="text-lg hover:text-green-500">About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="text-lg hover:text-green-500">Contact</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu} className="text-lg hover:text-green-500">Services</Link>
            </li>
            <li>
              <Link to="/donate" onClick={toggleMenu} className="text-lg hover:text-green-500">Donate</Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
