"use client";

import { useDispatch, useSelector } from "react-redux";
import ListNews from "../common/listNews";
import { newsList } from "./dummy";
import { selectCount } from "./store/slice";

const NewsModule = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto">
      <ListNews
        header="Latest News"
        list={newsList.map((item) => ({
          title: item.title,
          image: item.imageUrl,
          category: item.subtitle,
        })) as any}
      />
      <div className="grid grid-cols-4 gap-4"></div>
    </div>
    // <div>
    //   <button
    //     aria-label="Decrement value"
    //     onClick={() => dispatch(decrement())}
    //   >
    //     Decrement
    //   </button>
    //   <span>{count}</span>
    //   <button
    //     aria-label="Increment value"
    //     onClick={() => dispatch(increment())}
    //   >
    //     Increment
    //   </button>
    // </div>
  );
};

export default NewsModule;
