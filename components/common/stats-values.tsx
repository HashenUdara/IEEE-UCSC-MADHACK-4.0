"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
export function RevealStats({ name, value }: { name: string; value: string }) {
  "use client";
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-500px 0px -500px 0px",
  });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          color: "transparent",
          WebkitTextStroke: "2px #5cc6ff",
          transitionDuration: "0.5s",
        },
        visible: {
          color: "#5cc6ff",
        },
      }}
      className=" my-40"
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0,
        delay: 0,
        ease: "easeInOut",
      }}
    >
      <p className=" -tracking-widest font-geist-sans   text-7xl sm:text-[5rem]">
        RS. <span className=" text-8xl sm:text-[12rem]">{value}</span>,000
      </p>
      <p className=" text-3xl sm:text-4xl text-[#5cc6ff] font-light tracking-tighter mt-6">
        {name}
      </p>
    </motion.div>
  );
}
