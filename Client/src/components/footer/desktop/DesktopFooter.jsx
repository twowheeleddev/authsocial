import { Link } from "react-router-dom";
import {
  footerInfoLinks, // Import the footer information links
  footerQuickLinks, // Import the footer quick links
  resourceLinks, // Import the resource links
} from "./desktopFooterLinks"; // Adjust the import path based on your file structure
import { socialFooterLinks } from "../socialFooterLinks";

const DesktopFooter = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-10">
      <div className="container mx-auto px-4">
        {/* Grid Layout for Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Links Section */}
          <div className="text-center">
            <h6 className="text-xl font-bold text-indigo-500 dark:text-indigo-400 mb-4">
              Follow Us
            </h6>
            <div className="flex justify-center space-x-6 text-3xl">
              {socialFooterLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links Section */}
          <div>
            <h6 className="text-xl font-bold text-indigo-500 dark:text-indigo-400 mb-4">
              Explore
            </h6>
            <ul className="space-y-2">
              {footerQuickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links Section */}
          <div>
            <h6 className="text-xl font-bold text-indigo-500 dark:text-indigo-400 mb-4">
              Information
            </h6>
            <ul className="space-y-2">
              {footerInfoLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.url}
                    className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resource Links Section */}
          <div>
            <h6 className="text-xl font-bold text-indigo-500 dark:text-indigo-400 mb-4">
              Resources
            </h6>
            <ul className="space-y-2">
              {resourceLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300"
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DesktopFooter;
