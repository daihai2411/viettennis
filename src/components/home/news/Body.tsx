import { ROUTERS } from "@/const/router";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Skeleton,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectListNewsNext, selectLoading } from "./store/slice";

const Body = () => {
  const loading = useSelector(selectLoading);
  const listNewsNext = useSelector(selectListNewsNext);

  return (
    <>
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-11">
        {listNewsNext.map((item) => (
          <Link
            key={item?.id}
            href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}
          >
            <Card
              shadow="none"
              radius="none"
              className="group after:content-[''] after:h-[4px] after:bg-green-common after:mx-3 md:after:hidden"
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
                    <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-start text-neutral-950 !text-base lg:text-xl font-medium line-clamp-3">
                      {item?.title}
                    </div>
                    <div className="!text-[10px] mt-2 font-bold text-green-common">
                      {item?.created_by}
                    </div>
                  </div>
                </Skeleton>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
      <div className="block lg:hidden mt-[60px] mb-9">
        {listNewsNext.map((item) => (
          <Link
            key={item?.id}
            href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}
          >
            <Card shadow="none" radius="none" className="group">
              <CardHeader className="flex gap-3">
                <Skeleton isLoaded={!loading}>
                  <div className="aspect-video w-[115px]">
                    <Image
                      src={item?.banner_image || " "}
                      alt="Image news"
                      objectFit="cover"
                      className="rounder rounded-lg"
                      width={115}
                      height={65}
                    />
                  </div>
                </Skeleton>
                <div className="flex flex-col">
                  <Skeleton isLoaded={!loading}>
                    <p className="!text-xs group-hover:text-green-common cursor-pointer group-hover:underline text-start text-neutral-950 lg:text-xl font-medium line-clamp-3">
                      {item?.title}
                    </p>
                  </Skeleton>
                  <Skeleton isLoaded={!loading}>
                    <p className="!text-[10px] mt-2 font-bold text-green-common">
                      {item?.created_by}
                    </p>
                  </Skeleton>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
