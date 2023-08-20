"use client";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center mt-11">
      <h1 className="text-white text-5xl text-center">JUST ₹1</h1>;
      <button
        type="button"
        class="px-4 py-3 bg-blue-600 hover:bg-blue-700 w-80 m-10 rounded-md text-white outline-none  shadow-lg transform active:scale-90 transition-transform"
      >
        PAY
      </button>
    </div>
  );
}
