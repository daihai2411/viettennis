import { useSelector } from "react-redux";
import { selectTopLatestNews } from "../store/slice";

const NewsTop = () => {
  const topLatestNews = useSelector(selectTopLatestNews);

  return <div>NewsTop</div>;
};

export default NewsTop;
