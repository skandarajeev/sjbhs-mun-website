"use client";
import Image from "next/image";
import style from "./styles.css";
import logo from "./media/MUN LOGO.svg";
import circle from "./media/Ellipse 1.svg";
import bgGradient from "./media/backgroundGradient.png";
import MyComponent from "./about/page";

import { motion } from "framer-motion";

const Event = (details) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true }}
      variants={{
        initial: { opacity: 0, y: 100 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <div className="outerBox mx-2 my-5  w-[69vw] md:w-[30vw] h-[30vh] m-auto ">

        <div className="flex justify-center flex-col  rounded-md  w-[100%] h-[100%] p-6">
          <p className="text-white font-poppins text-center text-5xl align-middle ">
            {details.name}
          </p>

        </div>
      </div>
    </motion.div >
  );
};

export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      {/* NAVBAR */}

      {/* NAVBBAR END */}

      {/* HERO SECTION! */}

      <div className="flex flex-col items-center justify-center  my-[40%]  md:my-[20%] lg:my-[5%]">
        <div className="">
          <h1 className="text-[8vw] font-proconia  m-auto font-poppins from-yellow-500 to-white bg-clip-text mun-gradient ">
            SJBHSMUN 2023
          </h1>
        </div>
        <motion.div
          animate={{ y: [0, 20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <Image
            priority={true}
            placeholder="empty"
            className=" w-81  h-auto   "
            src={logo}
            alt=""
          />
        </motion.div>

        <motion.div
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <Image
            className=" w-80 md:w-6/12 h-auto md:h-200   "
            src={circle}
            alt=""
          />
        </motion.div>

        <div className="text-center my-5">
          <p className="text-[#646464] font-poppins text-xl ">Welcome to our</p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 3 }}
            className="text-white font-poppins text-4xl tracking-[11px]"
          >
            11TH EDITION
          </motion.p>
        </div>
      </div>
      {/* HERO SECTION END! */}

      {/* DATE REVEAL SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="background-gradient  justify-between text-center flex flex-col  w-[90%] md:w-[80%]   m-auto p-[30px] rounded-[1rem] my-10 "
      >
        <p className="font-poppins text-white mb-2 ">JOIN US ON</p>
        <p className="font-poppins mun-gradient text-5xl font-semibold mb-2">
          OCTOBER
        </p>

        <div className="flex m-auto gap-[3rem] mb-2">
          <p className="font-poppins text-white ">23rd</p>
          <p className="font-poppins text-white">24th</p>
          <p className="font-poppins text-white">25th</p>
        </div>

        <div className="flex gap-[3rem] m-auto mb-2">
          <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold">
            30
          </p>
          <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold">
            12
          </p>
          <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold">
            60
          </p>

        </div>

        <div className="flex gap-[3rem] m-auto mb-2">
          <p className="font-poppins text-white">Days</p>
          <p className="font-poppins text-white">Hours</p>
          <p className="font-poppins text-white">Minutes</p>

        </div>
      </motion.div>

      {/* DATE REVEAL END */}

      {/* Committees Reveal section */}
      <section className="my-[20%] mt-24">

        <div className=" flex flex-col gap-3 headingText  mx-2 ">
          <h1 className="font-poppins text-5xl text-center text-white ">
            SIX EXCITING
          </h1>
          <h1 className="font-poppins text-5xl text-center text-white tracking-[5px] ">
            COMMITTEES
          </h1>
        </div>
        <div className=" flex-col justify-content">

          <div className="flex flex-wrap mx-5 mt-20 justify-around">

            <Event name="JCC" details="" />
            <Event name="AIPPM" details="" />
            <Event name="CCC" details="" />
            <Event name="HSC" details="" />
            <Event name="HRC" details="" />
            <Event name="OPEC" details="" />
          </div>
        </div>
      </section>
    </>
  );
}
