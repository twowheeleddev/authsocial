import { useState, useEffect } from 'react';
import { useTheme } from '../providers/ThemeProvider';
import statisticsData from '../utils/statisticsData';
import getRandomIndices from '../utils/getRandomIndices';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const { theme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then((response) => response.json())
      .then((data) => {
        const testimonialsData = data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          text: "This is a placeholder testimonial text for testing purposes.",
        }));
        setTestimonials([...testimonialsData, ...testimonialsData]); // Duplicate for seamless scrolling
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const isMobile = window.innerWidth <= 480;

  return (
    <div className={`py-8 overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <h2 className={`text-3xl font-bold text-center ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>What people are saying</h2>

      {/* Scroll container for larger screens */}
      {!isMobile ? (
        <div className="scroll-container">
          <div className="scroll-content">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-6 rounded-lg text-center min-w-[250px] ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-4" />
                <p className={`italic ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{testimonial.text}</p>
                <h3 className={`font-semibold mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Mobile view: display one testimonial at a time
        <div className="flex flex-col items-center">
          <div className={`p-6 rounded-lg text-center min-w-[250px] ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
            {testimonials.length > 0 && (
              <>
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full mb-4" />
                <p className={`italic ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>{testimonials[currentTestimonial].text}</p>
                <h3 className={`font-semibold mt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-900'}`}>{testimonials[currentTestimonial].name}</h3>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;
