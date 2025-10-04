import React from "react";

function PriceCard() {
  return (
    <div className="w-full h-full py-20 flex items-center justify-center flex-col gap-5">
      <h2 className="text-[4rem] max-lg:leading-[4rem] max-sm:text-2xl text-center">
        A perfect fit for everyone
      </h2>

      <div className="w-full h-full flex items-center justify-center gap-5 px-[10rem] flex-row flex-wrap max-xl:px-[7vw]">
        <div className="w-1/5 h-[21rem] basis-[15em] grow border-[1px] border-zinc-200 rounded-xl px-6 py-12 bg-[#EAECEF]">
          <span className="w-fit bg-white text-[12px] p-1 rounded-full font-semibold">
            For one person
          </span>
          <h2 className="text-[1.5rem] py-5 font-bold">Canva Free</h2>
          <p className="text-sm">For designing or working on anything.</p>
          <button className="w-full py-2 bg-[#8B3DFF] hover:bg-[#9757f7] transition duration-500 text-white rounded-xl mt-12 font-semibold">
            Get Canva Free
          </button>
        </div>

        <div className="w-1/5 h-[21rem] basis-[15em] grow border-[1px] border-zinc-200 rounded-xl px-6 py-12 bg-[#E7DBFF]">
          <span className="w-fit bg-white text-[12px] p-1 rounded-full font-semibold">
            For one person
          </span>
          <h2 className="text-[1.5rem] py-5 font-bold">Canva Pro</h2>
          <p className="text-sm">
            For growing your brand or passion project with premium features.
          </p>
          <button className="w-full py-2 bg-[#8B3DFF] hover:bg-[#9757f7] transition duration-500 text-white rounded-xl mt-12 font-semibold">
            Get Canva Free
          </button>
        </div>

        <div className="w-1/5 h-[21rem] basis-[15em] grow border-[1px] border-zinc-200 rounded-xl px-6 py-12 bg-[#E7DBFF]">
          <span className="w-fit bg-white text-[12px] p-1 rounded-full font-semibold">
            For one person
          </span>
          <h2 className="text-[1.5rem] py-5 font-bold">Canva Teams</h2>
          <p className="text-sm">
            For teams to create together with premium workplace tools and
            workflows.
          </p>
          <button className="w-full py-2 bg-[#8B3DFF] hover:bg-[#9757f7] transition duration-500 text-white rounded-xl mt-12 font-semibold">
            Get Canva Free
          </button>
        </div>
      </div>
      <p className="text-sm mt-8 text-center">
        Our <span className="text-[#8B3DFF]">pricing page</span> has full
        details.{" "}
        <span className="text-[#8B3DFF]">Educational organisations</span> and
        nonprofits can enjoy premium Canva features for free.
      </p>
    </div>
  );
}

export default PriceCard;
