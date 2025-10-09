import React from 'react';
import { X } from 'lucide-react';

function MeunBar({ headlerClick, menu, navbar }) {
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
            <ul className="w-full py-4 px-8 font-[font2]">
              {navbar.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-2 py-3 hover:bg-zinc-300/40 rounded-md text-xl font-semibold transition-all duration-500  hover:text-zinc-900"
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-full flex flex-col gap-3 items-center px-8 absolute bottom-4">
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
