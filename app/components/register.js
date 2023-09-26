"use client";

import { Herr_Von_Muellerhoff } from "next/font/google";
import { styles } from "./components.css";
import mun_logo from "../media/MUN LOGO.png";
import { useState } from "react";
export function Indiregister() {
  const [currentStatus, changeStatus] = useState("entering");
  const makePayment = async (info) => {
    changeStatus("loading");

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    console.log("time to fetch");
    // Make API call to the serverless API
    const data = await fetch("http://localhost:4000/indipay", {
      method: "POST",
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: `St Joseph's Boys' Highschool`,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "SJBHS MUN",
      image: { mun_logo },
      handler: async function (response) {
        // Validate payment at server - using webhooks is a better idea.

        info.order_id = response.razorpay_order_id;
        info.payment_id = response.razorpay_payment_id;
        info.razorpay_signature = response.razorpay_signature;

        const JSONdata = JSON.stringify(info);

        // API endpoint where we send htmlForm data.
        const endpoint = "http://localhost:4000/individual ";

        const options = {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };

        // Send the htmlForm data to our htmlForms API on Vercel and get a response.
        const result = await fetch(endpoint, options);
        result.data === "success"
          ? changeStatus("Done")
          : changeStatus("Error");
      },
      prefill: {
        name: "",
        email: "   ",
        contact: " ",
      },
      theme: {
        color: "#000000",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // document.body.appendChild(script);

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (event) => {
    console.log("On it ");

    // Stop the htmlForm from submitting and refreshing the page.
    event.preventDefault();
    const data = {
      name: event.target.first_name.value + " " + event.target.last_name.value,
      institution: event.target.institution.value,
      country: event.target.country.value,
      experience: event.target.number_muns.value,
      placements: event.target.placements.value,
      backupCountry: event.target.backupCountry.value,
      email: event.target.email.value,
      phoneNumber: event.target.phone.value,
      backupComittee: event.target.backupComittee.value,
      comittee: event.target.comittee.value,
    };

    makePayment(data);

    // Get data from the htmlForm.

    // const result = await response.json();
  };

  return (
    <div className="flex flex-col justify-center items-center mt-11">
      <h1 className="text-white font-semibold sm:text-5xl text-4xl  text-center">
        INDIVIDUAL REGISTRATION
      </h1>
      ;{/* register htmlForm */}
      <form onSubmit={handleSubmit} className="mb-20">
        <div className="sm:w-auto w-[70vw] mt-11 mx-14 px-5 shadow-lg my-10">
          <div className="grid md:grid-cols-2 md:gap-6 ">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid  md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="institution"
              id="institution"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name of Institution
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="comittee" className="text-sm text-gray-400 ">
                COMITTEE PREFERENCE
              </label>
              <select
                id="comittee"
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="JCC_1">JCC - Atlantic</option>
                <option value="JCC_2">JCC - Sovetsky</option>
                <option value="GA_1">Historic Lok Sabha</option>
                <option value="GA_2">ILO</option>
                <option value="TCC">TCC</option>
                <option value="UNSC">UNSC</option>
                <option value="UNSC">SOCHUM</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="backupComittee"
                className="text-sm text-gray-400 "
              >
                BACKUP COMITTEE
              </label>
              <select
                id="backupComittee"
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="JCC_1">JCC - Atlantic</option>
                <option value="JCC_2">JCC - Sovetsky</option>
                <option value="GA_1">Historic Lok Sabha</option>
                <option value="GA_2">ILO</option>
                <option value="TCC">TCC</option>
                <option value="UNSC">UNSC</option>
                <option value="UNSC">SOCHUM</option>
              </select>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="country"
                id="country"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="country"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 1
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="backupCountry"
                id="backupCountry"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="backupCountry"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 2
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="number_muns" className="text-sm text-gray-400 ">
              MUN EXPERIENCE
            </label>
            <select
              id="number_muns"
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="First Timer">First Timer</option>
              <option value="11-3 MUNs">1-3 MUNs</option>
              <option value="4-10 MUNs">4-10 MUNs</option>
              <option value="10+ MUNs">10+ MUNs</option>
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="number_muns" className="text-sm text-gray-400 ">
              FOOD PREFERENCE
            </label>
            <select
              id="number_muns"
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor="placements"
              className="peer peer-focus:font-medium  text-sm text-gray-400 "
            >
              LIST YOUR MUN PLACEMENTS (OPTIONAL)
            </label>
            <textarea
              id="placements"
              type="text"
              className="block py-2.5 my-5 h-44 px-0 w-full text-sm text-white bg-gray-800 rounded border-2  appearance-nonetext-white border-gray-600  focus:outline-none focus:ring-0 0 peer"
              placeholder={
                "  Example:\n  ->Honourable Delegate : 2 \n  ->Specmen: 1"
              }
            />
          </div>

          <button
            type="submit"
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 m-10 rounded-md text-white outline-none  shadow-lg transhtmlForm align-left active:scale-90 transition-transhtmlForm "
          >
            {currentStatus === "entering"
              ? "PAY"
              : currentStatus === "loading"
              ? "Loading"
              : "Successs"}
          </button>
        </div>
      </form>
    </div>
  );
}

export const DelegationRegistration = () => {
  const Template = (props) => {
    return (
      <div className="flex flex-col justify-center items-center mt-11 mx-14 px-5 shadow-lg my-10">
        <h1 className="text-white text-5xl text-center">{props.name}</h1>;
        {/* register htmlForm */}
        <div className="my-10">
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.comittee}_first_name`}
                id={`${props.comittee}_first_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.comittee}_first_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.comittee}_last_name`}
                id={`${props.comittee}_last_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.comittee}_last_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name={`${props.comittee}_email`}
              id={`${props.comittee}_email`}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.comittee}_email`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid  md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name={`${props.comittee}_phone`}
                id={`${props.comittee}_phone`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.comittee}_phone`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="comittee" className="text-sm text-gray-400 ">
              COMITTEE PREFERENCE
            </label>
            <select
              id="comittee"
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="Lok_Sabha">Lok Sabha</option>
              <option value="JCC_1">JCC</option>
              <option value="JCC_2">JCC 2</option>
              <option value="GA_1">GA 1</option>
              <option value="GA_2">GA 2</option>
              <option value="TCC">TCC</option>
              <option value="UNSC">UNSC</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.comittee}_country`}
                id={`${props.comittee}_country`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.comittee}_country`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 1
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.comittee}_backupCountry`}
                id={`${props.comittee}_backupCountry`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.comittee}_backupCountry`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 2
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor={`${props.comittee}_number_muns`}
              className="text-sm text-gray-400 "
            >
              MUN EXPERIENCE
            </label>
            <select
              id={`${props.comittee}_number_muns`}
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="First Timer">First Timer</option>
              <option value="11-3 MUNs">1-3 MUNs</option>
              <option value="4-10 MUNs">4-10 MUNs</option>
              <option value="10+ MUNs">10+ MUNs</option>
            </select>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <label
              htmlFor={`${props.comittee}_placements`}
              className="peer peer-focus:font-medium  text-sm text-gray-400 "
            >
              LIST YOUR MUN PLACEMENTS (OPTIONAL)
            </label>
            <textarea
              id={`${props.comittee}_placements`}
              type="text"
              className="block py-2.5 my-5 h-44 px-0 w-full text-sm text-white bg-gray-800 rounded border-2  appearance-nonetext-white border-gray-600  focus:outline-none focus:ring-0 0 peer"
              placeholder={
                "  Example:\n  ->Honourable Delegate : 2 \n  ->Specmen: 1"
              }
            />
          </div>
        </div>
      </div>
    );
  };
  const handleSubmit = async (event) => {
    console.log("On it ");

    // Stop the htmlForm from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the htmlForm.
    const data = {
      Lok_Sabha: {
        name:
          event.target.Lok_Sabha_first_name.value +
          " " +
          event.target.Lok_Sabha_last_name.value,
        institution: event.target.Lok_Sabha_institution.value,
        country: event.target.Lok_Sabha_country.value,
        experience: event.target.Lok_Sabha_number_muns.value,
        placements: event.target.Lok_Sabha_placements.value,
        backupCountry: event.target.Lok_Sabha_backupCountry.value,
        email: event.target.Lok_Sabha_email.value,
        phoneNumber: event.target.Lok_Sabha_phone.value,
        //backupComittee: event.target.Lok_Sabha_backupComittee.value,
        comittee: "Lok_Sabha", // event.target.Lok_Sabha_comittee.value,
      },

      JCC_1: {
        name:
          event.target.JCC_1_first_name.value +
          " " +
          event.target.JCC_1_last_name.value,
        institution: event.target.JCC_1_institution.value,
        country: event.target.JCC_1_country.value,
        experience: event.target.JCC_1_number_muns.value,
        placements: event.target.JCC_1_placements.value,
        backupCountry: event.target.JCC_1_backupCountry.value,
        email: event.target.JCC_1_email.value,
        phoneNumber: event.target.JCC_1_phone.value,
        //backupComittee: event.target.JCC_1_backupComittee.value,
        comittee: "JCC_1", // event.target.JCC_1_comittee.value,
      },
      JCC_2: {
        name:
          event.target.JCC_2_first_name.value +
          " " +
          event.target.JCC_2_last_name.value,
        institution: event.target.JCC_2_institution.value,
        country: event.target.JCC_2_country.value,
        experience: event.target.JCC_2_number_muns.value,
        placements: event.target.JCC_2_placements.value,
        backupCountry: event.target.JCC_2_backupCountry.value,
        email: event.target.JCC_2_email.value,
        phoneNumber: event.target.JCC_2_phone.value,
        //backupComittee: event.target.JCC_2_backupComittee.value,
        comittee: "JCC_2", // event.target.JCC_2_comittee.value,
      },
      GA_1: {
        name:
          event.target.GA_1_first_name.value +
          " " +
          event.target.GA_1_last_name.value,
        institution: event.target.GA_1_institution.value,
        country: event.target.GA_1_country.value,
        experience: event.target.GA_1_number_muns.value,
        placements: event.target.GA_1_placements.value,
        backupCountry: event.target.GA_1_backupCountry.value,
        email: event.target.GA_1_email.value,
        phoneNumber: event.target.GA_1_phone.value,
        //backupComittee: event.target.GA_1_backupComittee.value,
        comittee: "GA_1", // event.target.GA_1_comittee.value,},
      },

      GA_2: {
        name:
          event.target.GA_2_first_name.value +
          " " +
          event.target.GA_2_last_name.value,
        institution: event.target.GA_2_institution.value,
        country: event.target.GA_2_country.value,
        experience: event.target.GA_2_number_muns.value,
        placements: event.target.GA_2_placements.value,
        backupCountry: event.target.GA_2_backupCountry.value,
        email: event.target.GA_2_email.value,
        phoneNumber: event.target.GA_2_phone.value,
        //backupComittee: event.target.GA_2_backupComittee.value,
        comittee: "GA_2", // event.target.GA_2_comittee.value,},
      },
      UNSC: {
        name:
          event.target.UNSC_first_name.value +
          " " +
          event.target.UNSC_last_name.value,
        institution: event.target.UNSC_institution.value,
        country: event.target.UNSC_country.value,
        experience: event.target.UNSC_number_muns.value,
        placements: event.target.UNSC_placements.value,
        backupCountry: event.target.UNSC_backupCountry.value,
        email: event.target.UNSC_email.value,
        phoneNumber: event.target.UNSC_phone.value,
        //backupComittee: event.target.UNSC_backupComittee.value,
        comittee: "UNSC",
      },
    };

    const JSONdata = JSON.stringify(data);

    console.log(JSONdata);

    const endpoint = "http://localhost:4000/delegation ";

    const options = {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // Send the htmlForm data to our htmlForms API on Vercel and get a response.
    const response = await fetch(endpoint, options);
    //const result = await response.json();
    alert(`The Result is a ${response}`);
  };

  return (
    <form
      className="flex flex-col justify-center items-center mt-10 "
      onSubmit={handleSubmit}
    >
      <h1 className="md:text-6xl text-4xl text-white text-center">
        DELEGATION REGISTRATION
      </h1>

      <div className="flex flex-wrap justify-center items-center mt-11">
        <Template comittee="HEAD DELEGATE" name="HEAD DELEGATE" />;
        <Template comittee="MEMBER 1" name="MEMBER 1" />
        <Template comittee="MEMBER 2" name="MEMBER 2" />
        <Template comittee="MEMBER 3" name="MEMBER 3" />
        <Template comittee="MEMBER 4" name="MEMBER 4" />
        <Template comittee="MEMBER 5" name="MEMBER 5" />
        <Template comittee="MEMBER 6" name="MEMBER 6" />
      </div>
      <button
        type="submit"
        className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-80 m-10 rounded-md text-white outline-none  shadow-lg transhtmlForm active:scale-90 transition-transhtmlForm"
      >
        PAY
      </button>
    </form>
  );
};

export const PreDelRegistration = () => {
  const Template = (props) => {
    return (
      <div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_email"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="floating_password"
            id="floating_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div class="relative z-0 w-full mb-6 group">
          <input
            type="password"
            name="repeat_password"
            id="floating_repeat_password"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_repeat_password"
            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_phone"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number (123-456-7890)
            </label>
          </div>
          <div class="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_company"
              id="floating_company"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_company"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Company (Ex. Google)
            </label>
          </div>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    );
  };

  const handleSubmit = async (event) => {
    console.log("On it boi!");
  };

  return (
    <form
      className="flex flex-col justify-center items-center mt-10 "
      onSubmit={DelegationRegistration}
    >
      <Template />
      <p className="white">hello </p>
    </form>
  );
};
