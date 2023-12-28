import ListNewsOrVideos from "@/components/common/listNewsOrVideos";
import { useSelector } from "react-redux";
import {
  selectListNewsInEvent,
  selectLoadingListNewsInEvent,
} from "../store/slice";

const ListNewsInEvent = () => {
  const loading = useSelector(selectLoadingListNewsInEvent);
  const listNews = useSelector(selectListNewsInEvent);

  return (
    <div className="mt-10 lg:mt-20">
      <ListNewsOrVideos
        loading={loading}
        list={
          listNews.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.banner_image,
          })) as any
        }
        header="Bài viết của giải đấu"
      />
    </div>
  );
};

export default ListNewsInEvent;
