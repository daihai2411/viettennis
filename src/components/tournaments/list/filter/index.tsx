"use client";

import { useEffect, useState } from "react";
import FilterDetail from "./FilterDetail";
import FilterPoint from "./FilterLevel";

const Filter = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //50px: height menu header top
    //78px: height menu header
    //128px: total 2 menu header
    <div
      style={{
        position: "sticky",
        top: scrollPosition <= 50 ? 128 - scrollPosition : 78,
        zIndex: 20,
      }}
    >
      <FilterDetail />
      <FilterPoint />
    </div>
  );
};

export default Filter;
