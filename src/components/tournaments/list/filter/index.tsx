"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFullFilterTournamentThunk } from "../store/thunk";
import FilterDetail from "./FilterDetail";
import FilterPoint from "./FilterLevel";

const Filter = () => {
  const dispatch = useDispatch<AppDispatch>();

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

  useEffect(() => {
    dispatch(getFullFilterTournamentThunk({}));
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
