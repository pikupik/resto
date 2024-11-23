"use client";
import MenuCard from "@/components/MenuCard";
import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";
const NoSSR = dynamic(() => import("../components/Headers"), { ssr: false });

export default function Home() {
  return (
    <>
      <NoSSR />
      <MenuCard />
    </>
  );
}
