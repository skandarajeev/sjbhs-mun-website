"use client";

import { Herr_Von_Muellerhoff } from "next/font/google";
import { styles } from "./components.css";
import mun_logo from "../media/MUN LOGO.png";
import { useState } from "react";
import { json } from "react-router-dom";
export function Indiregister() {
  const [currentStatus, changeStatus] = useState("entering");
  const [members, changeMembers] = useState(1);
  const [ids, putIds] = useState([]);

  const makePayment = async (info) => {
    changeStatus("loading");

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    console.log("time to fetch");

    const data = await fetch("https://mun-backend.vercel.app/indipay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ total: members }),
    }).then((t) => t.json());
    console.log(data);
    var options = {
      key: process.env.RAZORPAY_KEY,
      name: `St Joseph's Boys' Highschool`,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "SJBHS MUN",
      image: { mun_logo },
      handler: async function (response) {
        info.order_id = response.razorpay_order_id;
        info.payment_id = response.razorpay_payment_id;
        info.razorpay_signature = response.razorpay_signature;

        const JSONdata = JSON.stringify(info);

        // API endpoint where we send htmlForm data.
        const endpoint = "https://mun-backend.vercel.app/individual ";

        const options = {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };
        alert("Get ready to fetch");
        // Send the htmlForm data to our htmlForms API on Vercel and get a response.
        const result = await (await fetch(endpoint, options)).json();
        if (result.result === "success") {
          changeStatus("done");
          console.log(ids);
          putIds(result.ids);
        } else {
          changeStatus("error");
        }
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
      backupCommittee: event.target.backupCommittee.value,
      committee: event.target.committee.value,
      food: event.target.food.value,
    };
    if (members === 2) {
      data.person_two_name =
        event.target.person_two_first_name.value +
        "  " +
        event.target.person_two_last_name.value;
      data.person_two_institution = event.target.person_two_institution.value;
      data.person_two_experience = event.target.person_two_experience.value;
      data.person_two_placements = event.target.person_two_placements.value;
      data.person_two_email = event.target.person_two_email.value;
      data.person_two_phone = event.target.person_two_phone.value;
      data.person_two_backupCommittee =
        event.target.person_two_backupCommittee.value;
      data.person_two_food = event.target.person_two_food.value;
    }

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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center mb-20"
      >
        <div className="flex flex-wrap justify-center items-start mt-11">
          <div className="sm:w-auto w-[70vw] mt-11 mx-14 px-5 shadow-lg my-10 ">
            {members === 2 ? (
              <h1 className="text-white text-4xl text-center mb-10">
                DELEGATE 1
              </h1>
            ) : (
              ""
            )}

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
                <label htmlFor="committee" className="text-sm text-gray-400 ">
                  COMMITTEE PREFERENCE
                </label>
                <select
                  id="committee"
                  className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  onChange={(e) =>
                    e.target.value === "UNSC"
                      ? changeMembers(2)
                      : changeMembers(1)
                  }
                >
                  <option value="JCC_Atlantic">JCC - Atlantic</option>
                  <option value="JCC_Sovetsky">JCC - Sovetsky</option>
                  <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                  <option value="ILO">ILO</option>
                  <option value="TCC">TCC</option>
                  <option value="UNSC">UNSC</option>
                  <option value="SOCHUM">SOCHUM</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="backupCommittee"
                  className="text-sm text-gray-400 "
                >
                  BACKUP COMMITTEE
                </label>
                <select
                  id="backupCommittee"
                  className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                >
                  <option value="JCC_Atlantic">JCC - Atlantic</option>
                  <option value="JCC_Sovetsky">JCC - Sovetsky</option>
                  <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                  <option value="ILO">ILO</option>
                  <option value="TCC">TCC</option>
                  <option value="UNSC">UNSC</option>
                  <option value="SOCHUM">SOCHUM</option>
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
              <label htmlFor="food" className="text-sm text-gray-400 ">
                FOOD PREFERENCE
              </label>
              <select
                id="food"
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
          </div>
          {members === 2 ? (
            <div className="sm:w-auto w-[70vw] mt-11 mx-14 px-5 shadow-lg my-10 ">
              {members === 2 ? (
                <h1 className="text-white text-4xl text-center mb-10">
                  DELEGATE 2
                </h1>
              ) : (
                ""
              )}

              <div className="grid md:grid-cols-2 md:gap-6 ">
                <div className="relative z-0 w-full mb-6 group">
                  <input
                    type="text"
                    name="person_two_first_name"
                    id="person_two_first_name"
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
                    id="person_two_last_name"
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
                  id="person_two_email"
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
                    id="person_two_phone"
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
                  id="person_two_institution"
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

              <div className="mb-6">
                <label
                  htmlFor="person_two_backupCommittee"
                  className="text-sm text-gray-400 "
                >
                  BACKUP COMMITTEE
                </label>
                <select
                  id="person_two_backupCommittee"
                  className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                >
                  <option value="JCC_Atlantic">JCC - Atlantic</option>
                  <option value="JCC_Sovetsky">JCC - Sovetsky</option>
                  <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                  <option value="ILO">ILO</option>
                  <option value="TCC">TCC</option>
                  <option value="UNSC">UNSC</option>
                  <option value="SOCHUM">SOCHUM</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="number_muns" className="text-sm text-gray-400 ">
                  MUN EXPERIENCE
                </label>
                <select
                  id="person_two_experience"
                  className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                >
                  <option value="First Timer">First Timer</option>
                  <option value="11-3 MUNs">1-3 MUNs</option>
                  <option value="4-10 MUNs">4-10 MUNs</option>
                  <option value="10+ MUNs">10+ MUNs</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="person_two_food"
                  className="text-sm text-gray-400 "
                >
                  FOOD PREFERENCE
                </label>
                <select
                  id="person_two_food"
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
                  id="person_two_placements"
                  type="text"
                  className="block py-2.5 my-5 h-44 px-0 w-full text-sm text-white bg-gray-800 rounded border-2  appearance-nonetext-white border-gray-600  focus:outline-none focus:ring-0 0 peer"
                  placeholder={
                    "  Example:\n  ->Honourable Delegate : 2 \n  ->Specmen: 1"
                  }
                />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 mt-10 rounded-md text-white outline-none  shadow-lg transhtmlForm align-left active:scale-90 transition-transhtmlForm "
          disabled={currentStatus === "done" ? true : false}
        >
          {currentStatus === "entering"
            ? "PAY"
            : currentStatus === "loading"
            ? "Loading"
            : currentStatus === "done"
            ? "Success"
            : "Error"}
        </button>
      </form>
      {currentStatus === "done" ? (
        <div
          href="#"
          className="flex flex-col justify-center item p-10 h-full rounded-lg shadow-emerald-500 shadow-sm bg-black"
        >
          <p class="mb-3 text-white">
            Congrats you are officially part of SJBHSMUN 2023 🎉
          </p>

          <p class="mb-3 text-white">
            {`Take a screen shot of your UUID so you not don't forget`}
          </p>
          <ul className="list-none mt-14  align-middle">
            {ids.map((person) => (
              <li className="text-white" key={person}>
                {person[0]} : SJBHSMUN{person[1]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export const DelegationRegistration = () => {
  const [members, changeMembers] = useState(0);
  const [ids, putIds] = useState([]);

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
                name={`${props.committee}_first_name`}
                id={`${props.committee}_first_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_first_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_last_name`}
                id={`${props.committee}_last_name`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_last_name`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name={`${props.committee}_email`}
              id={`${props.committee}_email`}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor={`${props.committee}_email`}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          <div className="grid  md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="tel"
                name={`${props.committee}_phone`}
                id={`${props.committee}_phone`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_phone`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Phone number
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div>
              <label htmlFor="committee" className="text-sm text-gray-400 ">
                COMMITTEE PREFERENCE
              </label>
              <select
                id={`${props.committee}_committee`}
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="JCC_Atlantic">JCC - Atlantic</option>
                <option value="JCC_Sovetsky">JCC - Sovetsky</option>
                <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                <option value="ILO">ILO</option>
                <option value="TCC">TCC</option>
                <option value="UNSC">UNSC</option>
                <option value="SOCHUM">SOCHUM</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="person_two_backupCommittee"
                className="text-sm text-gray-400 "
              >
                BACKUP COMMITTEE
              </label>
              <select
                id={`${props.committee}_backupCommittee`}
                className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
              >
                <option value="JCC_Atlantic">JCC - Atlantic</option>
                <option value="JCC_Sovetsky">JCC - Sovetsky</option>
                <option value="Historic_Lok_Sabha">Historic Lok Sabha</option>
                <option value="ILO">ILO</option>
                <option value="TCC">TCC</option>
                <option value="UNSC">UNSC</option>
                <option value="SOCHUM">SOCHUM</option>
              </select>
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="food" className="text-sm text-gray-400 ">
              FOOD PREFERENCE
            </label>
            <select
              id={`${props.committee}_food`}
              className="  mt-3 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non Veg</option>
            </select>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_country`}
                id={`${props.committee}_country`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_country`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 1
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name={`${props.committee}_backupCountry`}
                id={`${props.committee}_backupCountry`}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor={`${props.committee}_backupCountry`}
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Country Preference 2
              </label>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor={`${props.committee}_number_muns`}
              className="text-sm text-gray-400 "
            >
              MUN EXPERIENCE
            </label>
            <select
              id={`${props.committee}_number_muns`}
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
              htmlFor={`${props.committee}_placements`}
              className="peer peer-focus:font-medium  text-sm text-gray-400 "
            >
              LIST YOUR MUN PLACEMENTS (OPTIONAL)
            </label>
            <textarea
              id={`${props.committee}_placements`}
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
  const [currentStatus, changeStatus] = useState("entering");

  const makePayment = async (info) => {
    changeStatus("loading");

    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }
    console.log("time to fetch");
    const people = JSON.stringify({ total: members });
    const data = await fetch("https://mun-backend.vercel.app/indipay", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: people,
    }).then((t) => t.json());

    var options = {
      key: process.env.RAZORPAY_KEY,
      name: `St Joseph's Boys' Highschool`,
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "SJBHS MUN",
      image: { mun_logo },
      handler: async function (response) {
        info.order_id = response.razorpay_order_id;
        info.payment_id = response.razorpay_payment_id;
        info.razorpay_signature = response.razorpay_signature;

        const JSONdata = JSON.stringify(info);

        // API endpoint where we send htmlForm data.
        const endpoint = "https://mun-backend.vercel.app/delegation ";

        const options = {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },
          body: JSONdata,
        };

        // Send the htmlForm data to our htmlForms API on Vercel and get a response.
        const result = await (await fetch(endpoint, options)).json();
        if (result.result === "success") {
          changeStatus("done");
          console.log(ids);
          putIds(result.ids);
        } else {
          changeStatus("error");
        }
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

    // Get data from the htmlForm.
    let delegation = [
      {
        name:
          event.target.head_delegate_first_name.value +
          " " +
          event.target.head_delegate_last_name.value,
        country: event.target.head_delegate_country.value,
        experience: event.target.head_delegate_number_muns.value,
        placements: event.target.head_delegate_placements.value,
        backupCountry: event.target.head_delegate_backupCountry.value,
        email: event.target.head_delegate_email.value,
        phoneNumber: event.target.head_delegate_phone.value,
        backupCommittee: event.target.head_delegate_backupCommittee.value,
        committee: event.target.head_delegate_committee.value,
        food: event.target.head_delegate_food.value,
      },
    ];
    for (let i = 2; i <= members; i++) {
      delegation.push({
        name:
          event.target[`delegate_${i}_first_name`].value +
          " " +
          event.target[`delegate_${i}_last_name`].value,
        country: event.target[`delegate_${i}_country`].value,
        experience: event.target[`delegate_${i}_number_muns`].value,
        placements: event.target[`delegate_${i}_placements`].value,
        backupCountry: event.target[`delegate_${i}_backupCountry`].value,
        email: event.target[`delegate_${i}_email`].value,
        phoneNumber: event.target[`delegate_${i}_phone`].value,
        backupCommittee: event.target[`delegate_${i}_backupCommittee`].value,
        committee: event.target[`delegate_${i}_committee`].value,
        food: event.target[`delegate_${i}_food`].value,
      });
    }
    const data = {
      delegation: delegation,
      name: delegationDetails[0],
      type: delegationDetails[1],
      total: members,
    };
    makePayment(data);
  };
  const [delegationDetails, changeDetails] = useState(["", ""]);
  return (
    <div className="my-28">
      {members < 3 || members > 40 ? (
        <>
          <h1 className="md:text-6xl text-4xl text-white text-center">
            DELEGATION INFORMATION
          </h1>
          <section class="">
            <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("First form power");
                  changeDetails([e.target.name.value, e.target.type.value]);
                  changeMembers(e.target.total_members.value);
                }}
              >
                <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div class="sm:col-span-2">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      DELEGATION NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="item-weight"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TOTAL DELEGATES
                    </label>
                    <input
                      type="number"
                      name="item-weight"
                      id="total_members"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="8"
                      min="8"
                      max="40"
                      required
                    />
                  </div>
                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      TYPE OF DELEGATION
                    </label>
                    <select
                      id="type"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option value="Institution">Institution</option>
                      <option value="Private">Private</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-amber-600 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                >
                  Register
                </button>
              </form>
            </div>
          </section>
        </>
      ) : (
        <form
          className="flex flex-col justify-center items-center mt-10 "
          onSubmit={handleSubmit}
        >
          <h1 className="md:text-6xl text-4xl text-white text-center">
            DELEGATION REGISTRATION
          </h1>

          <div className="flex flex-wrap justify-center items-center mt-11">
            <Template committee="head_delegate" name="HEAD DELEGATE" />;
            {Array.from(Array(members - 1), (e, i) => {
              let delegateNumber = i + 2;
              return (
                <Template
                  name={`Delegate ${delegateNumber}`}
                  committee={`delegate_${delegateNumber}`}
                  key={i}
                />
              );
            })}
          </div>
          <button
            type="submit"
            className="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-[50vw] sm:w-80 m-10 rounded-md text-white outline-none  shadow-lg transhtmlForm align-left active:scale-90 transition-transhtmlForm "
            disabled={currentStatus === "done" ? true : false}
          >
            {currentStatus === "entering"
              ? "PAY"
              : currentStatus === "loading"
              ? "Loading"
              : currentStatus === "done"
              ? "Success"
              : "Error"}
          </button>
        </form>
      )}
      {currentStatus === "done" ? (
        <div
          href="#"
          class="block h-56 text-2xl p-6   rounded-lg shadow-emerald-500 shadow-sm bg-black"
        >
          <p class="mb-3 text-white">
            Congrats you are officially part of SJBHSMUN 2023 🎉
          </p>

          <p class="mb-3 text-white">
            {`Take a screen shot of your UUID so you not don't forget`}
          </p>
          <ul className="list-none mt-14  ">
            {ids.map((person) => (
              <li className="text-white" key={person}>
                {person[0]} : SJBHSMUN{person[1]}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
