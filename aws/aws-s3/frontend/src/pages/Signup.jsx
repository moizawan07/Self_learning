import axios from "axios";
import React, { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      formData.append("image", form.image);

      await axios.post("http://localhost:3000/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        {/* Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <label htmlFor="image" className="cursor-pointer">
            <img
              src={
                form.image
                  ? URL.createObjectURL(form.image)
                  : "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              }
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <p className="text-sm text-gray-500 mt-2">Upload profile image</p>
        </div>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password */}
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path
                  d="M3 3l14 14M10.5 6.5A3.5 3.5 0 0013.5 10"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor">
                <path
                  d="M1 10s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6z"
                  strokeWidth="2"
                />
                <circle cx="10" cy="10" r="3" strokeWidth="2" />
              </svg>
            )}
          </button>
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Signup;
