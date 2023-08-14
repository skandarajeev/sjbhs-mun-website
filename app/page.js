import Image from "next/image";
import style from "./styles.css";
import logo from "./media/MUN LOGO.png";
import circle from "./media/Ellipse 1.svg";
import kali from "./media/calendar-by-skanda .svg"
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
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      ></link>

      {/* HERO SECTION! */}

      <div className="flex flex-col items-center justify-center my-auto ">
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

      <Image className=" w-80 md:w-6/12 h-auto md:h-200" src={kali} alt={circle} />

      {/* DATE REVEAL END */}

      {/* Committees Reveal section */}
      <section className="m-3">
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
            <Event name="Comittee Name" details="" />
            <Event name="Comittee Name" details="" />
            <Event name="Comittee Name" details="" />+
            <Event name="Comittee Name" details="" />
            <Event name="Comittee Name" details="" />
            <Event name="Comittee Name" details="" />
            <MyComponent />
          </div>
        </div>
      </section>
    </div>)

}
