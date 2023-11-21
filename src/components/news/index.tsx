"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListLatestNews from "./listLatestNews";
import { getNewsThunk } from "./store/thunk";

const NewsModule = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewsThunk({}));
  }, []);

  return (
    <div className="container mx-auto">
      {/* <NewsTop /> */}
      <ListLatestNews />

      <div className="grid grid-cols-4 gap-4"></div>
    </div>
  );
};

export default NewsModule;
