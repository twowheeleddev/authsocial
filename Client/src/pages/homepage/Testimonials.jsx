import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=25")
      .then(response => response.json())
      .then(data => {
        const testimonialTexts = [
          "Social Shelters helped me find a place to stay when I needed it the most.",
          "Thanks to Social Shelters, I was able to volunteer and make a difference in my community.",
          "I highly recommend Social Shelters to anyone looking to give back to their community.",
          "The support I received from Social Shelters was amazing and life-changing.",
          "Social Shelters made it easy for me to find volunteering opportunities.",
          "I found a great place to volunteer and meet new people through Social Shelters.",
          "Social Shelters connected me with a community that truly cares.",
          "I appreciate the support and opportunities provided by Social Shelters.",
          "Social Shelters is a fantastic resource for finding volunteer work.",
          "I made lifelong friends while volunteering through Social Shelters.",
          "Social Shelters helped me make a positive impact in my community.",
          "The platform is user-friendly and incredibly helpful.",
          "Social Shelters has a wide range of volunteering opportunities.",
          "I love how easy it is to find volunteer work with Social Shelters.",
          "Social Shelters is a blessing for those in need and those who want to help.",
          "Volunteering through Social Shelters has been a rewarding experience.",
          "Social Shelters made the process of finding a shelter quick and easy.",
          "I highly recommend Social Shelters to everyone.",
          "Social Shelters is a lifeline for many people.",
          "I am grateful for the opportunities provided by Social Shelters.",
          "Social Shelters is a great way to give back to the community.",
          "I found the perfect volunteer job through Social Shelters.",
          "Social Shelters has changed my life for the better.",
          "Thank you, Social Shelters, for all the support.",
          "Social Shelters is an amazing platform for volunteers.",
        ];
        const userTestimonials = data.results.map((user, index) => ({
          text: testimonialTexts[index % testimonialTexts.length],
          author: `${user.name.first} ${user.name.last}`,
          image: user.picture.medium,
        }));
        setTestimonials(userTestimonials);
      });
  }, []);

  return (
    <div className="py-8 dark:bg-gray-900 bg-gray-100 overflow-hidden">
      <h2 className="text-3xl font-bold text-primary-light dark:text-primary-dark text-center mb-20">
        Testimonials
      </h2>
      <div className="scroll-container">
        <div className="scroll-content flex text-md space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-lg text-center min-w-[250px] bg-gray-100 dark:bg-gray-900"
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-secondary-light dark:text-secondary-dark italic">
                {`"${testimonial.text}"`}
              </p>
              <h3 className="text-xl font-bold mt-4 text-primary-light dark:text-primary-dark">
                - {testimonial.author}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32"></div>
    </div>
  );
};

export default Testimonials;
