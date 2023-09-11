"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from "./styles.module.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import GA from "../media/thunder.png"
import Link from "next/link";

const Committees = (details) => {
    return(
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className= {` box text-white General_Assembly flex flex-col gap-6 md:grid grid-cols-6 h-[100%] bg-[#000000] rounded-3xl p-[2.5rem] md:p-[5rem] lg:p-[10rem] mb-[4rem] m-[1rem] md:m-[2rem] lg-[1rem] md:mb-[8rem]`}>
            <div className="col-span-1">
               <p>logo</p>
            </div>
            <div className="col-span-5">
                <p className="text-[2rem]  font-bold mb-[1.25rem] md:mb-[2.5rem]">{details.name}</p>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.25vw]  tracking-wide leading-[1.75] md:leading-8 ">The General Assembly Plenary is one of the most crucial bodies within a Model United Nations conference, reflecting the global nature of the United Nations itself. Delegates in this committee represent member states from around the world and engage in comprehensive discussions on a wide range of global challenges, international conflicts, and sustainable development goals. As the primary deliberative, policy-making, and representative organ of the MUN simulation, the General Assembly Plenary aims to foster cooperation, dialogue, and consensus-building among its diverse participants.</p>

                <div className="grid grid-cols-2 items-center mt-[3rem] justify-center ">
                    {/* <div className="flex flex-col justify-center gap-3 hidden md:block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 88 88" fill="none">
                            <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 88 88" fill="none">
                            <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 88 88" fill="none">
                            <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 88 88" fill="none">
                            <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323"/>
                        </svg>
                    </div> */}
                    
                    <Link href="/committees/GeneralAssembly">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center  ">
                            Know more
                        </button>
                    </Link>
                    
                </div>
                
                
            </div>
           

        </motion.div>
    );
}


export default function page (){
    return (
        <div className="p-[1rem] md:p-[6rem] lg:p-[10rem]">
            <Committees name="General Assembly" className="" />
            <Committees name="General Assembly" />
            <Committees name="General Assembly" />
            <Committees name="General Assembly" />
            <Committees name="General Assembly" />
            <Committees name="General Assembly" />
            <Committees name="General Assembly" />

        </div>
    );
}
