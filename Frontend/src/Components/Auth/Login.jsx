import React, { useState } from 'react';
import { X, Mail } from 'lucide-react';
import facebook from '/facebook-new.png';
import google from '/google.png';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login({ sign, setSign }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    try {
      const { data: res } = await axios.post(
        'https://full-stack-project-3-gyov.onrender.com/login',
        data,
        { withCredentials: true }
      );

      if (res && res.success) {
        toast.success(res.message || 'Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        toast.error(res.message || 'Login failed');
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
    <div className="login w-full h-screen fixed top-0 -left-0 z-50 backdrop-blur-[3px]  grid place-items-center bg-[#00000081]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: 'easeOut',
          },
        }}
        className="w-[60%] h-[80%] bg-[#ffff] shadow-xl relative rounded-2xl max-lg:w-[85%] max-lg:h-[70%]"
      >
        <div
          onClick={() => setSign(!sign)}
          className=" absolute -top-0 -right-12 max-lg:top-4 max-lg:right-4 bg-[#00000081] flex items-center justify-center w-10 h-10 rounded-full text-white cursor-pointer"
        >
          <X />
        </div>

        <div className="w-full h-full flex items-start justify-center overflow-hidden max-lg:items-center">
          <div className="w-2/4 flex items-start flex-col gap-4 px-6 py-8 max-lg:w-full max-lg:items-center ">
            <h1 className="text-[1.8rem] font-bold max-lg:text-[1.2rem]">
              Log in or sign up in seconds
            </h1>
            <p className="text-[16px] text-zinc-700 max-lg:text-[12px]">
              Use your email or another service to continue with Canva
              (it&apos;s free)!
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col gap-6"
            >
              <div className=" w-full flex flex-col gap-4">
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  name="email"
                  placeholder="Enter your email"
                  className="w-full border-2 outline-none py-3 px-4 border-md rounded-xl border-gray-200"
                />
                <input
                  type="password"
                  {...register('password', {
                    required: 'Password is required',
                  })}
                  name="password"
                  placeholder="Enter your password"
                  className="w-full border-2 outline-none py-3 px-4 border-md rounded-xl border-gray-200"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="w-full">
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

              <a href="http://localhost:3000/auth/github" target="_blank">
                <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[7px] px-2 rounded-[10px] flex items-center justify-center gap-2 text-center hover:bg-zinc-100 cursor-pointer font-semibold mt-2">
                  <img
                    src={google}
                    alt="image icone google"
                    className="w-[35px]"
                  />
                  <span className="text-[13px] font-bold">
                    Continue with Github
                  </span>
                </button>
              </a>
            </div>

            <p className="text-[13px] w-full">
              By continuing, you agree to Canva&apos;s{' '}
              <span className="text-blue-500 underline cursor-pointer">
                Terms of Use
              </span>
              . Read our Privacy Policy.
            </p>
          </div>

          <img
            src="./image.jpg"
            alt="image"
            className="w-2/4 h-full object-cover rounded-br-2xl rounded-tr-2xl max-lg:hidden"
          />
        </div>
      </motion.div>

      <ToastContainer />
    </div>
  );
}

export default Login;
