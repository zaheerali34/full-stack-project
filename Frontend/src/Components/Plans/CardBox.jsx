import React from 'react'
import OneImg from '/Plans/One.webp';
import TwoImg from '/Plans/Two.webp';
import ImageDB from '../../utils/ImageDB';

function CardBox() {
  return (
   <>
     <div className='w-full h-full px-20 py-5 mt-10 flex items-center gap-5'>
        <div className='w-[65%] h-[25rem] bg-[#F3E8FE] rounded-2xl p-10 relative'>
            <img src={OneImg} alt="Image" className='w-2/5 absolute -top-[6rem]' />
            <h2 className='text-2xl font-semibold mt-[7rem]'>Resources for teachers</h2>
            <p className='text-zinc-500 py-4'>Watch video tutorials to learn how to create, communicate and engage your students using Canva Education.</p>
            <button className='bg-zinc-100 py-3 px-6 rounded-xl border-1 border-zinc-400 font-semibold hover:bg-purple-100'>Teacher resources</button>
        </div>

        <div className='w-[35%] h-[25rem] bg-[#DEE5FF] rounded-2xl p-10'>
              <img src={TwoImg} alt="Image" className='w-2/4' />
            <h2 className='text-2xl font-semibold'>Ready-to-use templates</h2>
            <p className='text-zinc-500 py-4'>Start inspired - choose from a library of templates for your next lesson, presentation or class assignment.</p>
            <button className='bg-zinc-100 py-3 px-6 rounded-xl border-1 border-zinc-400 font-semibold hover:bg-purple-100'>View templates</button>
        </div>
    </div>
   </>
  )
}

export default CardBox;