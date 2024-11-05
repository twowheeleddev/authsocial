import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const features = [
  {
    id: 1,
    title: "Find Shelters",
    description: "Locate nearby shelters with ease.",
    url: "/shelters",
  },
  {
    id: 2,
    title: "Organize Events",
    description: "Create and join community events.",
    url: "/organize-events",
  },
  {
    id: 3,
    title: "Volunteer",
    description: "Help others by volunteering your time.",
    url: "/volunteers",
  },
];

const Features = () => {
  return (
    <div className="py-2">
      <h2 className="text-3xl text-purple-500 dark:text-purple-400 tracking-widest font-bold text-center mb-4">
        Features
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4 mb-36">
        {features.map(feature => (
          <motion.div
            key={feature.id}
            className="bg-gray-200 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center cursor-pointer w-full md:w-1/3 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            whileHover={{scale: 1.05}}
          >
            <Link to={feature.url}>
              <h3 className="text-xl font-bold mb-2 text-yellow-500 dark:text-yellow-400">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {feature.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
