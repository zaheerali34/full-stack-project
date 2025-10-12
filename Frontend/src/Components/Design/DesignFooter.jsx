import React from 'react';

function DesignFooter() {
  return (
    <div className="w-[94%] h-[40vh] bg-[url(https://content-management-files.canva.com/550a0bc4-7534-478a-9512-6a597d9e82e0/footer-banner.jpg)] bg-center bg-cover bg-no-repeat mx-10 max-md:mx-4 rounded-2xl my-20 flex flex-col justify-center px-10">
      <h1 className="text-[2rem] text-white font-semibold max-sm:text-[1rem]">
        One Print, One Tree
      </h1>
      <p className="text-white w-2/5 max-md:w-full max-sm:text-sm text-sm py-2">
        Printing you can feel good about. For every print order placed with
        Canva, we plant a tree – it&apos;s a simple idea with a big impact.
      </p>
      <button className="w-fit py-3 px-8 bg-zinc-100 rounded-md text-zinc-800 font-semibold hover:bg-zinc-200 transition duration-500">
        Read more
      </button>
    </div>
  );
}

export default DesignFooter;
