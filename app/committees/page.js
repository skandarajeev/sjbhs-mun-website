"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import styles from "./styles.module.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import GA from "../media/thunder.png"
import Link from "next/link";
import ILO from "../media/FINAL_ILO.svg?url"
import Image from "next/image"
import SOCHUM from "../media/FINAL_SOCHUM.svg?url"
import NATO from "../media/FINAL_JCCA.svg?url"
import TCC from "../media/FINAL_TCC.svg?url"
import BBMP from "../media/FINAL_BBMP.svg?url"
import LS from "../media/FINAL_LS.svg?url"
import JCCS from "../media/FINAL_JCCS.svg?url"
import UNSC from "../media/FINAL_UNSC.svg?url"


const Committees = (details) => {
    return (
        <motion.div initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className={` box text-white General_Assembly flex flex-col gap-6 md:grid grid-cols-6 h-[100%] bg-[#000000] rounded-3xl p-[2.5rem] md:p-[5rem] lg:p-[10rem] mb-[4rem] m-[1rem] md:m-[2rem] lg-[1rem] md:mb-[8rem]`}>
            <div className="col-span-1 flex justify-center md:block">
                <Image src={details.src} height={100} />
            </div>
            <div className="col-span-5">
                <p className="text-[2rem]  font-bold mb-[1.25rem] md:mb-[2.5rem]">{details.name}</p>
                <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.25vw]  tracking-wide leading-[1.75] md:leading-8 ">{details.description}</p>

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

                    <Link href={`${details.more}`}>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center  ">
                            Know more
                        </button>
                    </Link>

                </div>


            </div>


        </motion.div>
    );
}


export default function page() {
    return (
        <div className="p-[1rem] md:p-[6rem] lg:p-[10rem]">
            <Committees name="International Labour Organisation"
                src={ILO} more="/committees/ILO"
                description={(
                    <div>
                        <p>{`Discussing the labour conditions with specific regards to economic imperialism in underdeveloped and developing countries`}</p>
                        
                    </div>
                )} className="" />

            <Committees name="Social Cultural and Humanitarian Committee"
                src={SOCHUM}
                more="/committees/SOCHUM"
                description={(
                    <div>
                        <p>{`Protection of the rights and culture of indigenous people with reference to the impacts of climate change.`}</p>
                        
                    </div>
                )}
            />

            <Committees name="United Nations Security Council"
                src={UNSC}
                more="/committees/UNSC"
                description={(
                    <div>
                        <p>{`Discussing Alternatives to the ISIL & Al-Qaeda Sanction Regime of the UNSC`}</p>
                        
                    </div>
                )}
            />

            <Committees name="Historic Lok Sabha"
                src={LS}
                more="/committees/LS"
                description={(
                    <div>
                        <p>{`Special Session discussing the Naxalbari Crisis`}</p>
                        <br></br>
                        <p>{`Freeze Date: 1967, December 1st`}</p>
                    </div>
                )}
            />

            <Committees name="The Tricontinental Conference"
                src={TCC}
                more="/committees/TCC"
                description={(
                    <div>
                        <p>{`Addressing the rise of Western Imperialism in Africa, Asia, and Latin America`} </p>
                        <br></br>
                        <p>{`Freeze Date: 1966, January 3rd`}</p>
                    </div>
                )}
            />

            <Committees
                name="The Joint Crisis Committee: Sovetskiy"
                src={JCCS}
                more="/committees/JCCS"
                description={(
                    <div>
                        <p>Agenda : OPERATION UNTHINKABLE</p>
                        <br></br>
                         <p>Freeze Date: 1945, May 8th</p>
                    </div>
                )} />

            <Committees
                name="The Joint Crisis Committee: Atlantic "
                src={NATO}
                more="/committees/JCCA"
                description={(
                    <div>
                        <p>Agenda : OPERATION UNTHINKABLE</p>
                        <br></br>
                         <p>Freeze Date: 1945, May 8th</p>
                    </div>
                )}             />
            
            {/* <Committees name="Bruhat Bengaluru Mahanagara Palike: BBMP" src={BBMP}  more = "/committees/BBMP"/>
            
            <Committees name="GRAM PANCHAYAT" src={BBMP}  more = "/committees/BBMP"/> */}
        </div>
    );
}
