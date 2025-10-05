import React from "react";

function BgSection() {
  return (
    <div className="w-full h-full py-[18rem] my-8 flex items-center justify-center gap-4 bg-linear-[90deg,#00c4cc,#5a32fa,#7d2ae8] text-white flex-col">
      <div className="w-full flex items-center justify-center gap-4">
        <h1 className="text-[4rem]">Start designing with</h1>
        <img
          src={`https://static.canva.com/web/images/856bac30504ecac8dbd38dbee61de1f1.svg`}
          alt="logo image"
          className="w-[12rem]"
        />
      </div>

      <button className="py-3 px-8 bg-zinc-100 rounded-md text-zinc-800 font-semibold hover:bg-zinc-200 transition duration-500">
        Get started for free
      </button>
    </div>
  );
}

export default BgSection;
