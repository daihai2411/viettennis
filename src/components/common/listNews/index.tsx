import { Spinner } from "@nextui-org/react";
import NewsItem from "../newsItem";

const ListNews = ({ list = [], header = "", loading }) => {
  return (
    <div className="mb-10">
      <div className="mb-6 block border-b-2 border-green-common text-neutral-950 text-2xl font-bold">
        {header}
      </div>
      {loading ? (
        <Spinner className="flex justify-center" />
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {list.map(
            (item: {
              id: number;
              title: string;
              image: string;
              category: string;
            }) => (
              <NewsItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                category={item.category}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default ListNews;
