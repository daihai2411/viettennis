"use client";

import { AppDispatch } from "@/redux/store";
import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import TournamentItem from "./TournamentItem";
import { selectListTournament, selectLoading } from "./store/slice";
import { getListTournamentThunk } from "./store/thunk";

const TableData = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const list = useSelector(selectListTournament);

  useEffect(() => {
    dispatch(getListTournamentThunk({}));
  }, []);

  return (
    <div className="px-2 py-10">
      <div className="flex mb-8">
        <div className="h-14 w-20 bg-[#e6e6e6] mr-6 flex justify-center items-center">
          <FaCalendarAlt size={32} />
        </div>
        <div className="text-[38px] font-bold">tháng 10 năm 2023</div>
      </div>
      {loading ? (
        <Spinner className="mx-auto w-full py-4" />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {list.map((item) => (
            <TournamentItem key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TableData;
