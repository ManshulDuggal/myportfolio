"use client";
import React, { use } from "react";
import { useGenerationStore } from "../store/Store";
interface Props {}

const State = ({ children }: { children: React.ReactNode }) => {
  const { language } = useGenerationStore();

  return <></>;
};

export default State;
