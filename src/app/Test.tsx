"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const Test = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      control2.start("visible");
      console.log("Test in view");
    } else {
      control2.start("hidden");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      className="bg-amber-300 w-full h-screen p-20 grid place-content-center md:max-w-7xl md:mx-auto md:h-[700px]">
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0, x: -20 },
          visible: { opacity: 1, scale: 1, x: 0 },
        }}
        initial="hidden"
        animate={control2}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col-reverse gap-y-10 md:flex-row md:items-center md:space-x-10 md:space-y-0">
        {" "}
        <div className=" border-2 border-pink-400 p-10 rounded-md">
          {" "}
          <p className="text-2xl">This is another div</p>
        </div>
        <div className=" border-2 border-pink-400 p-10 rounded-md">
          {" "}
          <p className="text-2xl">This is another div</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Test;
