"use client";

import { AppDispatch } from "@/redux/store";
import { Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollSpy from "react-ui-scrollspy";
import TournamentMonth from "./TournamentMonth";
import {
  selectListFilter,
  selectListTournament,
  selectLoading,
} from "./store/slice";
import { getListTournamentThunk } from "./store/thunk";

const TournamentList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const list = useSelector(selectListTournament);
  const listFilter = useSelector(selectListFilter);

  useEffect(() => {
    dispatch(getListTournamentThunk(listFilter));
  }, [listFilter]);

  return (
    <div className="px-2 py-10">
      {loading ? (
        <Spinner className="mx-auto w-full py-4" />
      ) : (
        <ScrollSpy>
          {list.map((item, index) => (
            <TournamentMonth key={index} dataMonth={item} />
          ))}
        </ScrollSpy>
      )}
    </div>
  );
};

export default TournamentList;
