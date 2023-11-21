import { ROUTERS } from "@/const/router";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const NewsItem = ({ id, title, image = "", category }) => {
  return (
    <Link
      href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + id}
      className="w-full group mb-3"
    >
      <Image
        alt="image"
        width={350}
        className="w-[350px] h-[209px] mb-4 group-hover:scale-105 mx-auto"
        radius="none"
        src={image}
      />
      <div className="px-3 h-[120px] relative">
        <div className="group-hover:text-green-common cursor-pointer group-hover:underline text-neutral-950 text-xl font-bold line-clamp-3">
          {title}
        </div>
        <div className="text-xs font-bold text-green-common absolute bottom-0">
          {category}
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
