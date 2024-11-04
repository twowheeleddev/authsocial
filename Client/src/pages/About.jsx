import { logo } from "../assets/index";
import { Link } from "react-router-dom";
import useResponsive from "../hooks/useResponsive";
import { useTheme } from "../providers/ThemeProvider";

const About = () => {
  const { isDarkMode } = useTheme();
  const { isMobile } = useResponsive();
  return (
    <div className="bg-gray-900 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gray-900 rounded-lg p-8 mb-10 text-center">
          <h1 className="text-5xl font-bold mb-6 text-indigo-500">
            About Us
          </h1>
          <p className="text-2xl text-yellow-500 mb-4">
            Learn more about Social Shelters and our mission to support those in
            need.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mb-10">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src={logo}
              alt="Our Mission"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              Our Mission
            </h2>
            <p className="text-lg mb-4 text-gray-300">
              At Social Shelters, our mission is to provide shelter, food, and
              support to those in need. We believe in the power of community and
              the importance of helping one another.
            </p>
            <p className="text-lg text-gray-300">
              Our dedicated team works tirelessly to ensure that everyone has
              access to the resources they need to get back on their feet and
              lead a better life. Join us in making a difference in our
              community.
            </p>
          </div>
        </div>

        

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <Link to="/our-team" className="block">
              <div className="bg-gray-900 rounded-lg p-6 h-full hover:bg-indigo-900 cursor-pointer">
                <h3 className="text-3xl font-bold mb-4 text-yellow-500">
                  Our Team
                </h3>
                <p className="text-lg text-gray-300">
                  Our team is composed of dedicated professionals and volunteers
                  who are passionate about making a difference. Meet the people
                  who drive our mission forward.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <Link to="/our-values" className="block">
              <div className="bg-gray-900 rounded-lg p-6 h-full hover:bg-indigo-900 cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                  Our Values
                </h3>
                <p className="text-lg text-gray-300">
                  Compassion, integrity, and community are at the core of
                  everything we do. We are committed to treating everyone with
                  dignity and respect, and we strive to build a supportive and
                  inclusive community.
                </p>
              </div>
            </Link>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <Link to="/get-involved" className="block">
              <div className="bg-gray-900 rounded-lg p-6 h-full hover:bg-indigo-900 cursor-pointer">
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                  Get Involved
                </h3>
                <p className="text-lg text-gray-300">
                  There are many ways to get involved with Social Shelters.
                  Whether you want to volunteer, donate, or spread the word, your
                  support is invaluable. Learn how you can make a difference
                  today.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
