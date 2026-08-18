import React from "react";
import { motion } from "motion/react";
import Portofolio from "../component/Portofolio";
const Home = () => {
  const text = "PORTOFOLIO";
  return (
    <>
      <div className="bg-linear-to-r from-black to-primary-300 h-screen ">
        <motion.div className="pt-20 text-white text-5xl md:text-9xl flex justify-center">
          <motion.div className=" overflow-hidden">
            <p className="flex">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, x: 40, rotateX: 90 }}
                  animate={{ opacity: 1, x: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 120,
                    damping: 12,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="px-10 md:grid md:grid-cols-2 mt-20"
        >
          <div className="flex flex-col gap-10">
            <p className=" text-white text-2xl ">
              Hello I'm <br /> Muhammad Alfarizi Ishaq <br />
            </p>
            <p className=" text-white text-2xl text-justify">
              I build clean, modern, Responsive, and user-focused website that
              help brands stand out and connect with the right audience
            </p>
            <p className="text-accent-300 text-md md:text-2xl font-bold">
              Fullstack development / 3D Modeling
            </p>
          </div>
        </motion.div>
      </div>
      <Portofolio />
    </>
  );
};

export default Home;
