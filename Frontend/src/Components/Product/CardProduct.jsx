import { useState } from 'react';
import Product from '../../utils/Product';

function CardProduct() {
  const [activeNavItem, setActiveNavItem] = useState('All');

  const navbar = ['All', 'Video', 'Other'];

  return (
    <div className="w-full h-full py-14 px-10">
      <h1 className="text-[2.5rem] font-semibold">Video</h1>
      <div className="w-full flex items-center gap-2 py-4">
        {navbar.map(item => (
          <button
            key={item}
            onClick={() => setActiveNavItem(item)}
            className={`px-8 py-3 bg-zinc-100 rounded-full cursor-pointer text-[1rem] max-md:text-[0.8rem] font-semibold hover:bg-gray-100 transition-all ${
              activeNavItem === item
                ? 'bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 text-white'
                : ''
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="w-full h-[30rem] bg-center bg-cover rounded-2xl mt-4 flex items-start justify-center flex-col gap-4 px-8 max-md:hidden"
        style={{
          backgroundImage: Product[activeNavItem]?.top?.img
            ? `url(${Product[activeNavItem].top.img})`
            : 'none',
        }}
      >
        <h4 className="uppercase font-semibold">
          {' '}
          {Product[activeNavItem]?.top.tageOne}
        </h4>
        <h1 className="text-3xl max-w-2/4 font-semibold">
          {Product[activeNavItem]?.top.tageTwo}
        </h1>
        <p className="max-w-2/4">{Product[activeNavItem]?.top.pelegrah}</p>
        <button className="border-[1px] py-3 px-4 hover:bg-[#cff4ff] rounded-xl border-zinc-300 font-semibold text-sm">
          Learm More
        </button>
      </div>

      <div className="w-full flex items-center justify-between gap-8 max-md:flex-wrap">
        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={Product[activeNavItem]?.One.img}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            {Product[activeNavItem]?.One.tage}
          </h3>
          <h2 className="font-semibold text-xl">
            {Product[activeNavItem]?.One.tage}
          </h2>
          <p className="text-sm text-zinc-700">
            {Product[activeNavItem]?.One.pelegrah}
          </p>
        </div>

        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={Product[activeNavItem]?.Two.img}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            {Product[activeNavItem]?.Two.tage}
          </h3>
          <h2 className="font-semibold text-xl">
            {Product[activeNavItem]?.Two.tage}
          </h2>
          <p className="text-sm text-zinc-700">
            {Product[activeNavItem]?.Two.pelegrah}
          </p>
        </div>

        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={Product[activeNavItem]?.Three.img}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            {Product[activeNavItem]?.Three.tage}
          </h3>
          <h2 className="font-semibold text-xl">
            {Product[activeNavItem]?.Three.tage}
          </h2>
          <p className="text-sm text-zinc-700">
            {Product[activeNavItem]?.Three.pelegrah}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
