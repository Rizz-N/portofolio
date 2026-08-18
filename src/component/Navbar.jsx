import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, width: 0, scale: 0.8 }}
        animate={{ opacity: 1, width: "auto", scale: 1 }}
        transition={{
          opacity: { duration: 0.5 },
          width: { type: "spring", stiffness: 180, damping: 18, mass: 0.8 },
          scale: { type: "spring", stiffness: 250, damping: 15, mass: 0.6 },
        }}
        className=" fixed top-4 left-1/2 -translate-x-1/2 flex items-center gap-30 rounded-full bg-black/30 backdrop-blur-xl border border-white/20 shadow-2xl px-8 py-3 text-xl font-bold text-white overflow-hidden whitespace-nowrap z-100 "
      >
        <NavLink to={"/"}>Portofolio</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </motion.div>
    </>
  );
};

export default Navbar;
