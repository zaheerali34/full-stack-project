import React from 'react';
import One from '/Product/02sliderOne.webp';
import Two from '/Product/02sliderTwo.webp';
import Three from '/Product/02sliderThree.webp';

function CardProductTwo() {
  return (
    <div className="w-full h-full py-14 px-10">
      <div className="w-full h-[30rem] max-md:hidden bg-[url(./Product/feature_Dalle_hero.png)] bg-center bg-cover rounded-2xl mt-4 flex items-start justify-center flex-col gap-4 px-8">
        <h4 className="uppercase font-semibold">Apps and Integrations</h4>
        <h1 className="text-3xl max-w-2/4 font-semibold">
          Generate realistic images and art using AI
        </h1>
        <p className="max-w-2/4">Generate realistic images and art using AI</p>
        <button className="border-[1px] py-3 px-4 hover:bg-[#cff4ff] rounded-xl border-zinc-300 font-semibold text-sm">
          Learm More
        </button>
      </div>

      <div className="w-full flex items-center justify-between gap-8 max-md:flex-wrap">
        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={One}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            Apps and Integrations
          </h3>
          <h2 className="font-semibold text-xl">Google Drive</h2>
          <p className="text-sm text-zinc-700">
            Add your Google Drive assets to your designs
          </p>
        </div>

        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={Two}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            Apps and Integrations
          </h3>
          <h2 className="font-semibold text-xl">Enhancer</h2>
          <p className="text-sm text-zinc-700">
            Upscale any image up 1000% with AI
          </p>
        </div>

        <div className="w-full flex items-start gap-1 flex-col py-10">
          <img
            src={Three}
            alt="slider"
            className="w-full h-[18rem] rounded-2xl"
          />
          <h3 className="uppercase font-semibold text-md pt-3 text-zinc-800 text-[12px]">
            Apps and Integrations
          </h3>
          <h2 className="font-semibold text-xl">Slack</h2>
          <p className="text-sm text-zinc-700">
            Get Canva notifications and collaborate on designs in Slack
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardProductTwo;
