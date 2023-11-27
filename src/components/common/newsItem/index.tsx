import { ROUTERS } from "@/const/router";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

const NewsItem = ({ id, title, image = "", category }) => {
  return (
    <Link href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + id}>
      <Card
        shadow="none"
        radius="none"
        className="group after:content-[''] after:h-[4px] after:bg-green-common after:mx-3 md:after:hidden"
      >
        <CardBody className="overflow-visible p-0">
          <div className="aspect-video">
            <Image
              src={image}
              alt="Image news"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </CardBody>
        <CardFooter className="items-start">
          <div className="px-1 h-[90px] lg:h-[120px] relative">
            <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-start text-neutral-950 text-base lg:text-xl font-bold line-clamp-3">
              {title}
            </div>
            <div className="text-xs font-bold text-green-common absolute bottom-0">
              {category}
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NewsItem;
