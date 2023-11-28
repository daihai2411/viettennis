import { ROUTERS } from "@/const/router";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectLoading, selectNewsFirst } from "./store/slice";

const HeadLeft = ({}) => {
  const loading = useSelector(selectLoading);
  const newsFirst = useSelector(selectNewsFirst);

  return (
    <Link
      href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + newsFirst?.id}
      className="col-span-3 lg:col-span-2 rounded-lg group cursor-pointer"
    >
      <Skeleton isLoaded={!loading} className="rounded-lg">
        <div className="aspect-video">
          <Image
            src={newsFirst?.banner_image}
            alt="Image news"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Skeleton>
      <Skeleton isLoaded={!loading} className="rounded-lg mt-2">
        <div className="text-gray-700 text-[22px] font-bold mt-2 group-hover:text-green-common group-hover:underline">
          {newsFirst?.title}
        </div>
      </Skeleton>
    </Link>
  );
};

export default HeadLeft;
