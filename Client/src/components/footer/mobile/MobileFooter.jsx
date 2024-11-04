import { Link } from "react-router-dom";
import { mobileFooterLinks } from "./mobileFooterLinks";
import { socialFooterLinks } from "../socialFooterLinks";

const MobileFooter = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-10">
      <div className="container mx-auto px-4 text-center">
        {/* Social Links */}
        <div className="mb-8">
          <div className="flex justify-center space-x-8 text-4xl">
            {socialFooterLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 cursor-pointer"
              >
                {item.icon}
                <span className="sr-only">{item.display}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Explore Links */}
        <div className="mb-8">
          <h6 className="text-3xl font-bold text-primary-light dark:text-primary-dark mb-6">
            Explore
          </h6>
          <ul className="flex flex-col items-center gap-4 text-2xl">
            {mobileFooterLinks.map((item, index) => (
              <li key={index} className="flex items-center">
                <Link
                  to={item.url}
                  className="flex items-center hover:text-green-500 cursor-pointer"
                >
                  {/* Add icon before the text */}
                  {item.icon}
                  <span className="ml-2">{item.display}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MobileFooter;
