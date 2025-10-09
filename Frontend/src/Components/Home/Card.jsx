import React, { useState } from 'react';
import content from '../../utils/CardImage.js';
import CardImage from './CardImage.jsx';

function Card() {
  const [activeNavItem, setActiveNavItem] = useState('Everyone');

  const navbar = [
    'Everyone',
    'Marketers',
    'Sales',
    'SmallBusiness',
    'Creative',
    'Education',
  ];

  return (
    <div className="w-full h-full flex items-center justify-center flex-col py-10 gap-4 max-sm:text-center">
      <h2 className="text-[4rem] max-md:text-[2.5rem] max-sm:leading-10">
        Make any task a breeze
      </h2>
      <p className="text-[1.3rem] text-gray-800 max-md:text-[0.8rem]">
        From editing to organising, these most-loved tools do the heavy lifting.
      </p>

      <div className="w-fit flex items-center justify-center gap-4 mt-10 bg-white shadow-xl p-4 max-md:p-2 rounded-full flex-wrap">
        {navbar.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveNavItem(item)}
            className={`px-4 py-3 rounded-full cursor-pointer text-[1rem] max-md:text-[0.8rem] font-semibold hover:bg-gray-100 transition-all ${
              activeNavItem === item
                ? 'bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 text-white'
                : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <CardImage activeNavItem={activeNavItem} content={content} />
    </div>
  );
}

export default Card;
