import { ROUTERS } from "@/const/router";
import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ item, loading }) => {
  return (
    <Link href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}>
      <Card
        shadow="none"
        radius="sm"
        className="group after:content-[''] after:h-[2px] after:bg-green-common after:mx-3 md:after:hidden"
      >
        <CardBody className="overflow-visible p-0">
          <Skeleton isLoaded={!loading}>
            <div className="aspect-video">
              <Image
                src={item?.banner_image || ""}
                alt="Image news"
                layout="fill"
                objectFit="cover"
                className="rounder rounded-lg"
              />
            </div>
          </Skeleton>
        </CardBody>
        <CardFooter className="items-start">
          <Skeleton isLoaded={!loading}>
            <div className="px-1 ">
              <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-start text-neutral-950 !text-base lg:text-xl font-bold line-clamp-2">
                {item?.title}
              </div>
            </div>
          </Skeleton>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsItem;
