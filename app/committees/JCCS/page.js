import React from "react";
import styles from "./styles.module.css";
import img from "../../media/JCCS.png";
import Image from "next/image";
import questiomark from "../../media/questionMark.jpg";
import Link from 'next/link'

export default function GA() {
  return (
    <div className="main-div">
      <div className={`  grid grid-rows-1 md:grid-cols-2 p-[1rem]`}>
        {/* LEFT */}
        <div>
          <div className="  mt-[5rem] text-[10vw] md:text-[7vw] place-items-center w-[100%]">
            <p
              className={`${styles.mungradient} text-white font-poppins font-bold  text-center md:text-left text-[5vw]`}
            >
              JOINT CRISIS COMMITTEE :
            </p>
            <p
              className={`${styles.mungradient} text-white font-poppins font-bold  text-center md:text-left text-[5vw] mt-[1rem] mb-[2rem]`}
            >
              SOVETSKIY
            </p>
         
          </div>
          <div className="agenda text-white gap-5 flex flex-col mun-gradient font-semibold text-[1.2rem]">
          <p>
            OPERATION UNTHINKABLE 
            </p>
            <p>
            Freeze Date: 1945, May 8th
            </p>
          </div>
          <div className="">
            <p
              className={` text-white text-center md:text-left text-[1rem] leading-[2rem] tracking-[1.8px] mb-[2rem] p-[0.6rem] `}
            >
              The Soviets were like a formidable shield, a steel
              phalanx bound by the oath of Marxist-Leninist ideology. They stood
              as a majestic mountain range, impervious to the tempestuous winds
              of uncertainty, a beacon of solidarity in a turbulent sea of
              global geopolitics, guarding the shores of democracy. Their
              aspirations of preaching their ideas harvested by the blooded
              sickle and forged by the mighty hammer. But on the pathway of this
              vision coming to life stood the greatest roadblock, The entire
              Western Hemisphere stood against them. Will they be able to rise
              from the ashes of adversity?
            </p>
            
          </div>
          <div></div>
        </div>

        {/* right */}
        <div className="grid grid-cols-1 gap-3  ">
          <div
            className={` flex  justify-center items-center h-[50vh] w-[100vw] md:w-[50vw] rounded-xl`}
          >
                          <Image src={img} layout="responsiveness"></Image>

          </div>
          <div className="grid grid-cols-1 gap-3">
            {/* ----- */}
            <div className="mt-[5rem] mb-[5rem] w-[100%] rounded-xl p-[1rem] flex flex-col">
              <Link className = "flex justify-center " href = "https://docs.google.com/spreadsheets/d/17QI9NBp9A3DLMZlQCAAJvSKXwrxAtV4egpU1UuD59h8/edit#gid=1847333595" >
                <button
                  type="button"
                  
                  class="mb-[1rem] text-white w-[100%] bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 "
                >
                  Country Matrix
                </button>
              </Link>
              
              <p
                className={`${styles.mungradient} flex justify-center mt-[2rem] mb-[1rem] text-[2rem] font-semibold`}
              >
                COMING SOON!
              </p>
              <Link className = "flex justify-center " href = "" >
                <button
                  type="button"
                  
                  class="mb-[1rem] text-white w-[100%] bg-indigo-500 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 "
                >
                  Background Guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* EB INFO */}
      <p className={`${styles.mungradient} flex justify-center mb-[2rem] text-[2rem] font-semibold`}>EXECUTIVE BOARD</p>

      <div className="grid grid-cols-1 md:grid-cols-4 place-items-center mt-7 gap-5 md:px-4">
        {/* 1 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              ?
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>
          </div>
        </div>
        {/* /1 */}

        {/* 2 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              ?
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>
          </div>
        </div>
        {/* /2 */}

        {/* 3 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              ?
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>
          </div>
        </div>
        {/* /3 */}

        {/* 4 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">
            <div
              id="dropdown"
              class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Export Data
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Delete
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              ?
            </h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>
          </div>
        </div>
        {/* /4 */}
      </div>
    </div>
  );
}
