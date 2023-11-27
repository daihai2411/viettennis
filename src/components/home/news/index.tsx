"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Body from "./Body";
import Head from "./Head";
import { getNewsThunk } from "./store/thunk";

const News = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getNewsThunk({ paginate: 4 }));
  }, []);

  return (
    <div className="mt-6">
      <Head />
      <Body />
    </div>
  );
};

export default News;
