import React from "react";
import { motion, scale } from "motion/react";
import Card from "./Card";
import { project } from "../model/data";
const Portofolio = () => {
  const rows = [];
  for (let i = 0; i < project.length; i += 3) {
    rows.push(project.slice(i, i + 3));
  }
  const rowVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      rotate: 5,
      scale: 0,
    },

    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,

      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1,
      },
    },
  };
  const buttonVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, amount: 0.8 }}
        className="bg-black text-white pt-20"
      >
        <div className="flex justify-center ">
          <p className="text-4xl font-bold ">Project</p>
        </div>
        <div className="flex justify-center text-sm gap-3 md:gap-10 mt-10 overflow-hidden">
          {["All", "Web Design", "Graphic Design", "3D Modeling"].map(
            (button, index) => (
              <motion.button
                key={button}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={buttonVariants}
                className="relative text-sm md:text-xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:border-b-2 after:border-white after:transition-all after:duration-300 after:ease-out hover:after:w-full"
              >
                {button}
              </motion.button>
            ),
          )}
        </div>
      </motion.div>
      <div className="bg-black text-white p-10 ">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3, once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5"
          >
            {row.map((item, index) => (
              <Card
                variant={cardVariants}
                key={index + 1}
                source={item.thumb}
                name={item.name}
                tech={item.tech}
              />
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Portofolio;
