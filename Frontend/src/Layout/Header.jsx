import React, { useState } from 'react';
import MeunBar from '../Components/MeunBar';
import { Menu } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Login from '../Components/Auth/Login';

function Header() {
  const [menu, setMenu] = useState(false);
  const [sign, setSign] = useState(true);

  const headlerClick = () => {
    setMenu(setMenu(!menu));
  };

  const headlerSign = () => {
    setSign(setSign(!sign));
  };

  return (
    <div className="w-full flex items-center justify-between px-12 py-6 max-sm:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMenu(pre => !pre)}
          className="hidden max-lg:block hover:text-zinc-500 cursor-pointer"
        >
          <Menu />
        </button>

        <NavLink to={'/'}>
          <img src="./logo.svg" alt="logo" />
        </NavLink>
      </div>

      <nav>
        <ul className="flex items-center gap-1 font-[font2] max-lg:hidden">
          <NavLink
            to={'/design'}
            className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800"
          >
            Design
          </NavLink>
          <NavLink
            to={'/product'}
            className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800"
          >
            Product
          </NavLink>
          <NavLink
            to={'/plans'}
            className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800"
          >
            Plans
          </NavLink>
          <NavLink className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Business
          </NavLink>
          <NavLink className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Eduction
          </NavLink>
          <NavLink className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Help
          </NavLink>
        </ul>
      </nav>

      <div className="flex gap-3 items-center">
        <button className="px-3 py-[4px] border-[1px] rounded-[8px] border-zinc-200 font-semibold text-zinc-700 hover:bg-zinc-100 transition duration-500 cursor-pointer max-md:hidden">
          Sign up
        </button>
        {sign ? (
          <button
            onClick={headlerSign}
            className="bg-[#9653f5] px-3 py-[5px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer"
          >
            Log in
          </button>
        ) : (
          <Login sign={sign} setSign={setSign} />
        )}
      </div>

      {menu ? <MeunBar headlerClick={headlerClick} menu={menu} /> : ''}
    </div>
  );
}

export default Header;
