import React from 'react';
import { X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function MeunBar({ headlerClick, menu }) {
  return (
    <section className="w-full h-screen fixed top-0 -left-0 z-50 backdrop-blur-md">
      <div className="w-2/4 max-sm:w-full h-full bg-[#ffffffe8] shadow-2xl relative">
        <button
          onClick={() => headlerClick(!menu)}
          className="py-6 px-8 hover:text-zinc-600 cursor-pointer"
        >
          <X />
        </button>

        <div>
          <nav>
            <ul className="flex items-start gap-1 font-[font2] flex-col px-8">
              <NavLink
                to={'/design'}
                className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800"
              >
                Design
              </NavLink>
              <NavLink
                to={'/product'}
                className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800"
              >
                Product
              </NavLink>
              <NavLink
                to={'/plans'}
                className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800"
              >
                Plans
              </NavLink>
              <NavLink className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800">
                Business
              </NavLink>
              <NavLink className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800">
                Eduction
              </NavLink>
              <NavLink className="w-full cursor-pointer px-2 py-4 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800">
                Help
              </NavLink>
            </ul>
          </nav>

          <div className="w-full flex flex-col gap-3 items-center px-8 absolute bottom-4 max-sm:bottom-10">
            <button className="w-full px-5 py-[10px] bg-white rounded-[8px] font-semibold text-zinc-900 hover:bg-zinc-300 transition duration-500 cursor-pointer border-1 border-zinc-400">
              Sign up
            </button>
            <button className="w-full bg-[#9653f5] pw-full px-5 py-[10px] rounded-[8px] font-semibold text-zinc-900 hover:bg-[#781ff6] transition duration-500 cursor-pointer border-1  border-zinc-400">
              Log in
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeunBar;
