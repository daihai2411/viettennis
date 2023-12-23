import { ROUTERS } from "@/const/router";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import NewsItem from "./common/NewsItem";
import NewsItemAside from "./common/NewsItemAside";
import { selectListNews, selectLoading } from "./store/slice";

const NewsBottom = () => {
  const loading = useSelector(selectLoading);
  const listNews = useSelector(selectListNews);

  return (
    <div className="mt-6">
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
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-11">
        {listNews.slice(0, 8).map((item) => (
          <NewsItem key={item?.id} item={item} loading={loading} />
        ))}
      </div>
      <div className="block md:hidden mt-6 mb-9">
        {listNews.slice(0, 8).map((item) => (
          <NewsItemAside key={item?.id} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default NewsBottom;
