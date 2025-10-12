import React from 'react';
import ImageDB from '../../utils/ImageDB.js';

function CardDesign() {
  return (
    <div className="w-full py-8 px-8 flex items-center justify-center flex-col">
      <h1 className="text-[3rem] font-semibold max-md:text-[2rem] text-center">
        Design and print in one place
      </h1>
      <p className="max-w-2/4 text-center text-zinc-800 py-2 max-md:text-[0.7rem] max-md:max-w-full">
        Bring your designs to life. Canva Print lets you design and print
        products to be delivered to your door or picked up in-store. From mugs
        to posters, it&apos;s planet-friendly printing, all in one place.
      </p>

      <div className="w-full flex items-center gap-6 py-10 max-md:flex-col">
        <div
          style={{ backgroundColor: ImageDB.DesignPage.One.bgColor }}
          className=" w-full bg-white rounded-2xl border-zinc-300 overflow-hidden"
        >
          <div className="w-full h-2/4 rounded-2xl">
            <img
              src={ImageDB.DesignPage.One.img}
              alt=""
              className=" w-full object-cover rounded-2xl transition duration-500"
            />
          </div>
          <h2 className="text-md px-6 pt-6 font-semibold">
            {ImageDB.DesignPage.One.tage}
          </h2>
          <p className="px-6 py-3 text-sm">{ImageDB.DesignPage.One.pelegrah}</p>
          <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
            Shop business cards
          </button>
        </div>

        <div
          style={{ backgroundColor: ImageDB.DesignPage.Two.bgColor }}
          className=" w-full bg-white rounded-2xl border-zinc-300 overflow-hidden"
        >
          <div className="w-full h-2/4 rounded-2xl">
            <img
              src={ImageDB.DesignPage.Two.img}
              alt=""
              className=" w-full object-cover rounded-2xl transition duration-500"
            />
          </div>
          <h2 className="text-md px-6 pt-6 font-semibold">
            {ImageDB.DesignPage.Three.tage}
          </h2>
          <p className="px-6 py-3 text-sm">{ImageDB.DesignPage.One.pelegrah}</p>
          <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
            Shop Tote bags
          </button>
        </div>

        <div
          style={{ backgroundColor: ImageDB.DesignPage.Three.bgColor }}
          className=" w-full bg-white rounded-2xl border-zinc-300 overflow-hidden"
        >
          <div className="w-full h-2/4 rounded-2xl">
            <img
              src={ImageDB.DesignPage.Three.img}
              alt=""
              className=" w-full object-cover rounded-2xl transition duration-500"
            />
          </div>
          <h2 className="text-md px-6 pt-6 font-semibold">
            {ImageDB.DesignPage.Three.tage}
          </h2>
          <p className="px-6 py-3 text-sm">
            {ImageDB.DesignPage.Three.pelegrah}
          </p>
          <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
            Shop Brochures
          </button>
        </div>
      </div>

      <div className="w-full flex items-center gap-6 py-6  max-md:flex-col">
        <div
          style={{ backgroundColor: ImageDB.DesignPage.Four.bgColor }}
          className=" w-full bg-white rounded-2xl border-zinc-300 overflow-hidden"
        >
          <div className="w-full h-2/4 rounded-2xl">
            <img
              src={ImageDB.DesignPage.Four.img}
              alt=""
              className=" w-full object-cover rounded-2xl transition duration-500"
            />
          </div>
          <h2 className="text-md px-6 pt-6 font-semibold">
            {ImageDB.DesignPage.Four.tage}
          </h2>
          <p className="px-6 py-3 text-sm">
            {ImageDB.DesignPage.Four.pelegrah}
          </p>
          <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
            Shop Posters
          </button>
        </div>

        <div
          style={{ backgroundColor: ImageDB.DesignPage.Five.bgColor }}
          className=" w-full bg-white rounded-2xl border-zinc-300 overflow-hidden"
        >
          <div className="w-full h-2/4 rounded-2xl">
            <img
              src={ImageDB.DesignPage.Five.img}
              alt=""
              className=" w-full object-cover rounded-2xl transition duration-500"
            />
          </div>
          <h2 className="text-md px-6 pt-6 font-semibold">
            {ImageDB.DesignPage.Five.tage}
          </h2>
          <p className="px-6 text-sm">{ImageDB.DesignPage.Five.pelegrah}</p>
          <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
            Shop Stickers
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDesign;
