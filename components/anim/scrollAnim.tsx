"use client";

import { useScroll, useSpring, useTransform } from "framer-motion";
import React, { Children, useRef } from "react";
import { motion } from "framer-motion";
interface Props {}

const ScrollAnim = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 2", "1.33 2"],
  });

  const ScaleProgress = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 120,
  });
  const OpacityProgress = useTransform(scrollYProgress, [0.5, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: OpacityProgress,
        scale: ScaleProgress,
      }}
      className="scroll-smooth"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnim;
