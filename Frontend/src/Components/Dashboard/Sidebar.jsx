import React, { useState } from 'react';
import { Folder, Home, Layers, Plus, Brain } from 'lucide-react';
import Setting from './Setting';

function Sidebar() {
  const [setting, setSetting] = useState(true);

  const headlerSetting = () => {
    setSetting(!setting);
  };

  return (
    <div className="w-24 flex-col flex items-center space-y-6 max-sm:fixed max-sm:bottom-0 max-sm:justify-between max-sm:bg-white max-sm:px-4 max-sm:space-y-0 max-sm:w-full max-sm:flex-row max-sm:py-2">
      <div className="flex items-center justify-center flex-col gap-1  max-sm:gap-0 cursor-pointer">
        <button className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 w-12 h-12 shadow-2xl cursor-pointer">
          <Plus size={24} />
        </button>
        <span className="text-sm text-purple-500 font-semibold">Create</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer max-sm:gap-0 ">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Home size={24} />
        </button>
        <span className="text-sm text-gray-600">Home</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer max-sm:gap-0 ">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Folder size={24} />
        </button>
        <span className="text-sm text-gray-600">Project</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer max-sm:gap-0 ">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Layers size={24} />
        </button>
        <span className="text-sm text-gray-600">Template</span>
      </div>

      <div className=" max-sm:gap-0 flex items-center justify-center flex-col gap-1 cursor-pointer max-sm:hidden">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer ">
          <Brain size={24} />
        </button>
        <span className="text-sm text-gray-600">Canvas AI</span>
      </div>

      <div className="mt-[14rem] space-y-6 max-sm:hidden">
        <button
          onClick={headlerSetting}
          className="w-12 h-12 bg-zinc-400 rounded-full cursor-pointer hover:shadow-lg transition border-2 border-zinc-900 overflow-hidden"
        >
          <img
            src="https://assets3.thrillist.com/v1/image/3126658/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg"
            alt="this image"
            className="w-full h-full object-cover"
          />
        </button>
      </div>

      {!setting && <Setting /> ? <Setting /> : null}
    </div>
  );
}

export default Sidebar;
