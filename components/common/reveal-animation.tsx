"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

function RevealMotion({
  children,
  className,
  duration,
  delay,
  translateY,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  translateY?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          translateY: translateY || 10,

          filter: "blur(1px)",
        },
        visible: {
          opacity: 1,
          translateY: 0,
          filter: "blur(0px)",
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration || 0.5, delay: delay || 0.2 }}
    >
      {children}
    </motion.div>
  );
}
export default RevealMotion;
