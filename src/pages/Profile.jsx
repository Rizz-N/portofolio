import React from "react";
import { motion } from "motion/react";
const Profile = () => {
  const container = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -20,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const secondItem = {
    hidden: {
      opacity: 0,
      x: 20,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  const thirdItem = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="bg-linear-to-r from-black to-primary-300 md:h-screen px-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-white flex flex-col gap-10 md:flex-row justify-between pt-30"
        >
          <motion.div className="text-3xl md:text-6xl flex-1">
            <motion.p variants={item}>Hello I'm</motion.p>
            <motion.p variants={item}>muhammad Alfarizi Ishaq</motion.p>
            <motion.p variants={item} className="text-2xl mt-10">
              i'm programmer, &plusmn; 1 Year of experience in Fullstack web
              development, have good comunication, Positive attitude and quick
              adapt to the environment, i'm currently living in Indonesia and
              pursuing Informatic engineering
            </motion.p>
          </motion.div>
          <motion.div
            variants={secondItem}
            className="flex-2 relative overflow-hidden w-full max-w-150 h-100 md:h-150  bg-white/20 backdrop-blur-lg shadow-2xs rounded-2xl"
          >
            <div className="absolute w-full  bottom-0 bg-black flex flex-col gap-2 items-center py-4">
              <motion.p className="text-2xl font-bold">Contact</motion.p>
              <motion.p>Arzalfarizi12@gmail.com</motion.p>
              <a href="https://www.linkedin.com/in/muhammad-alfarizi-0b5388258/">
                linkedin.com/muhammad-alfarizi
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="flex flex-col gap-10 items-center px-10 py-20"
      >
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          <div className="flex-1 flex flex-col gap-5">
            <motion.p
              variants={thirdItem}
              className="self-start text-5xl font-bold bg-linear-to-r from-black to-primary-300 bg-clip-text text-transparent"
            >
              Education
            </motion.p>
            <motion.div
              variants={thirdItem}
              className="flex gap-8 items-center"
            >
              <motion.p className="font-light">
                2016- <br />
                <span className="text-2xl font-bold">2018</span>
              </motion.p>
              <motion.p className="text-xl md:text-2xl font-bold">
                MTSs Al-ZAytun
              </motion.p>
            </motion.div>
            <motion.div
              variants={thirdItem}
              className="flex gap-8 items-center"
            >
              <motion.p className="font-light">
                2019- <br />
                <span className="text-2xl font-bold">2021</span>
              </motion.p>
              <div className="flex flex-col">
                <motion.p className="text-xl md:text-2xl font-bold">
                  MAs Al-ZAytun
                </motion.p>
                <motion.p>(MIPA) Matematika Ilmu Alam</motion.p>
              </div>
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-5">
            <motion.p
              variants={thirdItem}
              className="self-start text-5xl font-bold bg-linear-to-r from-black to-primary-300 bg-clip-text text-transparent"
            >
              Organization
            </motion.p>

            <motion.div
              variants={thirdItem}
              className="flex gap-8 items-center"
            >
              <motion.p className="font-light">
                2019- <br />
                <span className="text-2xl font-bold">2020</span>
              </motion.p>
              <motion.p className="text-md md:text-2xl font-bold">
                Kementrian Kesehatan dan Perbekalan Umum
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col gap-10 items-center">
          <motion.p
            variants={thirdItem}
            className="text-5xl font-bold bg-linear-to-r from-black to-primary-300 bg-clip-text text-transparent"
          >
            Skills
          </motion.p>
          <motion.div
            variants={thirdItem}
            className="flex gap-10 text-md flex-wrap md:text-2xl font-light"
          >
            <motion.p>HTML</motion.p>
            <motion.p>JavaScript</motion.p>
            <motion.p>React.Js</motion.p>
            <motion.p>Express.JS</motion.p>
            <motion.p>MySQL</motion.p>
            <motion.p>PostgresSQL</motion.p>
            <motion.p>Blender</motion.p>
            <motion.p>PhotoShop</motion.p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="text-white bg-linear-to-r from-black to-primary-300 h-screen px-10 pt-30 pb-20 ">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          viewport={{ amount: 1, once: true }}
          className="text-5xl md:text-8xl"
        >
          Experience
        </motion.p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3, once: true }}
          className="mt-10 flex flex-col gap-10"
        >
          <motion.div variants={thirdItem} className="flex items-center gap-10">
            <motion.p className="text-xl md:text-5xl">2025</motion.p>
            <div className="flex flex-col gap-3">
              <motion.p className="text-2xl md:text-5xl font-medium">
                Fullstack Engineer
              </motion.p>
              <motion.p className="text-xl md:text-2xl font-light">
                SMPN 227 Jakarta
              </motion.p>
              <motion.p className="font-medium text-sm md:text-xl">
                <ul>
                  <li>build attendance system using express.js</li>
                  <li>create database</li>
                  <li>fetching API from backend to frontend</li>
                </ul>
              </motion.p>
            </div>
          </motion.div>
          <motion.div variants={thirdItem} className="flex items-center gap-10">
            <motion.p className="text-xl md:text-5xl">2026</motion.p>
            <div className="flex flex-col gap-3">
              <motion.p className="text-2xl md:text-5xl font-medium">
                Fullstack Engineer
              </motion.p>
              <motion.p className="text-xl md:text-2xl font-light">
                Yayasan Berkembang Mandiri Indonesia
              </motion.p>
              <motion.p className="font-medium text-sm md:text-xl">
                <ul>
                  <li>build busines logic using express.js</li>
                  <li>integrate donation system using Midtrans</li>
                </ul>
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Profile;
