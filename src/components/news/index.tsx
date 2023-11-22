"use client";

import { AppDispatch } from "@/redux/store";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListLatestNews from "./listLatestNews";
import { selectLoadingMoreData, selectTotalPage } from "./store/slice";
import { getNewsLoadMoreThunk, getNewsThunk } from "./store/thunk";

const NewsModule = () => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoadingMoreData);
  const totalPage = useSelector(selectTotalPage);

  const [page, setPage] = useState(2);

  const onLoadMore = () => {
    dispatch(getNewsLoadMoreThunk({ page: page }));
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(getNewsThunk({}));
  }, []);

  useEffect(() => {
    () => {
      setPage(2);
    };
  }, []);

  return (
    <div className="container mx-auto">
      {/* <NewsTop /> */}
      <ListLatestNews />
      {page <= totalPage ? (
        <div className="flex justify-center">
          <Button
            isLoading={loading}
            onClick={onLoadMore}
            className="text-white uppercase bg-[#141414] font-extrabold text-base rounded-sm"
          >
            Cho xem nhiều hơn
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default NewsModule;
