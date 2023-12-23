import { ROUTERS } from "@/const/router";
import { Skeleton } from "@nextui-org/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectListNews, selectLoading } from "./store/slice";

const Aside = () => {
  const loading = useSelector(selectLoading);
  const listNews = useSelector(selectListNews);

  return (
    <div className="">
      <div className="mb-2 lg:mb-6 pb-1 border-b-2 border-green-common text-neutral-950 flex justify-between">
        <h2 className="font-bold lg:text-2xl text-xl">Tin mới nhất</h2>
        <Link
          href={ROUTERS.NEWS_AND_VIDEO.children.NEWS}
          className="flex items-center"
        >
          <div className="font-medium text-sm flex items-center hover:text-green-common gap-1 cursor-pointer">
            Xem thêm <FaChevronRight size={12} />
          </div>
        </Link>
      </div>
      <Skeleton isLoaded={!loading}>
        <ul className="list-outside list-disc ml-6">
          {listNews.slice(0, 8).map((item) => (
            <li
              key={item?.id}
              className="text-2xl text-green-common border-b-1 borer-[#e6e6e6] pb-4 cursor-pointer last:border-0"
            >
              <Link
                href={ROUTERS.NEWS_AND_VIDEO.children.NEWS + "/" + item?.id}
              >
                <span className="text-[#141414] font-semibold text-sm line-clamp-2 hover:underline">
                  {item?.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Skeleton>
    </div>
  );
};

export default Aside;
