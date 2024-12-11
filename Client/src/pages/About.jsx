import { Link } from "react-router-dom";
import { logo } from "../assets";
import useResponsive from "../hooks/useResponsive";
import { useTheme } from "../providers/ThemeProvider";

const About = () => {
  const { isDarkMode } = useTheme();
  const { isMobile } = useResponsive();

  return (
    <div
      className={`min-h-screen py-10 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div
          className={`rounded-lg p-8 mb-10 text-center ${
            isDarkMode
              ? "bg-gray-900 text-indigo-500"
              : "bg-gray-100 text-indigo-600"
          }`}
        >
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p
            className={`text-2xl mb-4 ${
              isDarkMode ? "text-yellow-500" : "text-indigo-700"
            }`}
          >
            Learn more about Social Shelters and our mission to support those in
            need.
          </p>
        </div>

        {isMobile ? (
          <div className="text-center mb-10">
            <img
              src={logo}
              alt="Our Mission"
              className="rounded-lg w-3/4 mx-auto mb-4"
            />
            <h2
              className={`text-3xl font-bold mb-4 ${
                isDarkMode ? "text-indigo-600" : "text-indigo-700"
              }`}
            >
              Our Mission
            </h2>
            <p
              className={`text-lg mb-4 ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              At Social Shelters, our mission is to provide shelter, food, and
              support to those in need. We believe in the power of community and
              the importance of helping one another.
            </p>
          </div>
        ) : (
          <div className="flex flex-wrap -mx-4 mb-10">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                src={logo}
                alt="Our Mission"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
              <h2
                className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? "text-indigo-600" : "text-indigo-700"
                }`}
              >
                Our Mission
              </h2>
              <p
                className={`text-lg mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                At Social Shelters, our mission is to provide shelter, food, and
                support to those in need. We believe in the power of community
                and the importance of helping one another.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap -mx-4">
          {[
            {
              title: "Our Team",
              link: "/our-team",
              text: "Our team is composed of dedicated professionals and volunteers who are passionate about making a difference. Meet the people who drive our mission forward.",
            },
            {
              title: "Our Values",
              link: "/our-values",
              text: "Compassion, integrity, and community are at the core of everything we do. We are committed to treating everyone with dignity and respect, and we strive to build a supportive and inclusive community.",
            },
            {
              title: "Get Involved",
              link: "/get-involved",
              text: "There are many ways to get involved with Social Shelters. Whether you want to volunteer, donate, or spread the word, your support is invaluable. Learn how you can make a difference today.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`w-full ${
                isMobile ? "mb-8" : "md:w-1/3 px-4 mb-8 md:mb-0"
              }`}
            >
              <Link to={section.link} className="block">
                <div
                  className={`rounded-lg p-6 h-full hover:bg-indigo-900 cursor-pointer ${
                    isDarkMode ? "bg-gray-900" : "bg-gray-100"
                  }`}
                >
                  <h3
                    className={`text-3xl font-bold mb-4 ${
                      isDarkMode ? "text-yellow-500" : "text-indigo-700"
                    }`}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {section.text}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
