// src/pages/OurTeam.jsx

import { useTheme } from "../providers/ThemeProvider";

const OurTeam = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen py-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6 text-center">Our Team</h1>
        <p className="text-lg mb-8 text-center">
          Our team is composed of dedicated professionals and volunteers who are passionate about making a difference.
        </p>
        <div className="space-y-6">
          {/* Placeholder for team members */}
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h2 className="text-3xl font-bold mb-4">John Doe</h2>
            <p className="text-lg">CEO & Founder</p>
          </div>
          <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            <h2 className="text-3xl font-bold mb-4">Jane Smith</h2>
            <p className="text-lg">Head of Operations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;