"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
type props = {
  children: ReactNode;
};

const MyAnimtaion = ({ children }: props) => {
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
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0, x: -100, y: -100 },
        visible: { opacity: 1, scale: 1, x: 0, y: 0 },
      }}
      initial="hidden"
      animate={control2}
      transition={{ duration: 1, delay: 0.25 }}>
      {children}
    </motion.div>
  );
};

export default MyAnimtaion;
