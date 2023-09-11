import React from "react";
import styles from "./styles.module.css";
import "flowbite";
import img from "../../media/alden.jpg";
import Image from "next/image";

export default function GA() {
  return (
    <div className={`  grid grid-rows-2 md:grid-cols-2 p-[1rem]`}>
      {/* LEFT */}
      <div>
        <div className="mb-[5rem] mt-[5rem]">
          <p className="text-white font-poppins font-bold text-[5rem] md:text-[3rem]">
            GENERAL
          </p>
          <p className="text-white font-poppins font-bold text-[5rem] md:text-[3rem]">
            ASSEMBLY.
          </p>
        </div>
        <div>
          <p
            className={` text-white text-[1rem] leading-[2rem] tracking-[1.8px] mb-[3rem] p-[1rem]`}
          >
            The General Assembly Plenary is one of the most crucial bodies
            within a Model United Nations conference, reflecting the global
            nature of the United Nations itself. Delegates in this committee
            represent member states from around the world and engage in
            comprehensive discussions on a wide range of global challenges,
            international conflicts, and sustainable development goals. As the
            primary deliberative, policy-making, and representative organ of the
            MUN simulation, the General Assembly Plenary aims to foster
            cooperation, dialogue, and consensus-building among its diverse
            participants.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-3 hidden md:block ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 88 88"
              fill="none"
            >
              <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 88 88"
              fill="none"
            >
              <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 88 88"
              fill="none"
            >
              <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 88 88"
              fill="none"
            >
              <circle cx="44.1565" cy="43.971" r="43.2991" fill="#242323" />
            </svg>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="grid grid-cols-1 gap-3  ">
        <div
          className={`${styles.big} h-[50vh] w-[100vw] md:w-[50vw] rounded-xl`}
        >
          <p>NERD OUT BOIS</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-black h-[50vh] w-[100%] rounded-xl">
            <div
              id="default-carousel"
              class="relative w-full"
              data-carousel="slide"
            >
              <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={img}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={img}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={img}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={img}
                    class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>

                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                  <Image
                    src={img}
                    class="absolute block w-full -translate-x-1/2 -tran--slate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>

              <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  class="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span class="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    class="w-4 h-4 text-white dark:text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

          {/* ----- */}
          <div className="bg-black h-[50vh] w-[100%] rounded-xl p-[1rem] flex justify-around flex-col">
            <button
              type="button"
              className={`${styles.button} w-[100%] text-[100vw] `}
            >
              Background Guide
            </button>
            <button
              type="button"
              className={`${styles.button} w-[100%] text-[100vw] `}
            >
              Country Matrix
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
