import React from 'react';
import { Folder, Home, Layers, MoreVertical, Plus, Brain } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-24 bg-white border-r border-gray-200 flex flex-col items-center space-y-6">
      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer">
        <button className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 w-12 h-12 shadow-2xl cursor-pointer">
          <Plus size={24} />
        </button>
        <span className="text-sm text-purple-500 font-semibold">Create</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Home size={24} />
        </button>
        <span className="text-sm text-gray-600">Home</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Folder size={24} />
        </button>
        <span className="text-sm text-gray-600">Project</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Layers size={24} />
        </button>
        <span className="text-sm text-gray-600">Template</span>
      </div>

      <div className="flex items-center justify-center flex-col gap-1 cursor-pointer">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <Brain size={24} />
        </button>
        <span className="text-sm text-gray-600">Canvas AI</span>
      </div>

      <div className="mt-auto space-y-6">
        <button className="p-3 text-gray-600 hover:text-purple-500 hover:bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center group/item relative cursor-pointer">
          <MoreVertical size={24} />
          <span className="hidden group-hover:inline absolute left-full ml-4 bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap">
            More
          </span>
        </button>
        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full cursor-pointer hover:shadow-lg transition"></div>
      </div>
    </div>
  );
}

export default Sidebar;
