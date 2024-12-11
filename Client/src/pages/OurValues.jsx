// src/pages/OurValues.jsx

import { useTheme } from "../providers/ThemeProvider";

const OurValues = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-10 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Values</h1>
        <p className="text-lg mb-8">
          Compassion, integrity, and community are at the core of everything we
          do. We treat everyone with dignity and respect.
        </p>
        <div className="space-y-6">
          <div
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">Compassion</h2>
            <p className="text-lg">
              We strive to show genuine care and kindness in all interactions.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg ${
              isDarkMode ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">Integrity</h2>
            <p className="text-lg">
              We hold ourselves to the highest ethical standards and strive for
              honesty and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
