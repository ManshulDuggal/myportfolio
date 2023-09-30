"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";

const FadeAnim = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default FadeAnim;
