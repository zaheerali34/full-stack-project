import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Image from "/google.png";
import { LogOut } from 'lucide-react';

function Setting() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('https://full-stack-project-3-gyov.onrender.com/logout', { withCredentials: true });
      navigate('/');
    } catch (error) {
      console.error('Logout failed:', error); 
    }
  };

  return (
    <div className="w-80 h-[20vh] bg-white shadow-2xl fixed bottom-8 left-24 rounded-2xl py-4 px-5 flex flex-col items-start">
      <h2 className="text-sm font-semibold mb-4 text-zinc-700">Accounts</h2>
      <div className='w-full flex items-center justify-start'>
        <img src={Image} alt="Google" className="w-12 h-12" />

        <div className="ml-4 flex flex-col">
          <h2 className="font-semibold">Khan Ali</h2>
          <span className=''>khan.ali@example.com</span>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="text-zinc-800 py-2 rounded-lg transition-colors duration-200 cursor-pointer mt-2 flex items-center gap-2"
      >
        <LogOut size={20} className='text' />
        Log Out
      </button>
    </div>
  );
}

export default Setting;
