import { useSelector } from "react-redux";
import ListNews from "../common/listNewsOrVideos";
import { selectListNews, selectLoading } from "./store/slice";

const ListNewsRecommend = () => {
  const listNews = useSelector(selectListNews);
  const loading = useSelector(selectLoading);

  return (
    <div className="mt-10">
      <ListNews
        loading={loading}
        header="Bạn cũng có thể thích"
        list={
          listNews.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.banner_image,
            category: item.news_category_value,
          })) as any
        }
      />
    </div>
  );
};

export default ListNewsRecommend;
