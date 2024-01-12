"use client";

import { AppDispatch } from "@/redux/store";
import { Skeleton } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectSupportData } from "./store/slice";
import { getPageSupportThunk } from "./store/thunk";

const SupportModule = ({ pageId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const loading = useSelector(selectLoading);
  const data = useSelector(selectSupportData);

  useEffect(() => {
    if (pageId) {
      dispatch(getPageSupportThunk({ id: pageId }));
    }
  }, [pageId]);

  return (
    <div className="container mx-auto">
      <div className="mt-10 w-[80%] lg:w-[60%] mx-auto">
        {loading ? (
          <Skeleton isLoaded={!loading} className="h-64" />
        ) : data?.content ? (
          <div
            className="default"
            dangerouslySetInnerHTML={{ __html: data?.content }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default SupportModule;
