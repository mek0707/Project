import axios from "axios";
import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import styles from "../components/css/text.module.css";
import styles_1 from "../components/css/text_1.module.css";

function index() {
  const [data, setData] = useState([]);
  return (
    <div className="flex h-screen justify-center items-center bg-black">
      <div className="flex flex-col">
        <div
          className={`flex justify-center items-center text-[55px] text-white gap-2 ${styles_1.sign}`}
        >
          <span className={styles_1["fast-flicker"]}>W</span>ell
          <span className={styles_1["flicker"]}>c</span>om
          <span
            className={` text-red-800 mt-10 origin-top-left rotate-12 animate-wiggle`}
          >
            e
          </span>
        </div>

        <div
          className={`flex justify-center items-center text-[70px] text-white gap-2 ${styles_1.sign}`}
        >
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
          <span
            className={` text-red-800 mt-10 origin-top-left rotate-12 animate-wiggle ${styles_1["flicker"]}`}
          >
            T
          </span>
          <span className="">E</span>
          <span className=" text-red-800">.</span>
          <span className=" text-red-800">.</span>
        </div>
      </div>

      {/* <div className={`flex text-[55px] text-white gap-2 ${styles.waviy}`}>
          <span style={{ "--i": 1 }} className="animate-noise-1">
            W
          </span>
          <span style={{ "--i": 2 }} className="">
            o
          </span>
          <span style={{ "--i": 3 }} className="text-red-800 animate-wiggle_1">
            n
          </span>
          <span style={{ "--i": 4 }} className="">
            g
          </span>
          <span style={{ "--i": 5 }} className="">
            s
          </span>
          <span style={{ "--i": 6 }} className="">
            a
          </span>
          <span style={{ "--i": 7 }} className="">
            t
          </span>
          <span style={{ "--i": 8 }} className="">
            o
          </span>
          <span style={{ "--i": 9 }} className="">
            r
          </span>
          <span style={{ "--i": 10 }} className="pr-12">
            n
          </span>

          <span style={{ "--i": 11 }} className="">
            N
          </span>
          <span style={{ "--i": 12 }} className="">
            a
          </span>
          <span style={{ "--i": 13 }} className="">
            r
          </span>
          <span style={{ "--i": 14 }} className="">
            u
          </span>
          <span style={{ "--i": 15 }} className="">
            r
          </span>
          <span style={{ "--i": 16 }} className="">
            o
          </span>
          <span style={{ "--i": 17 }} className="text-red-800">
            o
          </span>
          <span style={{ "--i": 18 }} className="">
            d
          </span>
          <span style={{ "--i": 19 }} className="">
            g
          </span>
          <span style={{ "--i": 20 }} className="">
            a
          </span>
          <span style={{ "--i": 21 }} className="">
            n
          </span>
          <span style={{ "--i": 22 }} className="">
            a
          </span>
          <span style={{ "--i": 23 }} className="text-red-800">
            w
          </span>
          <span style={{ "--i": 24 }} className="">
            r
          </span>
          <span style={{ "--i": 25 }} className="">
            e
          </span>
          <span style={{ "--i": 26 }} className="">
            e
          </span>
        </div> */}
    </div>
  );
}

export default index;
