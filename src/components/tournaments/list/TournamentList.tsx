"use client";

import { AppDispatch } from "@/redux/store";
import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TournamentMonth from "./TournamentMonth";
import { selectListTournament, selectLoading } from "./store/slice";
import { getListTournamentThunk } from "./store/thunk";

const TournamentList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const list = useSelector(selectListTournament);

  useEffect(() => {
    dispatch(getListTournamentThunk({}));
  }, []);

  return (
    <div className="px-2 py-10">
      {loading ? (
        <Spinner className="mx-auto w-full py-4" />
      ) : (
        <>
          {list.map((item, index) => (
            <TournamentMonth key={index} dataMonth={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default TournamentList;
