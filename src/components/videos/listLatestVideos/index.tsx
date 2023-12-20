import ListNewsOrVideos from "@/components/common/listNewsOrVideos";
import { useSelector } from "react-redux";
import { selectListVideos, selectLoading } from "../store/slice";

const ListLatestVideos = () => {
  const loading = useSelector(selectLoading);
  const listVideos = useSelector(selectListVideos);

  return (
    <div className="mt-6">
      <ListNewsOrVideos
        header="Video mới nhất"
        loading={loading}
        isVideoPage
        list={
          listVideos.map((item) => ({
            id: item.id,
            title: item.title,
            image: item.thumbnail,
            href: item.video_url,
          })) as any
        }
      />
    </div>
  );
};

export default ListLatestVideos;
