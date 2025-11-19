import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import facebook from '/facebook-new.png';
import google from '/google.png';
import { useForm } from 'react-hook-form';

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const { data: res } = await axios.post(
        'http://localhost:3000/signup',
        data,
        { withCredentials: true }
      );

      if (res && res.success) {
        toast.success(res.message || 'Signup successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 800);
      } else {
        toast.error(res.message || 'Signup failed');
      }
    } catch (error) {
      toast.error(
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : `Signup error: ${error.message}`
      );
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Signup Account</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              placeholder="Enter your email"
              {...register('email', { required: 'Email is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
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
              placeholder="Enter your username"
              {...register('username', { required: 'Username is required' })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
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
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Minimum 8 characters' },
                pattern: { value: /^[A-Za-z]+$/i, message: 'Password must contain only letters' }
              })}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
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
