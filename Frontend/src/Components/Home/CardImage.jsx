import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function CardImage({ activeNavItem, content }) {
  return (
    <div className="w-full px-10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNavItem}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.2 }}
          style={{
            backgroundColor: content[activeNavItem]?.top?.bgColor,
            color: content[activeNavItem]?.top?.textColor,
          }}
          className="w-full h-[350px] rounded-xl mt-10 flex items-center justify-between overflow-hidden cursor-pointer"
        >
          <div className="px-12">
            <h2 className="text-[2.1rem]">
              {content[activeNavItem]?.top?.tage}
            </h2>
            <p className="text-md">{content[activeNavItem]?.top?.pelegrah}</p>

            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10">
              Learn more
            </button>
          </div>

          <img
            src={content[activeNavItem]?.top?.img}
            alt=""
            className="object-cover rounded-xl h-full"
          />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeNavItem}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full flex items-center justify-center gap-5 mt-8"
        >
          <div className="cardContainer w-full bg-white hover:shadow-2xl transition duration-500 border-[1px] cursor-pointer rounded-2xl border-zinc-300 overflow-hidden">
            <div
              className="w-full h-2/4 rounded-2xl"
              style={{ backgroundColor: content[activeNavItem]?.One?.bgColor }}
            >
              <img
                src={content[activeNavItem]?.One?.img}
                alt=""
                className="cardImage w-full object-cover rounded-2xl transition duration-500"
              />
            </div>
            <h2 className="text-md px-6 pt-6 font-semibold">
              {content[activeNavItem]?.One?.tage}
            </h2>
            <p className="px-6 py-3 text-sm">
              {content[activeNavItem]?.One?.pelegrah}
            </p>
            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
              Learn more
            </button>
          </div>

          <div className="cardContainer w-full h-full bg-white hover:shadow-2xl cursor-pointer transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <div
              className="w-full h-2/4 rounded-2xl"
              style={{ backgroundColor: content[activeNavItem]?.Two?.bgColor }}
            >
              <img
                src={content[activeNavItem]?.Two?.img}
                alt=""
                className="cardImage w-full object-cover rounded-2xl transition duration-500"
              />
            </div>
            <h2 className="text-md px-6 pt-6 font-semibold">
              {content[activeNavItem]?.Two?.tage}
            </h2>
            <p className="px-6 py-3 text-sm">
              {content[activeNavItem]?.Two?.pelegrah}
            </p>
            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
              Learn more
            </button>
          </div>

          <div className="cardContainer w-full h-full bg-white hover:shadow-2xl cursor-pointer transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <div
              className="w-full h-2/4 rounded-2xl"
              style={{
                backgroundColor: content[activeNavItem]?.Three?.bgColor,
              }}
            >
              <img
                src={content[activeNavItem]?.Three?.img}
                alt=""
                className="cardImage w-full object-cover rounded-2xl transition duration-500"
              />
            </div>
            <h2 className="text-md px-6 pt-6 font-semibold">
              {content[activeNavItem]?.Three?.tage}
            </h2>
            <p className="px-6 py-3 text-sm">
              {content[activeNavItem]?.Three?.pelegrah}
            </p>
            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
              Learn more
            </button>
          </div>

          <div className="cardContainer w-full h-full bg-white hover:shadow-2xl cursor-pointer transition duration-500 border-[1px] rounded-2xl border-zinc-300 overflow-hidden">
            <div
              className="w-full h-2/4 rounded-2xl"
              style={{ backgroundColor: content[activeNavItem]?.Four?.bgColor }}
            >
              <img
                src={content[activeNavItem]?.Four?.img}
                alt=""
                className="cardImage w-full object-cover rounded-2xl transition duration-500"
              />
            </div>
            <h2 className="text-md px-6 pt-6 font-semibold">
              {content[activeNavItem]?.Four?.tage}
            </h2>
            <p className="px-6 py-3 text-sm">
              {content[activeNavItem]?.Four?.pelegrah}
            </p>
            <button className="p-2 bg-white rounded-md text-md font-semibold text-zinc-800 mt-10 border-[1px] border-zinc-300 my-6 mx-6">
              Learn more
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default CardImage;
