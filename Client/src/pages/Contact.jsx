// src/pages/Contact.jsx
import PageTemplate from '../components/PageTemplate';

const Contact = () => (
  <PageTemplate title="Contact Us">
    <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg space-y-6">

      {/* Introduction */}
      <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
        Reach out with any questions, concerns, or ideas to support our mission. We’re here to help!
      </p>

      {/* Contact Information */}
      <div className="text-center space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Contact Information</h2>
        <p className="text-gray-500 dark:text-gray-400">📍 123 Social Shelters Avenue, Cityville, ST 12345</p>
        <p className="text-gray-500 dark:text-gray-400">📞 (123) 456-7890</p>
        <p className="text-gray-500 dark:text-gray-400">✉️ contact@socialshelters.org</p>
      </div>

      {/* Contact Form */}
      <form className="space-y-6">
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 transition"
            placeholder="Your Name"
          />
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 transition"
            placeholder="Your Email"
          />
        </div>
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="message">Message</label>
          <textarea
            id="message"
            className="w-full p-3 mt-1 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-gray-100 transition"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 transition font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  </PageTemplate>
);

export default Contact;
