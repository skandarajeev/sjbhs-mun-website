"use client";
import { motion } from "framer-motion";
import style from "./styles.module.css";
import Head from "next/head";
import logo from "../media/MUN LOGO.png"
import circle from "../media/Ellipse 1.svg?url";
import gavel from "../media/gavel-solid.svg"
import Image from "next/image";
import mark from '../media/questionMark.jpg'
import { Inconsolata } from 'next/font/google'


 
const inconsolata = Inconsolata({ 
  subsets: ['latin'],
  weight : '400',
})


export default function page() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inconsolata.style.fontFamily};
        }
      `}</style>

    <div className="items-center ">
      {/* Section - 1 About SJBHS */}

      <div className=" ">

        {/* leuuyyyuft */}
        <div className="">

        </div>
        {/* rigth */}
        <div className="">
          <div className=" text-white text-[1rem] leading-[2rem] tracking-[1px] mb-[3rem] p-[2rem] items-center text-center">

            <h1 className="text-[1.5rem] font-bold text-center mb-[0.5rem]">About SJBHS</h1>
            <p className="relative h-[100%]  md:text-[1rem] text-center md:p-[5rem]  ml-auto">{`
                SJBHS is not just a school; it's a legacy. For more than a century and a half, we have been nurturing young minds, imparting knowledge, and instilling values that prepare our students for a successful and meaningful life. Our alumni include distinguished individuals who have excelled in various fields, from business and politics to sports and the arts.

                  Educational Excellence

                  At SJBHS, we believe in the transformative power of education. Our dedicated team of educators strives to provide an exceptional learning experience that goes beyond textbooks. We foster critical thinking, creativity, and a sense of responsibility in our students. Our commitment to academic excellence is reflected in our consistently outstanding results.

                  Holistic Development

                  We understand that education is not just about academics. At SJBHS, we emphasize holistic development, nurturing the physical, mental, and emotional well-being of our students. Our wide range of co-curricular activities, sports, and cultural programs ensure that our students grow into well-rounded individuals.

                  Values and Ethics

            At the core of our educational philosophy are the values of integrity, compassion, and service. We aim to instill in our students a strong sense of ethics, social responsibility, and empathy towards others. These values guide them in making ethical decisions and contributing positively to society.                
            `}</p> </div>


        </div>

      </div>


          {/* SECTION: 2 - About SjbhsMun */}

          <div className= {` ${style.background}  md:grid md:grid-cols-2 background m-[0.5rem] mb-11 sm:mx-[1rem] md:mx-[2rem] lg:mx-[10rem] rounded-[1rem] h-[100%] p-[1rem]`}>
            <div className="relative  mb-8 flex items-center justify-center">
                <p className="text-white text-center font-poppins text-[8vw] md:text-[4vw] ">About SJBHSMUN</p>
            </div>
            <div className={`${style.backie} relative  p-[1rem] m-[0.5rem] md:p-[2rem] text-left  md:text-left rounded-lg `}>
                <p className=" text-white  tracking-[1.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[2rem] text-[1rem]">{`SJBHSMUN, short for St. Joseph's Boys' High School Model United Nations, is a dynamic and prestigious platform that empowers young minds to engage with global issues, hone their diplomacy and public speaking skills, and develop a deeper understanding of international relations. At SJBHSMUN, we believe in the power of experiential learning. Our conferences are designed to foster critical thinking, research skills, and public speaking abilities. Delegates not only gain a comprehensive understanding of international issues but also develop valuable life skills that will serve them well in their future endeavors. We are committed to creating an inclusive and diverse environment where students from different backgrounds, cultures, and perspectives come together to discuss and address global issues. SJBHSMUN encourages open dialogue and promotes an atmosphere of respect for all viewpoints. While SJBHSMUN focuses on global issues, we also emphasize the importance of local action. Our conferences often inspire delegates to take what they've learned and apply it to their own communities, making a positive impact at both the local and international levels.`}</p>
            </div>

      </div>

        
      <div className= {` ${style.background}  md:grid md:grid-cols-2 background m-[0.5rem] mb-11 sm:mx-[1rem] md:mx-[2rem] lg:mx-[10rem] rounded-[1rem] h-[100%] p-[1rem]`}>
            <div className="relative  mb-8 flex items-center justify-center">
                <p className="text-white text-center font-poppins text-[8vw] md:text-[4vw] ">Why SJBHSMUN?</p>
            </div>
            <div className={`${style.backie} relative  p-[1rem] m-[0.5rem] md:p-[2rem] text-left  md:text-left rounded-lg `}>
                <p className=" text-white  tracking-[1.5px] md:tracking-[1px] leading-[1.5rem] md:leading-[2rem] text-[1rem]">{`SJBHSMUN, short for St. Joseph's Boys' High School Model United Nations, is a dynamic and prestigious platform that empowers young minds to engage with global issues, hone their diplomacy and public speaking skills, and develop a deeper understanding of international relations. At SJBHSMUN, we believe in the power of experiential learning. Our conferences are designed to foster critical thinking, research skills, and public speaking abilities. Delegates not only gain a comprehensive understanding of international issues but also develop valuable life skills that will serve them well in their future endeavors. We are committed to creating an inclusive and diverse environment where students from different backgrounds, cultures, and perspectives come together to discuss and address global issues. SJBHSMUN encourages open dialogue and promotes an atmosphere of respect for all viewpoints. While SJBHSMUN focuses on global issues, we also emphasize the importance of local action. Our conferences often inspire delegates to take what they've learned and apply it to their own communities, making a positive impact at both the local and international levels.`}</p>
            </div>

      </div>
     
       


      {/* - -END OF MAIN DIV - - */}
    </div>
    </>
    
  );
}