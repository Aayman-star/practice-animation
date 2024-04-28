import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Test2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const control2 = useAnimation();
  useEffect(() => {
    if (isInView) {
      control2.start("visible");
      console.log("Animation in view");
    } else {
      control2.start("hidden");
    }
  }, [isInView]);
  return (
    <div className="bg-slate-900 w-full h-screen grid place-content-center md:max-w-7xl mx-auto ">
      <div
        ref={ref}
        className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-10 md:space-y-0">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0, x: -100, y: -100 },
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          }}
          initial="hidden"
          animate={control2}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-52 h-40 border-2 border-fuchsia-700 rounded-md grid place-content-center">
          <p className="p-2 font-light shadow-md shadow-emerald-600 text-slate-50">
            This is another div
          </p>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0, x: -100, y: -100 },
            visible: { opacity: 1, scale: 1, x: 0, y: 0 },
          }}
          initial="hidden"
          animate={control2}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-52 h-40 border-2 border-fuchsia-700 rounded-md grid place-content-center">
          <p className="text-slate-50 p-2 font-light shadow-md shadow-emerald-600">
            This is another div
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Test2;
