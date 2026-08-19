import React from "react";
import { motion } from "motion/react";

const Card = ({ variant, source, name, tech }) => {
  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{
        amount: 0.5,
        once: true,
      }}
      className="rounded-xl ring-2 ring-white overflow-hidden"
    >
      <div className="overflow-hidden max-w-md w-full h-70 md:h-100">
        <img src={source} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="text-center flex flex-col gap-2 my-2">
        <p>{name}</p>
        <p>{tech}</p>
      </div>
    </motion.div>
  );
};

export default Card;
