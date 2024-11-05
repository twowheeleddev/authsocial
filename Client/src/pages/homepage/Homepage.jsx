// src/pages/HomePage.jsx
import {Link} from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider"; // Import your theme hook

const HomePage = () => {
  const {isDarkMode} = useTheme(); // Destructure isDarkMode for background

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-11/12 max-w-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
      >
        <h1 className="text-center text-md font-bold mb-4">
          Connect with the Social Shelters Community
        </h1>

        {/* Login form */}
        <form className="space-y-4">
          <div>
            <input
              type="text"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-900"
              }`}
              placeholder="Username"
              aria-label="Username"
              autoFocus
            />
          </div>
          <div>
            <input
              type="password"
              className={`w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-100 border-gray-300 text-gray-900"
              }`}
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-blue-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/register"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 inline-block"
          >
            Register
          </Link>
        </div>
        <div className="mt-4 text-center">
          <Link
            to="/volunteer"
            className="text-gray-600 hover:underline"
          >
            Helping others to find their way!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
