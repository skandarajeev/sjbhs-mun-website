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
import NATO from "../media/FINAL_NATO.svg?url"
import TCC from "../media/FINAL_TCC.svg?url"
import BBMP from "../media/FINAL_BBMP.svg?url"



const Committees = (details) => {
    return(
        <motion.div initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className= {` box text-white General_Assembly flex flex-col gap-6 md:grid grid-cols-6 h-[100%] bg-[#000000] rounded-3xl p-[2.5rem] md:p-[5rem] lg:p-[10rem] mb-[4rem] m-[1rem] md:m-[2rem] lg-[1rem] md:mb-[8rem]`}>
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


export default function page (){
    return (
        <div className="p-[1rem] md:p-[6rem] lg:p-[10rem]">
            <Committees name="International Labour Organisation" 
            src={ILO} more = "/committees/ILO" 
            description="In the tapestry of our society, where the threads of labour rights lie in the control of hands that know no bounds and constantly subjects the workforce to mistreatment, disfigured wages and unfit working conditions, the necessity for the presence of a just organisation is imperative.
                Speaking up in a world where there penetrates a constant fear of uncertainty, ILO gives voice to their concerns and upholds their rights, which would otherwise find themselves in the shambles. 
                The books of history are etched with the agony and dilemma that the labour force has always been put through, however, there is a sense of beaming hope that can terminate this prolonged struggle, the opportunity to rewrite history, the chance to equip the deprived. A hope that has manifested as the ILO." className="" />

            <Committees name="Social ,Cultural, and Humanitarian Committee" 
            src={SOCHUM}  
            more = "/committees/SOCHUM" 
            description="In the current global landscape, constitutes a wrenching scenario where the very aspect of human, social and cultural rights of many are relinquished and a major chunk of the world is racking in the pain of pressing and concerning situations. 
            Persevering for preserving the integrity of these rights that encompass the overall well-being of the people is of utmost necessity. There is a need for a global advocate that works against any form of disregard shown towards these rights of any individuals.
            This need is fulfilled by a crucible of global compassion, where the world’s conscience is forged in the fires of responsibilities. SOCHUM, a symphony of diverse voices, weaving threads of understanding into a tapestry of hope for a better and more equitable world. "            
            />

            <Committees name="United Nations Security Council" 
             more = "/committees/UNSC"
             description = {`"In any given scenario, the driving force behind any government should be the betterment of people. Every human being irrespective of what marks their actions cast on the society must be treated with dignity. 
             Things are not always how we perceive them to be, most often the facts of a scenario remain blurred by the illusions of delusion portrayed to the society. 
             Fear has creeped its way into our daily life and has strongly established its perpetual state. As a result, it has become a matter of commonality, but what we as a society should not have to adapt to is the terror casted by the darkest shadow that threatens peace, security and the very sense of humanity. "`}
            />
            
            <Committees name="Historic Lok Sabha"  
            more = "/committees/LS"
            description ="The Lok Sabha, India's vibrant parliament, stands out as a beacon amidst the turbulent winds of democracy, like a lighthouse guiding ships through stormy seas. Each elected member, a vivid brushstroke on the canvas of history, shaping the destiny of a nation like the conductor of a grand symphony, orchestrating harmony amidst diverse melodies.

            With the echoes of struggle and freedom as its foundation, the Lok Sabha stands tall, a colossal phoenix rising from the ashes of colonial oppression, igniting the flame of sovereignty that continues to illuminate the dreams and aspirations of more than a billion minds.
            
            The Lok Sabha has witnessed the nation grappling with ominous shadows of unrest. The growing tension, stemmed from the relentless Naxal movement that had seeped into the country. A threat loomed, one of potential aggravation from the Union of India, threatening the very fabric of unity. The hallowed halls of the Lok Sabha reverberated with impassioned debates as leaders sought hope. It was an era when the destiny of the nation seemed uncertain and the echoes of those tumultuous times continue to resonate through the corridors of history."
            />
            
            <Committees name="The Tricontinental Conference"
             src={TCC} 
             more = "/committees/TCC"
                description = {`"As the 1960s was approaching an end, the hierarchy of injustice was beginning to quiver. The blow that had caused this found its sources lying in the sinisterness of greed. Greed penetrates addiction, in this instance the addiction was of dominance, the fanatic need and want to dominate and control over anything and everything disempowered.  
                The place that breeds exploitation of power, also breeds deep instilled hatred and the desperate need to dethrone the long ruling monarch of malice. 
                The ones that had been confined had discovered courage and had realised that the present times called for a change: a revolution. A revolution where the disempowered rise to power.
                "`}
             />
            
            <Committees 
            name="The Joint Crisis Committee: Sovetsky"  
            more = "/committees/JCCS"
            description = {`"The Soviets were like a formidable shield, a steel phalanx bound by the oath of Marxist-Leninist ideology. They stood as a majestic mountain range, impervious to the tempestuous winds of uncertainty, a beacon of solidarity in a turbulent sea of global geopolitics, guarding the shores of democracy. Their aspirations of preaching their ideas harvested by the blooded sickle and forged by the mighty hammer. But on the pathway of this vision coming to life stood the greatest roadblock, The entire Western Hemisphere stood against them. Will they be able to rise from the ashes of adversity?"`}/>
            
            <Committees 
            name="The Joint Crisis Committee: Atlantic "  
            src={NATO} 
            more = "/committees/JCCA"
            description ="The Atlantic countries were like celestial constellations in the tumultuous night sky of the Cold War, each star a nation bound to the liberal banner of capitalism. United by ideology, they formed a cosmic alliance, casting shadows of intrigue and power across the geopolitical landscape, while navigating the perilous cosmic void of international politics.  Together, they visioned to paint a canvas of global confrontation, a dramatic theatre of superpower rivalry, where they emerged superior. However, will they succeed in defying the storm’s fury to conquer the relentless tides of adversity.  "
            />
            
            <Committees name="Bruhat Bengaluru Mahanagara Palike: BBMP" src={BBMP}  more = "/committees/BBMP"/>
            
            <Committees name="GRAM PANCHAYAT" src={BBMP}  more = "/committees/BBMP"/>
        </div>
    );
}
