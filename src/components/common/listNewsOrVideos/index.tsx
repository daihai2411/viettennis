import { Spinner } from "@nextui-org/react";
import NewsOrVideoItem from "../newsOrVideoItem";

const ListNewsOrVideos = ({
  list = [],
  header = "",
  loading,
  isVideoPage = false,
}) => {
  return (
    <>
      <div className="mb-10 px-2 md:px-0 2xl:px-10">
        <div className="mb-6 pb-1 block border-b-2 border-green-common text-neutral-950 text-2xl font-bold">
          {header}
        </div>
        {loading ? (
          <Spinner className="flex justify-center" />
        ) : (
          <div className="gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-2">
            {list.map(
              (item: {
                id: number;
                title: string;
                image: string;
                category: string;
                href?: string;
              }) => (
                <NewsOrVideoItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  isVideoPage={isVideoPage}
                  href={item.href}
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ListNewsOrVideos;
