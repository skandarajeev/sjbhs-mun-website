"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { Indiregister, DelegationRegistration } from "../components/register";
export default function page() {
  return (
    <div>
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">REGISTRATION OPTIONS</h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0">

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow-violet-800 shadow-lg dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">INDIVIDUAL REGISTRATION</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹1300</span>

              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">

                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>No setup, or hidden fees</span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Team size: <span class="font-semibold">1 developer</span></span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Premium support: <span class="font-semibold">6 months</span></span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Free updates: <span class="font-semibold">6 months</span></span>
                </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>

            <div class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow-violet-800 shadow-lg dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">DELEGATION REGISTRATION</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">Relevant for multiple users, extended & premium support.</p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹1299</span>
                <span class="text-gray-500 dark:text-gray-400" >/per-person</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">



                  <span>Individual configuration</span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Eligible for Best Delegation</span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Team size: <span class="font-semibold">10 developers</span></span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Premium support: <span class="font-semibold">24 months</span></span>
                </li>
                <li class="flex items-center space-x-3">

                  <span>Free updates: <span class="font-semibold">24 months</span></span>
                </li>
              </ul>
              <a href="#" class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
            </div>


          </div>
        </div>
      </section>
      <Indiregister />
      <DelegationRegistration />
    </div>
  );
}
