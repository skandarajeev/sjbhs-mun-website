import React from "react";
import styles from "./styles.module.css";
import img from "../../media/TCC.png";
import Image from "next/image";
import questiomark from "../../media/questionMark.jpg"
import Link from "next/link";

export default function GA() {
  return (
    <div className="main-div">
      <div className={`  grid grid-rows-1 md:grid-cols-2 p-[1rem]`}>
        {/* LEFT */}
        <div>
          <div className="  mt-[5rem] text-[10vw] md:text-[8vw] place-items-center w-[100%]">
            <p className={`${styles.mungradient} text-white font-poppins font-bold  text-center md:text-left text-[5vw]`}>
              TRICONTINENTAL
            </p>
            <p className={`${styles.mungradient} text-white font-poppins font-bold  text-center md:text-left text-[5vw] mt-[1rem] mb-[2rem]`}>
              CONFERENCE
            </p>
          </div>
          <div className="agenda text-white gap-5 flex flex-col mun-gradient font-semibold text-[1.2rem]">
          <p>
          Addressing the rise of Western Imperialism in Africa, Asia, and Latin America

            </p>
            <p>
            {`Freeze Date: 1966, January 3rd`}
            </p>
          </div>
          <div className="">
            <p
              className={` text-white text-center md:text-left text-[1rem] leading-[2rem] tracking-[1.8px] mb-[3rem] p-[0.6rem] `}
            >
              As the 1960s was approaching an end, the hierarchy of injustice was beginning to quiver. The blow that had caused this found its sources lying in the sinisterness of greed. Greed penetrates addiction, in this instance the addiction was of dominance, the fanatic need and want to dominate and have control over anything and everything disempowered.
              The place that breeds exploitation of power, also breeds deep instilled hatred and the desperate need to dethrone the long ruling monarch of malice.
              The ones that had been confined had discovered courage and had realised that the present times called for a change: a revolution. A revolution where the disempowered rise to power.

            </p>
          </div>
          <div>

          </div>
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


            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">?</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>

          </div>
        </div>
        {/* /1 */}

        {/* 2 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">


            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">?</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>

          </div>
        </div>
        {/* /2 */}

        {/* 3 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">


            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">?</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>

          </div>
        </div>
        {/* /3 */}

        {/* 4 */}
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-[#1E1D1D] dark:border-gray-700">
          <div class="flex justify-end px-4 pt-4">


            <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
              <ul class="py-2" aria-labelledby="dropdownButton">
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="flex flex-col items-center pb-10">
            <Image src={questiomark} height={100}></Image>
            <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">?</h5>
            <span class="text-sm text-gray-500 dark:text-gray-400">?</span>

          </div>
        </div>
        {/* /4 */}

      </div>
    </div>






  );
}
