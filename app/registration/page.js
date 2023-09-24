"use client";
import { motion } from "framer-motion";
import Head from "next/head";
import { Indiregister, DelegationRegistration } from "../components/register";
export default function page() {
  return (
    <div className="mb-32">
      <section class="">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              REGISTRATION
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              {`Have questions or need assistance? Contact our team at mun@sjbhs.edu.in or send a message to 9880330623. We're here to help!`}
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 relative">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border shadow-violet-800 shadow-lg dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white relative">
              <h3 class="mb-4 text-2xl font-semibold">
                INDIVIDUAL REGISTRATION
              </h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400"></p>
              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹1299</span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <span>Not Eligible for Best Delegation Price</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span>
                    Security Council is a double delegation committee,
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <span> only one of the delegate should register</span>
                </li>
              </ul>
              <div className="bottom-5 self-center mx-auto absolute">
                <a
                  href="/registration/individual"
                  class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  "
                >
                  REGISTER
                </a>
              </div>
            </div>

            <div class="flex flex-col relative p-6 mx-auto max-w-lg text-center rounded-lg border shadow-orange-500 shadow-lg dark:border-gray-600 xl:p-8 dark:bg-black dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">
                DELEGATION REGISTRATION
              </h3>

              <div class="flex justify-center items-baseline my-8">
                <span class="mr-2 text-5xl font-extrabold">₹1299</span>
                <span class="text-gray-500 dark:text-gray-400">
                  /per-person
                </span>
              </div>

              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <span>Eligible for Best Delegation</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span>Minimum 8 Members</span>
                </li>
                <li class="flex items-center space-x-3">
                  <span>Maximum 40 Members</span>
                </li>
              </ul>
              <div className="bottom-5 self-center mx-auto absolute">
                <a
                  href="/registration/delegation"
                  class="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900"
                >
                  REGISTER
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
