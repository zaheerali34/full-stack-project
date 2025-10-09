import React from 'react';
import ImageDB from '../../utils/ImageDB';

function Templates() {
  return (
    <div className="w-full h-full py-12 px-8 grid place-items-center max-md:text-center">
      <h1 className="text-[4rem] max-md:text-[2rem]">
        Templates for absolutely anything
      </h1>
      <p className="text-xl py-3 text-zinc-800 max-sm:text-sm">
        Customise an office template, or design something more personal, like an
        invitation.
      </p>

      <div className="w-full mt-12 [column-count:6] max-xl:[column-count:4] max-md:[column-count:3] max-sm:[column-count:2]">
        {ImageDB.ImageTemp.map(item => (
          <img
            src={item.img}
            key={item.id}
            alt={`Template Image`}
            className="w-full object-cover rounded-xl mb-4"
          />
        ))}
      </div>
    </div>
  );
}

export default Templates;
