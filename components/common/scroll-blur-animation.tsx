"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
export function RevealStats({ children }: { children: ReactNode }) {
  "use client";
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-150px 0px -150px 0px",
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
          filter: "blur(10px)",
          opacity: 0.5,

          transitionDuration: "0.5s",
        },
        visible: {
          filter: "blur(0px)",
          opacity: 1,
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0,
        delay: 0,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
