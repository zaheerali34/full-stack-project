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
        <div className="w-full h-[350px] bg-red-600/30 rounded-xl mt-10">
          <img
            src={content[activeNavItem]?.top?.img}
            alt=""
            className="w-[10rem] object-cover rounded-xl"
          />
          <h1>{content[activeNavItem]?.top?.tage}</h1>
          <p>{content[activeNavItem]?.top?.pelegrah}</p>
        </div>

        <div className="w-full flex items-center justify-center gap-5 mt-8">
          <div className="w-full h-[400px] bg-blue-500 rounded-md">
            <h2>{content[activeNavItem]?.One?.tage}</h2>
            <img src={content[activeNavItem]?.One?.img} alt="" className="w-[10rem] object-cover rounded-xl" />
          </div>
          
          <div className="w-full h-[400px] bg-blue-500 rounded-md">
            <h2>{content[activeNavItem]?.Two?.tage}</h2>
            <img src={content[activeNavItem]?.Two?.img} alt="" className="w-[10rem] object-cover rounded-xl" />
          </div>

           <div className="w-full h-[400px] bg-blue-500 rounded-md">
            <h2>{content[activeNavItem]?.Three?.tage}</h2>
            <img src={content[activeNavItem]?.Three?.img} alt="" className="w-[10rem] object-cover rounded-xl" />
          </div>

           <div className="w-full h-[400px] bg-blue-500 rounded-md">
            <h2>{content[activeNavItem]?.Four?.tage}</h2>
            <img src={content[activeNavItem]?.Four?.img} alt="" className="w-[10rem] object-cover rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
