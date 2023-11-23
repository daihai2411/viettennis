import { ROUTERS } from "@/const/router";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectListNewsNext, selectLoading } from "./store/slice";

const Body = () => {
  const loading = useSelector(selectLoading);
  const listNewsNext = useSelector(selectListNewsNext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-11">
      {listNewsNext.map((item) => (
        <Link
          href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}
          key={item?.id}
          className="w-full group mb-3"
        >
          <Skeleton isLoaded={!loading} className="flex justify-center">
            {/* group-hover:scale-105  */}
            <Image
              alt="image"
              width={350}
              className="w-[350px] h-[160px] mb-4 mx-auto rounded"
              radius="none"
              src={item?.banner_image}
            />
          </Skeleton>
          <div className="h-[80px] relative">
            <Skeleton isLoaded={!loading}>
              <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-neutral-950 text-base font-bold line-clamp-2">
                {item?.title}
              </div>
            </Skeleton>
            <div className="text-gray-700 text-[13px] absolute bottom-0">
              {item?.created_by}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Body;
