import React from 'react';
import { X, Mail } from 'lucide-react';
import facebook from '/facebook-new.png';
import google from '/google.png';
import { motion } from 'framer-motion';

function Login({ sign, setSign }) {
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
              Use your email or another service to continue with Canva (it&apos;s
              free)!
            </p>
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[5px] px-4 rounded-[10px] flex items-center gap-10 text-center hover:bg-zinc-100 cursor-pointer font-semibold max-lg:justify-center max-lg:gap-4">
              <img
                src={facebook}
                alt="image icone facebook"
                className="w-[35px]"
              />
              Continue with Facebook
            </button>
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[5px] px-4 rounded-[10px] flex items-center gap-10 text-center hover:bg-zinc-100 cursor-pointer font-semibold max-lg:justify-center max-lg:gap-4">
              <img src={google} alt="image icone google" className="w-[35px]" />
              Continue with Google
            </button>
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[10px] px-4 rounded-[10px] flex items-center gap-10 text-center hover:bg-zinc-100 cursor-pointer font-semibold max-lg:justify-center max-lg:gap-4">
              <Mail />
              Continue with Email
            </button>
            <button className="w-full text-zinc-800 border-2 border-zinc-200 py-[10px] px-4 rounded-[10px] gap-10 text-center hover:bg-zinc-100 cursor-pointer font-semibold max-lg:justify-center max-lg:gap-4">
              Continue another way
            </button>
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
    </div>
  );
}

export default Login;
