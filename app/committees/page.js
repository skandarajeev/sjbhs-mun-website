"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from "./styles.module.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import GA from "../media/gA.svg"

const Committees = (details) => {
    return(
        <div className= {`${styles.backgroundgradient} box General_Assembly flex flex-col gap-6 md:grid grid-cols-6 h-[100%] bg-white rounded-3xl p-[2.5rem] md:p-[5rem] mb-[4rem] m-[1rem] md:m-[2rem] lg-[1rem]`}>
            <div className="col-span-1">
               <p>logo</p>
            </div>
            <div className="col-span-5">
                <p className="text-[2rem]  font-bold mb-[1.25rem] md:mb-[2.5rem]">{details.name}</p>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.25vw]  tracking-wide leading-[1.75] md:leading-8 ">The General Assembly Plenary is one of the most crucial bodies within a Model United Nations conference, reflecting the global nature of the United Nations itself. Delegates in this committee represent member states from around the world and engage in comprehensive discussions on a wide range of global challenges, international conflicts, and sustainable development goals. As the primary deliberative, policy-making, and representative organ of the MUN simulation, the General Assembly Plenary aims to foster cooperation, dialogue, and consensus-building among its diverse participants.</p>

                <div className="flex gap-3 mt-[3rem]">
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
                </div>
                
            </div>
           

        </div>
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
