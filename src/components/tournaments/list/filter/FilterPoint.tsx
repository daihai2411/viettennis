import VTRComponent from "@/components/common/VTRComponent";
import { useAppDispatch } from "@/redux/hooks";
import { Skeleton } from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  changeListFilter,
  selectFilterTournament,
  selectListFilter,
  selectLoadingFilter,
} from "../store/slice";

const FilterPoint = () => {
  const dispatch = useAppDispatch();

  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);
  const listFilter = useSelector(selectListFilter);

  const [params, setParams] = useState(0);

  const handleClick = (value) => {
    setParams(value);
    dispatch(changeListFilter({ ...listFilter, rank_point: value }));
  };

  if (loading) {
    return <Skeleton isLoaded={!loading} className="h-12" />;
  }

  return (
    <div
      className="bg-white px-3"
      style={{ boxShadow: "0 2px 20px 0 hsla(0,0%,8%,.08)" }}
    >
      <div className="flex xl:justify-center overflow-x-auto">
        {data?.rankPoint &&
          data?.rankPoint.map((item) => (
            <>
              <div
                className={`${
                  params === item.value
                    ? "border-green-common border-2 text-green-common"
                    : "border-white border-2"
                } cursor-pointer px-[12px] py-[8px] font-bold`}
                onClick={() => handleClick(item.value)}
              >
                {item.value ? (
                  <VTRComponent level={item.name} />
                ) : (
                  <div className="whitespace-nowrap text-green-common">
                    {item.name}
                  </div>
                )}
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default FilterPoint;
