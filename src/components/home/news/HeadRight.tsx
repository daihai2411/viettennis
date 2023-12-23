import { useSelector } from "react-redux";
import NewsItem from "./common/NewsItem";
import { selectLoading, selectNewsSecond } from "./store/slice";

const HeadRight = () => {
  const loading = useSelector(selectLoading);
  const newsSecond = useSelector(selectNewsSecond);

  return (
    <div className="hidden lg:block">
      {newsSecond.map((item) => (
        <NewsItem key={item?.id} item={item} loading={loading} />
      ))}
    </div>
  );
};

export default HeadRight;
