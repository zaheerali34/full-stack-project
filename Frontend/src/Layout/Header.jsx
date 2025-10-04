import React from 'react';

function Header() {
  return (
    <div className='w-full flex items-center justify-between px-12 py-6 '>
        <img src="./logo.svg" alt="logo" />

        <nav>
          <ul className='flex items-center gap-1 font-[font2]'>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800'>Design</li>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800'>Product</li>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800'>Plans</li>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800'>Business</li>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800'>Eduction</li>
            <li className='cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800'>Help</li>
          </ul>
        </nav>

        <div className='flex gap-3 items-center'>
          <button className='px-3 py-[4px] border-[1px] rounded-[8px] border-zinc-200 font-semibold text-zinc-700 hover:bg-zinc-100 transition duration-500 cursor-pointer'>Sign up</button>
          <button className='bg-[#9653f5] px-3 py-[5px] rounded-[8px] text-white font-semibold hover:bg-[#7628e5] transition duration-500 cursor-pointer'>Log in</button>
        </div>
    </div>
  )
}

export default Header