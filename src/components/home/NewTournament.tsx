import { Image } from "@nextui-org/react";
import { useSelector } from "react-redux";
import NewsItem from "./news/common/NewsItem";
import NewsItemAside from "./news/common/NewsItemAside";
import { selectListTop3News, selectLoading } from "./news/store/slice";

const NewTournament = () => {
  const loading = useSelector(selectLoading);
  const listTop3News = useSelector(selectListTop3News);

  return (
    <div className="bg-[#F2F7F5] p-3 md:p-6 rounded-md mt-3 md:mt-6 mb-12">
      <Image
        alt="banner"
        className="w-full rounded-lg"
        src="/banner-center.jpeg"
      />
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        {listTop3News.map((item) => (
          <NewsItem key={item?.id} item={item} loading={loading} />
        ))}
      </div>
      <div className="block md:hidden mt-3 rounded-lg">
        {listTop3News.map((item) => (
          <NewsItemAside key={item?.id} item={item} loading={loading} />
        ))}
      </div>
    </div>
  );
};

export default NewTournament;
