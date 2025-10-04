import React from "react";

function Section() {
  return (
    <>
      <div className="w-full h-screen py-[10rem] px-8 flex items-center gap-10 justify-between">
        <div className="w-full flex flex-col items-start gap-4">
          <h2 className="text-[3rem] leading-14">
            Enrich your designs with tailored content
          </h2>
          <p className="text-md text-zinc-800">
            Make your designs stand out with world-class photos, graphics,
            videos, audio, fonts, charts, and more. Explore our vast content
            libraries featuring top brands like Disney, Artlist, and pocstock.
          </p>

          <button className="px-4 py-2 bg-[#8B3DFF] hover:bg-[#9757f7] transition duration-500 text-white rounded-xl mt-4 font-semibold">
            Start designs
          </button>
        </div>

        <img
          src="./image one.webp"
          alt=""
          className="w-2/4 rounded-2xl object-cover"
        />
      </div>

      <div className="w-full h-screen py-[10rem] px-8 flex items-center gap-10 justify-between">
        <img
          src="./image two.webp"
          alt=""
          className="w-2/4 rounded-2xl object-cover"
        />
        <div className="w-full flex flex-col items-start gap-4">
          <h2 className="text-[3rem] leading-14">
            Design with others
          </h2>
          <p className="text-md text-zinc-800">
            Invite friends and family to design with you, or set your whole team up to work together. Our collaboration features let you comment and work in real-time on Presentations, Whiteboards, Docs, Videos, or that birthday party planning.
          </p>

          <button className="px-4 py-2 bg-[#8B3DFF] hover:bg-[#9757f7] transition duration-500 text-white rounded-xl mt-4 font-semibold">
            Start designs
          </button>
        </div>
      </div>
    </>
  );
}

export default Section;
