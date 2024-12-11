// src/pages/GetInvolved.jsx

import { Link } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";

const GetInvolved = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-10 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center transition-colors duration-300">
          Get Involved
        </h1>
        <p
          className={`text-lg mb-8 ${
            isDarkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          There are many ways to get involved with Social Shelters. Whether you
          want to volunteer, donate, or spread the word, your support is
          invaluable.
        </p>
        <div className="flex flex-col space-y-8">
          <Link to="/volunteer">
            <div
              className={`p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-200 text-black"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">Volunteer</h2>
              <p className="text-lg">
                Join our team of volunteers and make a direct impact in your
                community.
              </p>
            </div>
          </Link>
          <Link to="/donate">
            <div
              className={`p-6 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-200 text-black"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">Donate</h2>
              <p className="text-lg">
                Your financial support helps us provide necessary resources and
                services.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
