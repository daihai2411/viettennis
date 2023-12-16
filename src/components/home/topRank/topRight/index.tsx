import { convertCamelCaseToLine } from "@/helpers/value";
import { AppDispatch } from "@/redux/store";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableTopRank from "../common/TableTopRank";
import Top1 from "../common/Top1";
import { selectLoading, selectTop1, selectTopOther } from "../store/slice";
import { getListRankPointThunk } from "../store/thunk";

const TopRank = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [tab, setTab] = useState(1);

  const top1 = useSelector(selectTop1);
  const loading = useSelector(selectLoading);
  const topOther = useSelector(selectTopOther);

  useEffect(() => {
    dispatch(
      getListRankPointThunk(
        convertCamelCaseToLine({
          paginate: 5,
          pointId: tab, //point id
        })
      )
    );
  }, [tab]);

  return (
    <div className="h-[800px] w-full rounded-lg">
      <Image src="/top-rank.png" alt="top rank" height={51} width={358} />
      {/* <div className="max-w-md mt-3 mb-4">
        <div className="flex h-5 items-center space-x-4 text-small justify-center">
          <div
            className={`cursor-pointer text-xl font-bold hover:text-green-common ${
              tab === 1 ? "text-green-common" : ""
            }`}
            onClick={() => setTab(1)}
          >
            Đôi
          </div>
          <Divider orientation="vertical" className="w-[2px] bg-[#767676]" />
          <div
            className={`cursor-pointer text-xl font-bold hover:text-green-common ${
              tab === 2 ? "text-green-common" : ""
            }`}
            onClick={() => setTab(2)}
          >
            Đơn
          </div>
        </div>
      </div> */}
      <Card
        isBlurred={false}
        shadow="none"
        radius="sm"
        className="max-w-[400px] border border-[#e6e6e6] mt-4"
      >
        <Top1 tab={tab} data={top1} loading={loading} />
        <TableTopRank tab={tab} listData={topOther} loading={loading} />
      </Card>
    </div>
  );
};

export default TopRank;
