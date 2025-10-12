import React from 'react';
import { CarIcon } from 'lucide-react';

function DesignHome() {
  return (
    <div className="w-full h-full py-4">
      <div className="w-full py-4 flex items-center justify-center gap-10 bg-[#F2F0FF] flex-wrap">
        <li className="flex items-center gap-3">
          <CarIcon />
          Free delivery on all orders
        </li>
        <li className="flex items-center gap-3">
          <CarIcon />
          Express delivery available
        </li>
        <li className="flex items-center gap-3">
          <CarIcon />
          In-store pickup
        </li>
      </div>

      <nav>
        <ul className="flex items-center gap-1 font-[font2] py-6 px-8 flex-wrap">
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold  transition-all duration-500 text-zinc-800">
            Print
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Marketing
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Cards and invites
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Documents and office
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Gifting
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Stickers and packaging
          </li>
          <li className="cursor-pointer px-2 py-1 hover:bg-zinc-100 rounded-md text-sm font-semibold transition-all duration-500 text-zinc-800">
            Apparel
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DesignHome;
