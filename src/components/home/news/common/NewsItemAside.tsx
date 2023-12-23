import { ROUTERS } from "@/const/router";
import { Card, CardHeader, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const NewsItemAside = ({ item, loading }) => {
  return (
    <Link href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}>
      <Card shadow="none" radius="none" className="group">
        <CardHeader className="flex gap-3">
          <Skeleton
            isLoaded={!loading}
            className="aspect-video min-w-[115px] w-[115px] rounder rounded-lg"
          >
            <Image
              src={item?.banner_image || " "}
              alt="Image news"
              objectFit="cover"
              className="rounder rounded-lg"
              width={115}
              height={65}
            />
          </Skeleton>
          <Skeleton isLoaded={!loading} className="flex flex-col">
            <p className="!text-xs group-hover:text-green-common cursor-pointer group-hover:underline text-start text-neutral-950 lg:text-xl font-medium line-clamp-3">
              {item?.title}
            </p>
          </Skeleton>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default NewsItemAside;
