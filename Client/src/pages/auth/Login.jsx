import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeContext from "../../context/ThemeContext";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { theme } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    username: "", // Changed to username
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    setFormData({
      username: "",
      password: "",
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth", // Updated endpoint to /auth
        formData // Send username and password
      );
      const { token } = response.data;
      login(token);
      navigate("/profile");
    } catch (error) {
      setError(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-900" : "bg-gray-100"
        }`}
    >
      <div
        className={`p-8 rounded-lg shadow-lg w-full max-w-md ${theme === "dark" ? "bg-gray-800" : "bg-white"
          }`}
      >
        <h2
          className={`text-2xl font-bold mb-6 text-center ${theme === "dark" ? "text-white" : "text-gray-900"
            }`}
        >
          Login to Your Account
        </h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text" // Changed to text input type
            name="username" // Updated name to 'username'
            placeholder="Username"
            value={formData.username} // Updated value binding
            onChange={handleChange}
            className={`w-full p-3 mb-4 ${theme === "dark"
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-gray-100 text-gray-900 border-gray-300"
              } border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required // Make username field required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-3 mb-6 ${theme === "dark"
              ? "bg-gray-700 text-white border-gray-600"
              : "bg-gray-100 text-gray-900 border-gray-300"
              } border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
            required // Make password field required
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
