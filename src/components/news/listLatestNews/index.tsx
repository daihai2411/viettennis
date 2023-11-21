import ListNews from "@/components/common/listNews";
import { useSelector } from "react-redux";
import { selectListNews, selectLoading } from "../store/slice";

const ListLatestNews = () => {
  const loading = useSelector(selectLoading);
  const listNews = useSelector(selectListNews);

  return (
    <div className="mt-3">
      <ListNews
        header="Tin mới nhất"
        loading={loading}
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

export default ListLatestNews;
