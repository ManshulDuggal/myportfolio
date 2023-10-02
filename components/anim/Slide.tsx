"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";

const SlideAnim = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <AnimatePresence>
        <motion.div initial={{ x: -100 }} animate={{ x: 0 }} exit={{ x: 0 }}>
          <div>{children}</div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SlideAnim;
