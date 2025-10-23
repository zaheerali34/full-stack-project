import React from 'react';
import OneImg from '/Plans/One.webp';
import TwoImg from '/Plans/Two.webp';
import ImageDB from '../../utils/ImageDB';

function CardBox() {
  return (
    <>
      <div className="w-full h-full px-20 py-5 mt-10 flex items-center gap-5 max-lg:flex-col max-sm:px-4">
        <div className="w-[65%] h-[25rem] max-lg:h-full bg-[#F3E8FE] rounded-2xl p-10 relative max-lg:w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
          <img
            src={OneImg}
            alt="Image"
            className="w-2/5 absolute -top-[8rem] max-md:-top-1 max-lg:m-auto"
          />
          <h2 className="text-2xl font-semibold mt-[7rem]">
            Resources for teachers
          </h2>
          <p className="text-zinc-500 py-4 max-lg:text-center">
            Watch video tutorials to learn how to create, communicate and engage
            your students using Canva Education.
          </p>
          <button className="bg-zinc-100 py-3 px-6 rounded-xl border-1 border-zinc-400 font-semibold hover:bg-purple-100">
            Teacher resources
          </button>
        </div>

        <div className="w-[35%] h-[25rem] max-lg:h-full bg-[#DEE5FF] rounded-2xl p-10 max-lg:w-full max-lg:flex max-lg:items-center max-lg:justify-center max-lg:flex-col">
          <img src={TwoImg} alt="Image" className="w-2/4" />
          <h2 className="text-2xl font-semibold">Ready-to-use templates</h2>
          <p className="text-zinc-500 py-4 max-lg:text-center">
            Start inspired - choose from a library of templates for your next
            lesson, presentation or class assignment.
          </p>
          <button className="bg-zinc-100 py-3 px-6 rounded-xl border-1 border-zinc-400 font-semibold hover:bg-purple-100">
            View templates
          </button>
        </div>
      </div>

      <div className="w-full h-full px-20 py-5 flex items-center gap-5 max-lg:flex-col max-sm:px-4">
        {ImageDB.PlansPage.map((item, index) => (
          <div
            style={{ backgroundColor: item.bgColor }}
            key={index}
            className="w-[33%] h-[25rem] bg-[#F3E8FE] rounded-2xl p-10 flex flex-col items-center text-center max-lg:w-full max-lg:h-full"
          >
            <img src={item.img} alt="Image" className="w-2/5" />
            <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
            <p className="text-zinc-500 py-4">{item.description}</p>
            <button className="bg-zinc-100 py-3 px-6 rounded-xl border-1 border-zinc-400 font-semibold hover:bg-purple-100">
              View templates
            </button>
          </div>
        ))}
      </div>

      <div className="w-[95%] h-[35rem] bg-[url(/Plans/FullFooterbannergl.avif)] bg-center bg-cover no-repeat mt-20 flex items-start flex-col justify-center px-20 gap-4 pt-20 m-auto rounded-2xl my-20 max-sm:px-8">
        <h1 className="text-[4rem] font-bold leading-5 max-lg:text-[2rem] max-sm:text-[1.5rem]">
          Ready to get started with
        </h1>
        <h1 className="text-[4rem] font-bold max-lg:text-[2rem] max-sm:text-[1.5rem]">
          Canva Education?
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, in.
        </p>
        <button className="mt-6 bg-white text-purple-700 font-semibold py-3 px-6 rounded-xl hover:bg-purple-100">
          Get started - it&apos;s free
        </button>
      </div>
    </>
  );
}

export default CardBox;
