// src/components/desktop/DesktopNavbar.jsx
import { Link } from 'react-router-dom';
import { logo } from '../../../assets/index'; // Adjust the import path as needed
import ThemeToggle from '../../ThemeToggle';
import { useTheme } from '../../../providers/ThemeProvider';

const DesktopNavbar = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900`}>
      <Link to="/">
        <img src={logo} alt="Social Shelters Logo" className="h-10" /> {/* Logo in desktop */}
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-green-500 text-gray-700 dark:text-magenta dark:hover:text-neon-yellow">Home</Link>
        <Link to="/shelters" className="hover:text-green-500 text-gray-700 dark:text-magenta dark:hover:text-neon-yello">Shelters</Link>
        <Link to="/about" className="hover:text-green-500text-gray-700 dark:text-magenta dark:hover:text-neon-yellow">About</Link>
        <Link to="/contact" className="hover:text-green-500 text-gray-700 dark:text-magenta dark:hover:text-neon-yellow">Contact</Link>
        <Link to="/services" className="hover:text-green-500 text-gray-700 dark:text-magenta dark:hover:text-neon-yellow">Services</Link>
        <Link to="/donate" className="hover:text-green-500 text-gray-700 dark:text-magenta dark:hover:text-neon-yellow">Donate</Link>
      </div>
      <ThemeToggle />
    </div>
  );
};

export default DesktopNavbar;
