import VTRComponent from "@/components/common/VTRComponent";
import { Skeleton } from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilterTournament, selectLoadingFilter } from "../store/slice";

const FilterPoint = () => {
  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);

  const [params, setParams] = useState(0);

  if (loading) {
    return <Skeleton isLoaded={!loading} className="h-12" />;
  }

  return (
    <div
      className="flex lg:justify-center bg-white overflow-x-auto px-5"
      style={{ boxShadow: "0 2px 20px 0 hsla(0,0%,8%,.08)" }}
    >
      {data?.rankPoint &&
        data?.rankPoint.map((item) => (
          <>
            <div
              className={`${
                params === item.value
                  ? "border-green-common border-2 text-green-common"
                  : "border-white border-2"
              } cursor-pointer px-[12px] py-[8px] font-bold`}
              onClick={() => setParams(item.value)}
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
  );
};

export default FilterPoint;
