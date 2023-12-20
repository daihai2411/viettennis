"use client";

import { AppDispatch } from "@/redux/store";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ListLatestVideos from "./listLatestVideos";
import { getVideosThunk } from "./store/thunk";

const VideosModule = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getVideosThunk({ paginate: 12 }));
  }, []);

  return (
    <div className="container mx-auto">
      <ListLatestVideos />
      <div className="flex justify-center">
        <Link
          href={"https://www.youtube.com/@viettennis./videos"}
          target="_blank"
        >
          <Button className="text-white uppercase bg-[#141414] font-extrabold text-base rounded-sm">
            Xem thêm
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default VideosModule;
