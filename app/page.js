"use client";
import Image from "next/image";
import style from "./styles.css";
import logo from "./media/MUN LOGO.png";
import alden from "../app/media/alden.jpg";
import circle from "./media/Ellipse 1.svg?url";
import Eventlogo from "./media/event-logo.svg?url";
import Link from "next/link";
import Tab from "./components/alden/tabs.js";
import ILO from "./media/FINAL_ILO.svg?url";
import SOCHUM from "./media/FINAL_SOCHUM.svg?url";
import TCC from "./media/FINAL_TCC.svg?url";
import LS from "./media/FINAL_LS.svg?url";
import JCCS from "./media/FINAL_JCCS.svg?url";
import JCCA from "./media/FINAL_JCCA.svg?url";
import UNSC from "./media/FINAL_UNSC.svg?url";

import { motion } from "framer-motion";

const Event = (details) => {
  return (
    <Link href={details.link}>
      <motion.div
        whileInView="visible"
        initial="hidden"
        transition={{ duration: 0.8, type: "spring", bounce: "0.2" }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 100, scale: 0.8 },
          visible: { opacity: 1, y: 50, scale: 1 },
        }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring" }}
          className="outerBox mx-2 my-5 md:my-10  w-[40vw] md:w-[28vw] lg:w-[26vw] m-auto shadow-yellow-700 shadow-inner "
        >
          <div className="flex justify-center flex-col items-center  rounded-md  w-[100%] h-[100%] p-6">
            <Image
              className={`w-auto  md:mb-8  mb-5 h-24 sm:h-32 lg:h-44 `}
              src={details.src}
            />

            <p className="text-white font-poppins text-center lg:mt-5 md:text-[3vw] text-[4vw] align-middle ">
              {details.name}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default function Home() {
  var deadline = new Date("October 25, 2023 09:00:00").getTime();
  let now = new Date().getTime();
  let t = deadline - now;
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((t % (1000 * 60)) / 1000);
  if (t < 0) {
    days = 0;
    hours = 0;
    minutes = 0;
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      {/* HERO SECTION! */}

      <div className="flex flex-col items-center justify-center overflow-x-hidden my-[22%] md:my-[20%] lg:my-[5%]">
        <div className="">
          <h1 className="text-[10vw] lg:text-[4vw] md:text-[7vw] font-proconia  m-auto font-semibold font-poppins from-yellow-500 to-white bg-clip-text mun-gradient ">
            SJBHSMUN 2023
          </h1>
        </div>
        <motion.div
          animate={{ y: [0, 20, 20, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="flex justify-center"
        >
          <Image
            className=" w-80 md:w-[29vw] h-auto md:h-200   "
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
            viewport={{ once: true }}
            className="text-white font-poppins md:text-4xl text-2xl tracking-[11px]"
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
        viewport={{ once: true }}
        className="background-gradient  justify-between text-center flex flex-col  w-[90%] md:w-[60%]   m-auto p-[30px] rounded-[1rem] mt-10 "
      >
        <p className="font-poppins text-white mb-2 ">JOIN US ON</p>
        <p className="font-poppins mun-gradient text-5xl font-semibold mb-2 tracking-[3px]">
          OCTOBER
        </p>

        <div className="flex m-auto gap-[3rem] mb-2">
          <p className="font-poppins text-[1.2rem] text-white ">26th</p>
          <p className="font-poppins text-[1.2rem] text-white">27th</p>
          <p className="font-poppins text-[1.2rem] text-white">28th</p>
        </div>

        <div className="flex gap-[3rem] m-auto mb-2">
          <div>
            <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold mb-[1rem]">
              {days}
            </p>
            <p className="font-poppins text-white ">Days</p>
          </div>

          <div>
            <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold mb-[1rem]">
              {hours}
            </p>
            <p className="font-poppins text-white">Hours</p>
          </div>

          <div>
            <p className="font-poppins mun-gradient text-[10vw] md:text-[5vw] font-semibold mb-[1rem]">
              {minutes}
            </p>
            <p className="font-poppins text-white">Minutes</p>
          </div>
        </div>
      </motion.div>

      {/* DATE REVEAL END */}

      {/* Committees Reveal section */}

      <div className=" flex flex-col gap-3 headingText  mx-2 "></div>
      <div className=" flex-col justify-content lg:p-[8rem] mb-20">
        <div className="flex flex-wrap justify-around">
          <Event
            name="JCC: Sovetskiy"
            link="/committees/JCCS"
            src={JCCS}
            value="70%"
            mvalue="100%"
          />
          <Event
            name="JCC: Atlantic"
            link="/committees/JCCA"
            src={JCCA}
            value="70%"
            mvalue="100%"
          />
          <Event
            name="Lok Sabha"
            link="/committees/LS"
            src={LS}
            value="60vw"
            mvalue="102%"
          />
          <Event
            name="ILO"
            link="/committees/ILO"
            src={ILO}
            value="70%"
            mvalue="95%"
          />
          <Event
            name="UNSC"
            link="/committees/UNSC"
            src={UNSC}
            value="70%"
            mvalue="100%"
          />
          <Event
            name="SOCHUM"
            link="/committees/SOCHUM"
            src={SOCHUM}
            value="70%"
            mvalue="100%"
          />
          <Event
            name="TCC"
            link="/committees/TCC"
            src={TCC}
            value="70%"
            mvalue="100%"
          />
        </div>
      </div>
      <div className="md:mt-0 mt-40">
        <h1 className="w-full text-center  mun-gradient justify-center text-white  text-[5vw] lg:text-[4vw] md:text-[5vw] font-bold">
          LETTER FROM THE SECRETARY GENERAL
        </h1>
        <h2 className="w-full text-center  mun-gradient justify-center text-white  text-[5vw] lg:text-[3vw] md:text-[4vw] font-bold mt-6">
          {`Alden D'Souza`}
        </h2>
        <div className=" grid md:grid-cols-2 p-[2.5rem]">
          <Image
            src={alden}
            className=" flex justify-center w-[100vw] p-[1rem]"
          />
          <Tab className="h-[100%]" />
        </div>
      </div>
    </>
  );
}
