"use client";
import { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children }: { children: React.ReactNode }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  // const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  // const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [900, -120]);

  return <motion.div style={{ y: lg }}>{children}</motion.div>;
}
