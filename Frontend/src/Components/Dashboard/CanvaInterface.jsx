import React from 'react';
import {
  Search,
  Sliders,
  ChevronRight,
  TableCellsMerge,
  BookText,
  Dice5,
  Presentation,
  Heart,
  Images,
  VideoIcon,
  Table2,
} from 'lucide-react';
import Sidebar from './Sidebar';

export default function CanvaInterface() {
  const designTools = [
    { icon: <TableCellsMerge />, label: 'Sheet', color: 'bg-blue-500' },
    { icon: <BookText />, label: 'Doc', color: 'bg-teal-500' },
    { icon: <Dice5 />, label: 'Whiteboard', color: 'bg-green-500' },
    { icon: <Presentation />, label: 'Presentation', color: 'bg-orange-500' },
    { icon: <Heart />, label: 'Social media', color: 'bg-red-500' },
    { icon: <Images />, label: 'Photo editor', color: 'bg-pink-500' },
    { icon: <VideoIcon />, label: 'Video', color: 'bg-purple-500' },
    { icon: <Table2 />, label: 'Website', color: 'bg-indigo-500' },
  ];

  const recentDesigns = [
    {
      name: 'Georgia Pro',
      date: 'Edited 2 months ago',
      color: 'bg-gradient-to-br from-gray-100 to-gray-200',
    },
    {
      name: 'Morgan Maxwell',
      date: 'Edited 2 months ago',
      color: 'bg-gradient-to-br from-gray-800 to-black',
    },
    {
      name: 'Blue and White Clean Pr...',
      date: 'Edited 3 months ago',
      color: 'bg-gradient-to-br from-blue-100 to-blue-200',
    },
    {
      name: 'PDF_1747363367223[1]...',
      date: 'Edited 3 months ago',
      color: 'bg-gradient-to-br from-amber-50 to-amber-100',
    },
    {
      name: 'Orange Black Modern B...',
      date: 'Edited 5 months ago',
      color: 'bg-gradient-to-br from-orange-400 to-black',
    },
    {
      name: 'Untitled Design',
      date: 'Edited 6 months ago',
      color: 'bg-gradient-to-br from-black to-gray-900',
    },
  ];

  return (
    <div className="w-full flex h-full relative">
      <Sidebar />

      <div
        className="flex-1 overflow-auto bg-gradient-to-t from-zinc-50 via-blue-50 to-purple-100 rounded-2xl mx-4 max-sm:rounded-md"
        style={{ boxShadow: '0 -10px 30px -10px rgba(0,0,0,0.25)' }}
      >
        <div className="p-8 max-sm:p-2">
          <div className="w-full flex items-center justify-center flex-col">
            <h1 className="text-4xl font-medium bg-gradient-to-t from-blue-500 via-purple-500 to-purple-100 text-transparent bg-clip-text mb-8 flex items-center gap-3 text-center max-sm:text-[1.2rem]">
              Step into a world of learning
            </h1>

            <div className="flex gap-6 mb-8 max-sm:gap-2">
              <button className="px-4 py-1 border-1 border-purple-500 rounded-full text-gray-700 hover:bg-purple-300 bg-purple-200 cursor-pointer max-sm:text-[12px]">
                Your designs
              </button>
              <button className="px-4 py-1 bg-white border-1 rounded-full text-gray-700 hover:bg-purple-300 cursor-pointer max-sm:text-[12px]">
                Templates
              </button>
              <button className="px-4 py-1 bg-white border-1 rounded-full text-gray-700 hover:bg-purple-300 cursor-pointer max-sm:text-[12px]">
                Canva AI
              </button>
            </div>

            <div className="w-2/3 mb-8 px-4 py-8 flex items-center justify-center rounded-2xl border-2 border-purple-300 bg-white/80 hover:shadow-2xl shadow-purple-300 max-lg:w-[70%] max-md:w-full">
              <Search className="top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search designs, folders and uploads"
                className="w-full pl-3 border-none outline-none"
              />
            </div>

            <div className="grid grid-cols-8 gap-4 max-lg:grid-cols-4">
              {designTools.map(tool => (
                <button
                  key={tool.label}
                  className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-white/50 transition cursor-pointer"
                >
                  <div
                    className={`w-16 h-16 ${tool.color} rounded-full flex items-center justify-center text-2xl text-white font-semibold `}
                  >
                    {tool.icon}
                  </div>
                  <span className="text-sm text-gray-700 text-center">
                    {tool.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full p-10 max-sm:p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recents</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Owner
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100">
                Designs
              </button>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-6 max-lg:grid-cols-3">
            {recentDesigns.map((design, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div
                  className={`${design.color} aspect-video rounded-lg mb-3 hover:shadow-lg transition`}
                />
                <h3 className="font-semibold text-gray-800 text-sm truncate group-hover:text-purple-600">
                  {design.name}
                </h3>
                <p className="text-xs text-gray-500">{design.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 max-sm:hidden">
        <button className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center hover:bg-purple-600 text-lg font-bold">
          ?
        </button>
      </div>
    </div>
  );
}
