import React from 'react';

function PlansHome() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-1 py-10">
      <h1 className="text-[3.5rem] font-bold leading-12">
        Inspiring teachers and
      </h1>
      <h1 className="text-[3.5rem] font-bold">engaging students</h1>
      <p className="text-md text-center">
        Create and personalise lesson plans, infographics, posters, video and
        more. 100% free for <br /> teachers and students at eligible schools.
      </p>

      <div className="flex items-center gap-8 py-10">
        <div className="bg-zinc-100 py-6 px-10 rounded-md text-center">
          <h2 className="font-semibold text-xl">Teachers</h2>
          <button className="mt-4 bg-[#8B3DFF] text-white py-2 px-8 rounded-xl hover:bg-[#8B3DFF] cursor-pointer font-semibold">
            Get verified
          </button>
        </div>

        <div className="bg-zinc-100 py-6 px-10 rounded-md text-center">
          <h2 className="font-semibold text-xl">Teachers</h2>
          <button className="mt-4 bg-[#003C64] text-white py-2 px-8 rounded-xl hover:bg-[#03273f] cursor-pointer font-semibold">
            Get verified
          </button>
        </div>

        <div className="bg-zinc-100 py-6 px-10 rounded-md text-center">
          <h2 className="font-semibold text-xl">Teachers</h2>
          <button className="mt-4 bg-white text-black py-2 px-8 rounded-xl cursor-pointer font-semibold ">
            Get verified
          </button>
        </div>
      </div>

      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#F6EDFE] to-[#7FAFB] text-transparent">
        <video
          src="./Plans/video.mp4"
          loop
          autoPlay
          muted
          className="w-2/3 rounded-2xl shadow-xl"
        ></video>
      </div>
    </div>
  );
}

export default PlansHome;
