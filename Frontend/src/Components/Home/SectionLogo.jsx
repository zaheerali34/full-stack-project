import React from 'react';
import { motion } from 'motion/react';
import ImageDB from '../../utils/ImageDB';

function SectionLogo() {
  return (
    <section className="w-full overflow-hidden py-8">
      <motion.div
        className="flex items-center gap-[7rem]"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          ease: 'linear',
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...ImageDB.LogoSlider, ...ImageDB.LogoSlider].map((items, idx) => (
          <img
            key={idx}
            src={items.img}
            alt={`logo image`}
            className="w-[7rem] object-cover opacity-80 hover:opacity-100 transition-all"
          />
        ))}
      </motion.div>
    </section>
  );
}

export default SectionLogo;
