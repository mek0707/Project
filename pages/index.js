import axios from "axios";
import {useEffect, useState} from "react";
import "tailwindcss/tailwind.css";
import styles from "../components/css/text.module.css";
import styles_1 from "../components/css/text_1.module.css";

function index() {
  const [data, setData] = useState([]);
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <div className="flex flex-col">
        <div className={`flex justify-center items-center text-[55px] text-white gap-2 ${styles_1.sign}`}>
          <span className={styles_1["fast-flicker"]}>W</span>ell
          <span className={styles_1["flicker"]}>c</span>om
          <span className={` text-red-800 mt-10 origin-top-left rotate-12 animate-wiggle`}>e</span>
        </div>

        <div className={`flex justify-center items-center text-[70px] text-white gap-2 ${styles_1.sign}`}>
          <span className="">I</span>
          <span className={`${styles_1["fast-flicker"]}`}>N</span>
          <span className="">D</span>
          <span className="">E</span>
          <span className="">X</span>
          <span className="">.</span>
          <span className="pr-2">.</span>

          <span className="">C</span>
          <span className={`text-[#6b1839]`}>O</span>
          <span className="">M</span>
          <span className="">P</span>
          <span className="">L</span>
          <span className="">E</span>
          <span className={` text-red-800 mt-10 origin-top-left rotate-12 animate-wiggle ${styles_1["flicker"]}`}>T</span>
          <span className="">E</span>
          <span className=" text-red-800">.</span>
          <span className=" text-red-800">.</span>
        </div>
      </div>
    </div>
  );
}

export default index;
