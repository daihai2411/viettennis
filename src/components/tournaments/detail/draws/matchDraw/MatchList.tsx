import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { changeMatchDrawActive } from "../slice";
import MatchItem from "./matchItem/MatchItem";

const MatchList = ({ listData, className = "", noSpacing = false }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleMatchDrawActive = (val) => {
    dispatch(changeMatchDrawActive(val));
  };

  return (
    <div
      className={`w-full sm:w-[460px] h-auto flex-col pt-3 bg-gradient-to-b from-[#fafafa] to-[#fff] px-1 ${className}`}
    >
      <div
        className={`${
          noSpacing ? "justify-start" : "justify-around"
        } flex flex-col h-full`}
      >
        {listData && listData.length
          ? listData.map((item, index) => (
              <MatchItem
                changeMatchDrawActive={handleMatchDrawActive}
                item={item}
                key={index}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default MatchList;
