import { ROUTERS } from "@/const/router";
import { Image, Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { useSelector } from "react-redux";
import {
  selectLoading,
  selectNewsFirst,
  selectNewsSecond,
} from "./store/slice";

const Head = () => {
  const loading = useSelector(selectLoading);
  const newsFirst = useSelector(selectNewsFirst);
  const newsSecond = useSelector(selectNewsSecond);

  return (
    <>
      <div className="lg:grid grid-cols-4 gap-4 mt-6 mb-11 hidden ">
        <Link
          href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + newsFirst?.id}
          className="col-span-3 rounded-lg group cursor-pointer"
        >
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <Image
              alt="image"
              className="w-full h-[504px] rounded-lg"
              src={newsFirst?.banner_image}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading} className="rounded-lg mt-2">
            <div className="text-gray-700 text-[22px] font-bold mt-2 group-hover:text-green-common group-hover:underline">
              {newsFirst?.title}
            </div>
          </Skeleton>
        </Link>
        <Link
          href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + newsSecond?.id}
          className="rounded-lg bg-gradient-to-b from-gray-200 cursor-pointer via-gray-100 to-white group col-span-1"
        >
          <Skeleton isLoaded={!loading} className="rounded-lg">
            <Image
              alt="image"
              className="w-full h-[163.83px] relative rounded-tl-lg rounded-tr-lg"
              src={newsSecond?.banner_image}
            />
          </Skeleton>
          {loading ? (
            <div className="space-y-3 mt-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-4/5 rounded-lg">
                <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
              </Skeleton>
              <Skeleton className="w-2/5 rounded-lg">
                <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          ) : (
            <div className="px-2 pt-3">
              <div className="text-gray-700 text-base font-bold mb-2 group-hover:text-green-common group-hover:underline">
                {newsSecond?.title}
              </div>
              <div className="text-gray-700 text-[13px] font-normal mb-1">
                {newsSecond?.created_by}
              </div>
              <div className="text-slate-700 text-base font-normal line-clamp-6">
                {newsSecond?.raw_content}
              </div>
            </div>
          )}
        </Link>
      </div>
      <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-11">
        {[newsFirst, newsSecond].map((item) => (
          <div key={item?.id} className="w-full group mb-3">
            <Skeleton isLoaded={!loading} className="flex justify-center">
              <Image
                alt="image"
                width={350}
                className="w-[350px] h-[160px] mb-4 group-hover:scale-105 mx-auto rounded"
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Head;
