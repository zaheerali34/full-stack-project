import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import facebook from '/facebook-new.png';
import google from '/google.png';

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    username: '',
  });
  const { email, password, username } = inputValue;
  const handleOnChange = e => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = err =>
    toast.error(err, {
      position: 'bottom-left',
    });
  const handleSuccess = msg =>
    toast.success(msg, {
      position: 'bottom-right',
    });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        'http://localhost:3000/signup',
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: '',
      password: '',
      username: '',
    });
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="w-full mt-4">
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[7px] px-2 rounded-[10px] flex items-center justify-center gap-2 text-center hover:bg-zinc-100 cursor-pointer font-semibold">
              <img
                src={facebook}
                alt="image icone facebook"
                className="w-[35px]"
              />
              <span className="text-[13px] font-bold">
                Continue with Facebook
              </span>
            </button>
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[7px] px-2 rounded-[10px] flex items-center justify-center gap-2 text-center hover:bg-zinc-100 cursor-pointer font-semibold mt-2">
              <img src={google} alt="image icone google" className="w-[35px]" />
              <span className="text-[13px] font-bold">
                Continue with Google
              </span>
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-2"
          >
            Submit
          </button>
          <span className="block text-center mt-4">
            Already have an account?{' '}
            <Link to="/" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
