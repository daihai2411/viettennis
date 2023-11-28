import { ROUTERS } from "@/const/router";
import { Card } from "@nextui-org/react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import TableTopRank from "../common/TableTopRank";
import Top1 from "../common/Top1";
import { RANK } from "../constants";
import { selectLoading, selectTop1, selectTopOther } from "../store/slice";

const TopRankBottom = () => {
  const top1 = useSelector(selectTop1);
  const loading = useSelector(selectLoading);
  const topOther = useSelector(selectTopOther);

  return (
    <div className="mt-6">
      <div className="mb-6 pb-1 border-b-2 border-green-common text-neutral-950 text-2xl font-bold flex justify-between items-center">
        Viettennis xếp hạng
        <Link href={ROUTERS.RANKINGS.path} className="flex items-center">
          <div className="font-medium text-sm flex items-center gap-1 hover:text-green-common cursor-pointer">
            Xem thêm <FaChevronRight size={12} />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          isBlurred={false}
          shadow="none"
          radius="sm"
          className="border border-[#e6e6e6]"
        >
          <Top1 tab={RANK.SINGLES} data={top1} loading={loading} />
          <TableTopRank
            tab={RANK.SINGLES}
            listData={topOther}
            loading={loading}
          />
        </Card>
        <Card
          isBlurred={false}
          shadow="none"
          radius="sm"
          className="border border-[#e6e6e6]"
        >
          <Top1 tab={RANK.DOUBLES} data={top1} loading={loading} />
          <TableTopRank
            tab={RANK.DOUBLES}
            listData={topOther}
            loading={loading}
          />
        </Card>
      </div>
    </div>
  );
};

export default TopRankBottom;
