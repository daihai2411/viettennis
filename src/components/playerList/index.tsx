"use client";

import { AppDispatch } from "@/redux/store";
import { Pagination, Spinner } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "../common/playerList";
import {
  selectData,
  selectInitialPage,
  selectLoading,
  selectTotal,
} from "./store/slice";
import { getListPlayersThunk } from "./store/thunk";

const PlayerListModule = () => {
  const dispatch = useDispatch<AppDispatch>();

  const list = useSelector(selectData);
  const total = useSelector(selectTotal);
  const initialPage = useSelector(selectInitialPage);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getListPlayersThunk({}));
  }, []);

  return (
    <div className="container mx-auto">
      {loading ? (
        <Spinner className=" mt-6 flex justify-center" />
      ) : (
        <>
          <PlayerList list={list} />
          <Pagination
            className="mt-10"
            total={total}
            initialPage={initialPage}
          />
        </>
      )}
    </div>
  );
};

export default PlayerListModule;
