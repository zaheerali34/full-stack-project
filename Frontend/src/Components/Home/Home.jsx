import React from 'react'
import Slider from './Slider'

function Home() {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-5 flex-col overflow-hidden'>
        <div className='w-fit text-center'>
            <h1 className='text-[6rem] leading-14'>What will you</h1>
            <h1 className='text-[6rem]'><span className='bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>design</span> today?</h1>
            <p className='text-[19px] py-1 text-zinc-700'>With Canva you can design, generate, and work on anything.</p>
            <button className='bg-[#9653f5] px-5 py-[13px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer mt-4'>Start Designing</button>
        </div>

        <Slider />
    </div>
  )
}

export default Home