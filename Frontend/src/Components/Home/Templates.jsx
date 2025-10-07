import React from "react";
import ImageDB from "../../utils/ImageDB";

function Templates() {
  return (
    <div className="w-full h-full py-12 px-8 grid place-items-center">
      <h1 className="text-[4rem]">Templates for absolutely anything</h1>
      <p className="text-xl py-3 text-zinc-800">
        Customise an office template, or design something more personal, like an
        invitation.
      </p>

      <div className="w-full mt-12 [column-count:6]">
        {ImageDB.ImageTemp.map((item) => (
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
