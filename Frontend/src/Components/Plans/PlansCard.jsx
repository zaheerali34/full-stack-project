import React from 'react';
import One from '/Plans/1.webp';
import Two from '/Plans/2.webp';
import Three from '/Plans/3.webp';

function PlansCard() {
  return (
    <div className="w-full flex items-center justify-center py-20 flex-col px-32">
      <h1 className="text-[2rem] w-2/4 text-center font-semibold leading-10">
        Visual communication and collaboration is an important tool for learning
      </h1>

      <div className="w-full flex items-center justify-between mt-10 gap-10">
        <div className="text-center flex flex-col items-center gap-5 w-1/4">
          <img src={One} alt="One Image" className="w-2/5" />
          <h2 className="text-2xl font-semibold">
            Increase engagement with original content
          </h2>
          <p className="text-sm text-zinc-500">
            Choose from a library of resources, from lesson plans to reports and
            posters. Spark engagement with gifs, videos, animations and music.
          </p>
        </div>

        <div className="text-center flex flex-col items-center gap-5 w-1/4">
          <img src={Two} alt="One Image" className="w-2/5" />
          <h2 className="text-2xl font-semibold">
            Deliver impactful feedback in one place
          </h2>
          <p className="text-sm text-zinc-500">
            Reach and motivate students wherever they are with real-time
            feedback. Share work as assignments directly through Canva or via
            your LMS.
          </p>
        </div>

        <div className="text-center flex flex-col items-center gap-5 w-1/4">
          <img src={Three} alt="One Image" className="w-2/5" />
          <h2 className="text-2xl font-semibold">
            Help students build critical skills
          </h2>
          <p className="text-sm text-zinc-500">
            Students can use Canva to demonstrate learning through different
            formats — group projects, videos, posters and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlansCard;
