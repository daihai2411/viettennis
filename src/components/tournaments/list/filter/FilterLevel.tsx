import VTRComponent from "@/components/common/VTRComponent";
import { Skeleton } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectFilterTournament, selectLoadingFilter } from "../store/slice";

const FilterPoint = () => {
  const loading = useSelector(selectLoadingFilter);
  const data = useSelector(selectFilterTournament);

  if (loading) {
    return <Skeleton isLoaded={!loading} className="h-12" />;
  }

  return (
    <div
      className="flex lg:justify-center bg-white overflow-x-auto"
      style={{ boxShadow: "0 2px 20px 0 hsla(0,0%,8%,.08)" }}
    >
      {data?.rankPoint &&
        data?.rankPoint.map((item) => (
          <>
            <div
              className={`${
                item.active
                  ? "border-green-common border-2 text-green-common"
                  : ""
              } cursor-pointer px-[14px] py-[10px] font-bold`}
            >
              <VTRComponent level={item.value} />
            </div>
          </>
        ))}
    </div>
  );
};

export default FilterPoint;
