import React, { useState } from "react";
import content from "../../utils/CardImage.js";

function Card() {
  const [activeNavItem, setActiveNavItem] = useState("Everyone");
  
  const navbar = [
    "Everyone",
    "Marketers",
    "Sales",
    "Small Business",
    "Creative",
    "Education",
  ];

  return (
    <div className="w-full h-full flex items-center justify-center flex-col py-10 gap-4 ">
      <h2 className="text-[4rem] ">Make any task a breeze</h2>
      <p className="text-[1.3rem] text-gray-800">
        From editing to organising, these most-loved tools do the heavy lifting.
      </p>

      <div className="w-fit flex items-center justify-center gap-4 mt-10 bg-white shadow-xl p-4 rounded-full">
        {navbar.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveNavItem(item)}
            className={`px-4 py-3 rounded-full cursor-pointer text-[1rem] font-semibold hover:bg-gray-100 transition-all ${
              activeNavItem === item
                ? "bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white"
                : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="w-full px-10">
        <div className="w-full h-[350px] bg-red-600/30 rounded-xl mt-10 flex items-center justify-between">
          <div className="px-12">
            <h2 className="text-[2.1rem]">{content[activeNavItem]?.top?.tage}</h2>
            <p className="text-md">{content[activeNavItem]?.top?.pelegrah}</p>

            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10">Learn more</button>
          </div>

           <img
            src={content[activeNavItem]?.top?.img}
            alt=""
            className="w-1/3 object-cover rounded-xl"
          />
        </div>

        <div className="w-full flex items-center justify-center gap-5 mt-8">
          <div className="w-full h-full bg-white hover:shadow-2xl transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <img src={content[activeNavItem]?.One?.img} alt="" className="w-full object-cover rounded-xl" />
            <h2 className="text-md px-6 pt-6 font-semibold">{content[activeNavItem]?.One?.tage}</h2>
            <p className="px-6 py-3 text-sm">{content[activeNavItem]?.One?.pelegrah}</p>
             <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">Learn more</button>
          </div>
          
          <div className="w-full h-full bg-white hover:shadow-2xl transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <img src={content[activeNavItem]?.Two?.img} alt="" className="w-full object-cover rounded-xl" />
            <h2 className="text-md px-6 pt-6 font-semibold">{content[activeNavItem]?.Two?.tage}</h2>
            <p className="px-6 py-3 text-sm">{content[activeNavItem]?.Two?.pelegrah}</p>
             <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">Learn more</button>
          </div>

           <div className="w-full h-full bg-white hover:shadow-2xl transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <img src={content[activeNavItem]?.Three?.img} alt="" className="w-full object-cover rounded-xl" />
            <h2 className="text-md px-6 pt-6 font-semibold">{content[activeNavItem]?.Three?.tage}</h2>
            <p className="px-6 py-3 text-sm">{content[activeNavItem]?.Three?.pelegrah}</p>
             <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">Learn more</button>
          </div>

           <div className="w-full h-full bg-white hover:shadow-2xl transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <img src={content[activeNavItem]?.Four?.img} alt="" className="w-full object-cover rounded-xl" />
            <h2 className="text-md px-6 pt-6 font-semibold">{content[activeNavItem]?.Four?.tage}</h2>
            <p className="px-6 py-3 text-sm">{content[activeNavItem]?.Four?.pelegrah}</p>
             <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
