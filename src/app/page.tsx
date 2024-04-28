"use client";
import Test from "./Test";
import Test2 from "./Test2";
import { motion, useAnimation, useInView, inView } from "framer-motion";
import { useEffect, useRef } from "react";
import MyAnimtaion from "./MyAnimtaion";

export default function Home() {
  return (
    <main>
      <FirstDiv />
      <Test />
      <Test2 />
    </main>
  );
}

const FirstDiv = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("show");
      console.log("First div in view");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);
  return (
    <div className=" bg-stone-900 flex p-10 flex-col items-center space-y-4 md:max-w-7xl mx-auto">
      <div>
        {" "}
        <h2 className="text-2xl md:text-3xl font-bold">
          Testing Framer motion
        </h2>
      </div>
      <div>
        <div
          ref={ref}
          className="w-full min-h-screen flex flex-col items-center space-y-10  md:max-w-7xl md:mx-auto md:h-[700px] md:flex-row md:items-center md:justify-center md:space-x-10 md:space-y-0      ">
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: -20 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: 0.25 }}
            className="w-40 h-40 bg-red-500 rounded-md md:w-[400px] md:h-[400px] p-2 grid place-content-center">
            <p>This is one child div</p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.5, y: -20 },
              show: {
                opacity: 1,
                scale: 1,
                y: 0,
              },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 1, delay: 0.25 }}
            className="w-40 h-40 bg-green-500 rounded-md p-2 md:w-[400px] md:h-[400px] grid place-content-center">
            <p>This is second child div</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
