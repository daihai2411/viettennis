import { AppDispatch } from "@/redux/store";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { selectListVideo, selectLoading } from "./store/slice";
import { getVideosThunk } from "./store/thunk";

const Videos = () => {
  const dispatch = useDispatch<AppDispatch>();

  const listVideos = useSelector(selectListVideo);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(getVideosThunk({ pagination: 5 }));
  }, []);

  return (
    <div>
      <div className="mb-2 lg:mb-6 pb-1 border-b-2 border-green-common text-neutral-950 flex justify-between">
        <h2 className="font-bold lg:text-2xl text-xl">Những video mới nhất</h2>
        <Link
          href={"https://www.youtube.com/@viettennis./videos"}
          target="_blank"
          className="flex items-center"
        >
          <div className="font-medium text-sm flex items-center hover:text-green-common gap-1 cursor-pointer">
            Xem thêm <FaChevronRight size={12} />
          </div>
        </Link>
      </div>

      {listVideos && listVideos.length
        ? listVideos.map((item) => (
            <Link
              href={item?.video_url}
              target="_blank"
              key={item.video_id}
              className="grid grid-cols-12 gap-4 mb-6 group cursor-pointer"
            >
              <Skeleton
                isLoaded={!loading}
                className="sm:col-span-3 col-span-4 relative rounded-lg"
              >
                <div className="w-full aspect-video">
                  <Image
                    src={item?.thumbnail}
                    alt="Image news"
                    layout="fill"
                    objectFit="cover"
                    className="rounder rounded-lg"
                  />
                </div>
                <Image
                  width={26}
                  height={26}
                  alt="icon"
                  className="absolute bottom-0 w-5 sm:w-[26px]"
                  src="/media-thumbnail.png"
                />
              </Skeleton>
              <Skeleton
                isLoaded={!loading}
                className="col-span-8 sm:col-span-9  text-[#141414] text-sm md:text-base line-clamp-3 font-bold md:font-extrabold lg:text-lg group-hover:text-green-common group-hover:underline"
              >
                {item?.title}
              </Skeleton>
            </Link>
          ))
        : null}
    </div>
  );
};

export default Videos;
