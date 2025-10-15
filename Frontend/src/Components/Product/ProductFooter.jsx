import React from 'react';
import One from '/Product/footer_floating two.avif';
import Two from '/Product/footer_floating.avif';

function ProductFooter() {
  return (
    <div className="w-full h-full py-20 px-[10rem] max-xl:px-[2rem] flex items-center gap-20 bg-[#F2F0FF] max-md:flex-col max-md:text-center">
      <div className="w-2/4 max-md:w-full">
        <h1 className="text-4xl font-semibold py-2">Incredible features.</h1>
        <h1 className="text-4xl font-semibold">Effortless designs.</h1>
        <p className="w-full py-4 max-md:text-sm">
          Make your design process a breeze. With impressive features all in one
          place, creating content that stands out has never been this easy. Sign
          up today and make the most of what Canva has to offer.
        </p>
        <button className="bg-[#9653f5] px-5 py-[10px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer mt-4 max-md:w-full text-md">
          Start designing now
        </button>
      </div>

      <div className="w-2/4 relative max-md:w-full max-md:mt-20">
        <img src={One} alt="this image" className="w-2/3 ml-36" />
        <img
          src={Two}
          alt="this image"
          className="w-[13rem] absolute -top-32"
        />
      </div>
    </div>
  );
}

export default ProductFooter;
