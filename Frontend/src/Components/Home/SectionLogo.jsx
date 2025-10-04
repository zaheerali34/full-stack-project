import React from "react";
import { motion } from "motion/react";
import ImageDB from "../../utils/ImageDB";

function SectionLogo() {
  return (
    <div className="w-full overflow-hidden bg-white py-8">
      <motion.div
        className="flex gap-[7rem]"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: 25,
          repeat: Infinity,
        }}
      >
        {[...ImageDB.LogoSlider, ...ImageDB.LogoSlider].map((items, idx) => (
          <img
            key={idx}
            src={items.img}
            alt={`logo image`}
            className="w-[7rem] h-auto object-contain opacity-90 hover:opacity-100 transition-all"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default SectionLogo;
