"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Filter from "../common/Filter";
import { getListRealEstateAgencyThunk } from "../store/thunk";
import TableData from "./TableData";

const RankingSingles = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getListRealEstateAgencyThunk({}));
  }, []);

  return (
    <>
      <Filter />
      <div className="container mx-auto">
        <TableData />
      </div>
    </>
  );
};

export default RankingSingles;
