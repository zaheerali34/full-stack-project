import React from 'react';
import OneImage from '/Product/one.webp';
import TwoImage from '/Product/two.webp';

function ProductHome() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col py-20">
      <h1 className="max-w-2/4 px-10 text-[3.7rem] text-center font-bold max-xl:text-[3rem] max-xl:max-w-full max-lg:max-w-full max-sm:text-2xl">
        Discover features that unlock your creativity
      </h1>
      <p className="max-w-2/4 text-center py-4 max-md:max-w-full px-6 max-sm:text-sm">
        Design and edit like a pro on Canva. Enhance images, convert PDFs, add
        text to video, and more. Our slew of clever features lets you take your
        content to the next level — in just a few clicks.
      </p>
      <button className="bg-[#9653f5] px-5 py-[10px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer mt-4 max-md:w-2/4 text-md">
        Start designing now
      </button>

      <div className="w-full flex items-center gap-8 py-20 px-32 max-lg:px-10 max-md:flex-col max-sm:px-4">
        <div className="cardContainer w-2/4 h-full py-10 cursor-progress rounded-2xl overflow-hidden max-md:w-full">
          <img
            src={OneImage}
            alt="Image"
            className="cardImage w-full h-[30rem] object-cover rounded-2xl max-sm:h-[20rem]"
          />
          <h1 className="text-2xl pt-4 font-bold text-zinc-800">
            Text to Image
          </h1>
          <p className="text-md pt-3 text-zinc-800">
            Free Online AI Image Generator
          </p>
        </div>

        <div className="cardContainer w-2/4 h-full py-10 cursor-progress rounded-2xl overflow-hidden max-md:w-full">
          <img
            src={TwoImage}
            alt="Image"
            className="cardImage w-full h-[30rem] object-cover rounded-2xl max-sm:h-[20rem]"
          />
          <h1 className="text-2xl pt-4 font-bold text-zinc-800">PDF Editor</h1>
          <p className="text-md pt-3 text-zinc-800">
            Edit and convert your PDFs into online designs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductHome;
