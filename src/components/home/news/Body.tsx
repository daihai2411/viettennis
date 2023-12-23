import { useSelector } from "react-redux";
import NewsItem from "./common/NewsItem";
import NewsItemAside from "./common/NewsItemAside";
import { selectListNews, selectLoading } from "./store/slice";

const Body = () => {
  const loading = useSelector(selectLoading);
  const listNews = useSelector(selectListNews);

  const listNews1 = listNews.slice(3, 7);
  const listNews2 = listNews.slice(1, 7);

  return (
    <>
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6 mb-11">
        {listNews1.map((item) => (
          <NewsItem key={item?.id} item={item} loading={loading} />
        ))}
      </div>
      <div className="hidden md:grid grid-cols-3 lg:hidden gap-4 mt-6 mb-11">
        {listNews2.map((item) => (
          <NewsItem key={item?.id} item={item} loading={loading} />
        ))}
      </div>
      <div className="block md:hidden mt-6 mb-9">
        {listNews2.map((item) => (
          <NewsItemAside key={item?.id} item={item} loading={loading} />
        ))}
      </div>
    </>
  );
};

export default Body;
