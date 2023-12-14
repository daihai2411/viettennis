"use client";

import { AppDispatch } from "@/redux/store";
import { Pagination, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlayerList from "../common/playerList";
import Filter from "./filter";
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

  const [currentPage, setCurrentPage] = useState(1);
  const [params, setParams] = useState<any>({});

  const changeParams = (val: any) => {
    setParams({ ...params, ...val });
  };

  const resetParams = () => {
    setParams({});
  };

  useEffect(() => {
    dispatch(getListPlayersThunk({ page: currentPage, ...params }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage, params]);

  useEffect(() => {
    return () => {
      setCurrentPage(1);
    };
  }, []);

  return (
    <>
      <div className="w-full h-[152.16px] px-4 py-12 mt-3 mb-2 bg-green-common flex-col justify-center items-center">
        <div className="text-center text-white text-4xl sm:text-[47.06px] font-bold">
          Danh sách người chơi
        </div>
      </div>
      <Filter changeParams={changeParams} resetParams={resetParams} />
      <div className="container mx-auto">
        {loading ? (
          <Spinner className="mt-6 flex justify-center" />
        ) : (
          <>
            {list.length ? (
              <PlayerList list={list} />
            ) : (
              <div className="flex justify-center mt-6">
                Không tìm thấy người chơi
              </div>
            )}
            <Pagination
              showControls
              className="mt-10"
              total={total}
              initialPage={initialPage}
              classNames={{
                cursor: "bg-[#2DA46B]",
              }}
              onChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </>
  );
};

export default PlayerListModule;
