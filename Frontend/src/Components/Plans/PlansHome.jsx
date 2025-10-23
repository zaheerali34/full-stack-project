import React from 'react';

function PlansHome() {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-1 py-10">
      <h1 className="text-[3.5rem] font-bold leading-12 max-md:leading-5 max-md:text-[2.5rem]">
        Inspiring teachers and
      </h1>
      <h1 className="text-[3.5rem] font-bold max-md:text-[2.5rem]">
        engaging students
      </h1>
      <p className="text-md text-center max-md:text-sm py-10">
        Create and personalise lesson plans, infographics, posters, video and
        more. 100% free for <br /> teachers and students at eligible schools.
      </p>

      <div className="flex items-center max-md:flex-col gap-8 py-10">
        <div className=" bg-zinc-100 py-6 px-10 rounded-md text-center max-md:bg-[#8B3DFF] max-md:flex max-md:items-end max-md:py-5">
          <h2 className="font-semibold text-xl max-md:text-white">Teachers</h2>
          <button className="mt-4 max-md:mt-0 bg-[#8B3DFF] text-white py-2 px-8 rounded-xl hover:bg-[#8B3DFF] max-md:hover:bg-[#8B3DFF] cursor-pointer font-semibold max-md:py-0 max-md:px-4 max-md:text-xl">
            Get verified
          </button>
        </div>

        <div className=" bg-zinc-100 py-6 px-10 rounded-md text-center max-md:bg-[#003C64] max-md:flex max-md:items-end max-md:py-5">
          <h2 className="font-semibold text-xl max-md:text-white">Teachers</h2>
          <button className="mt-4 max-md:mt-0  bg-[#003C64] text-white py-2 px-8 rounded-xl hover:bg-[#8B3DFF] max-md:hover:bg-[#003C64]  cursor-pointer font-semibold max-md:py-0 max-md:px-4 max-md:text-xl">
            Get verified
          </button>
        </div>

        <div className=" bg-zinc-100 py-6 px-10 rounded-md text-center max-md:bg-[#ffff] max-md:flex max-md:items-end max-md:py-5">
          <h2 className="font-semibold text-xl max-md:text-black">Teachers</h2>
          <button className="mt-4 max-md:mt-0 bg-[#fff] text-black py-2 px-8 rounded-xl hover:bg-[#8B3DFF] max-md:hover:bg-[#ffff] cursor-pointer font-semibold max-md:py-0 max-md:px-4 max-md:text-xl">
            Get verified
          </button>
        </div>
      </div>

      <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#efecf1] to-[#7FAFB] text-transparent">
        <video
          src="./Plans/video.mp4"
          loop
          autoPlay
          muted
          className="w-2/3 rounded-2xl shadow-xl max-md:w-[90%]"
        ></video>
      </div>
    </div>
  );
}

export default PlansHome;
