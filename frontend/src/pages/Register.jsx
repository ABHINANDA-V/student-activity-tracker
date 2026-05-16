import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/register",
        formData
      );

      toast.success(
        "Registration successful"
      );

      navigate("/");

    } catch (error) {

      toast.error(
        error.response?.data?.detail ||
        "Registration failed"
      );
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center mb-2 text-blue-600">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Register to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold  p-3 rounded-lg transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link
            to="/"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Register;