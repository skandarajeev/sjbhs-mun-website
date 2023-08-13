import Image from "next/image";
import style from "./styles.css";
import logo from "./media/MUN LOGO.png";
import circle from "./media/Ellipse 1.svg";
import bgGradient from "./media/backgroundGradient.png";
import MyComponent from "./about/page";


const Event = (details) => {
  return (
    <div className="mt-[1rem] gradient-zero mx-auto w-[70vw] h-[140px] rounded-lg p-[10px] ">
      <div className="flex justify-center flex-col  gradient-zeroOne  rounded-md  w-[100%] h-[100%]">
        <p className="text-white font-poppins text-center text-5xl align-middle ">
          {details.name}
        </p>
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>



      {/* NAVBAR */}
     

      {/* NAVBBAR END */}
      

      {/* HERO SECTION! */}

      <div className="flex flex-col items-center justify-center my-[40%] md:my-[20%] lg:my-[10%]">
        <div className="">
          <h1 className="text-[2rem] m-auto text-gradient-to-r font-poppins from-yellow-500 to-white bg-clip-text mun-gradient mun-typography">
            SJBHSMUN 2023
          </h1>
        </div>
        <Image
          className=" w-80 md:w-6/12 h-auto md:h-200   "
          src={logo}
          alt=""
        />
        <Image
          className=" w-80 md:w-6/12 h-auto md:h-200   "
          src={circle}
          alt=""
        />

        <div className="text-center my-5">
          <p className="text-[#646464] font-poppins text-xl ">Welcome to our</p>
          <p className="text-white font-poppins text-4xl tracking-[11px]">
            11TH EDITION
          </p>
        </div>
      </div>
      {/* HERO SECTION END! */}

      {/* DATE REVEAL SECTION */}
      <div className="background-gradient  justify-between text-center flex flex-col  w-[100%] md:w-[80%] md:m-auto p-[3rem] rounded-[3rem] my-10 ">
        <p className="font-poppins text-white mb-2 ">JOIN US ON</p>
        <p className="font-poppins mun-gradient text-5xl font-semibold mb-2">
          OCTOBER
        </p>

        <div className="flex m-auto gap-[3rem] mb-2">
          <p className="font-poppins text-white ">23rd</p>
          <p className="font-poppins text-white">24th</p>
          <p className="font-poppins text-white">25th</p>
        </div>

        <div className="flex gap-[3rem] m-auto mb-2">
          <p className="font-poppins mun-gradient text-5xl font-semibold">30</p>
          <p className="font-poppins mun-gradient text-5xl font-semibold">12</p>
          <p className="font-poppins mun-gradient text-5xl font-semibold">60</p>
          <p className="font-poppins mun-gradient text-5xl font-semibold">30</p>
        </div>

        <div className="flex gap-[3rem] m-auto mb-2">
          <p className="font-poppins text-white">Days</p>
          <p className="font-poppins text-white">Hours</p>
          <p className="font-poppins text-white">Minutes</p>
          <p className="font-poppins text-white">Seconds</p>
        </div>
      </div>

      {/* DATE REVEAL END */}

      {/* Committees Reveal section */}
      <section className="m-[10vh]">
        <div className="committees">
          <div className="committees-background"></div>

          <div className=" flex flex-col gap-3 headingText">
            <h1 className="font-poppins text-5xl text-center text-white ">
              What are the
            </h1>
            <h1 className="font-poppins text-5xl text-center text-white tracking-[5px] ">
              Committees?
            </h1>
          </div>

          <div>
            <Event name="JCC" details="" />
            <Event name="KAR SEGGS" details="" />
            <Event name="UNSC" details="" />
            <MyComponent />
            <MyComponent />
            <MyComponent />
      
          </div>
        </div>
      </section>
    </>
  );
}
