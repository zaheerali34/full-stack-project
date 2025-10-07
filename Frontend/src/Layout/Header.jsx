import React, { useState } from "react";
import MeunBar from "../Components/MeunBar";
import { Menu } from "lucide-react";

function Header() {
  const [menu, setMenu] = useState(false);

  const headlerClick = () => {
    setMenu(setMenu(!menu));
  };

  const navbar = ["Design", "Product", "Plans", "Business", "Eduction", "Help"];

  return (
    <div className="w-full flex items-center justify-between px-12 py-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setMenu((pre) => !pre)}
          className="hidden max-lg:block hover:text-zinc-500 cursor-pointer"
        >
          <Menu />
        </button>
        <img src="./logo.svg" alt="logo" />
      </div>

      <nav>
        <ul className="flex items-center gap-1 font-[font2] max-lg:hidden">
          {navbar.map((items) => (
            <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800">
              {items}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-3 items-center">
        <button className="px-3 py-[4px] border-[1px] rounded-[8px] border-zinc-200 font-semibold text-zinc-700 hover:bg-zinc-100 transition duration-500 cursor-pointer">
          Sign up
        </button>
        <button className="bg-[#9653f5] px-3 py-[5px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer">
          Log in
        </button>
      </div>

      {menu ? (
        <MeunBar headlerClick={headlerClick} menu={menu} navbar={navbar} />
      ) : (
        ""
      )}
    </div>
  );
}

export default Header;
