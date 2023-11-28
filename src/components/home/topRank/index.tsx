import { convertCamelCaseToLine } from "@/helpers/value";
import { AppDispatch } from "@/redux/store";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Skeleton,
  User,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectTop1, selectTopOther } from "./store/slice";
import { getListRankPointThunk } from "./store/thunk";
import style from "./style.module.scss";

const TopRank = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [tab, setTab] = useState(1);

  const top1 = useSelector(selectTop1);
  const topOther = useSelector(selectTopOther);
  const loading = useSelector(selectLoading);

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
      <div className="max-w-md mt-1 mb-4">
        <div className="flex h-5 items-center space-x-4 text-small justify-center">
          <div
            className={`cursor-pointer text-xl font-bold hover:text-green-common ${
              tab === 1 ? "text-green-common" : ""
            }`}
            onClick={() => setTab(1)}
          >
            Đơn
          </div>
          <Divider orientation="vertical" className="w-[2px] bg-[#767676]" />
          <div
            className={`cursor-pointer text-xl font-bold hover:text-green-common ${
              tab === 2 ? "text-green-common" : ""
            }`}
            onClick={() => setTab(2)}
          >
            Đôi
          </div>
        </div>
      </div>
      <Card
        isBlurred={false}
        shadow="none"
        radius="sm"
        className="max-w-[400px] border border-[#e6e6e6]"
      >
        <CardHeader className="flex gap-3 justify-between">
          <div className="flex flex-col ml-2">
            <p className="text-neutral-900 text-2xl font-bold leading-relaxed">
              {tab === 1 ? "Đơn" : "Đôi"}
            </p>
            <p className="text-green-common text-[64px] mb-[10px] font-black leading-[64px] tracking-[4px]">
              #1
            </p>
            <p className="text-neutral-900 text-base font-normal leading-[17.12px]">
              Điểm
            </p>
            <Skeleton isLoaded={!loading}>
              <p className="text-green-common text-[34px] font-black leading-9 mb-2">
                {tab === 1 ? top1?.point_vtr : top1?.point_vtr_solo}
              </p>
            </Skeleton>
          </div>
          <Skeleton isLoaded={!loading}>
            <Image
              src={top1?.avatar || ""}
              alt="avatar"
              height={120}
              width={120}
            />
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="bg-[#E6E6E6] rounded-b-lg">
          <Skeleton isLoaded={!loading}>
            <div className="text-[34px] text-[#141414] font-extrabold">
              {top1?.name}
            </div>
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <div className="text-[#767676] text-2xl font-normal mb-6">
              {top1?.username ? "@" + top1?.username : ""}
            </div>
          </Skeleton>
        </CardBody>
        <CardFooter>
          <Skeleton isLoaded={!loading}>
            <table className={style.tablePoint}>
              <thead>
                <tr>
                  <th className="pb-2">Thứ hạng</th>
                  <th className="pb-2">Người chơi</th>
                  <th className="pb-2">Điểm</th>
                </tr>
              </thead>
              <tbody>
                {topOther.map((item, index) => (
                  <tr
                    key={item?.id}
                    className="border-b-1 border-[#E6E6E6] group cursor-pointer"
                  >
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="text-xl text-green-common font-black">
                          {index + 2}
                        </div>
                        <div className="text-neutral-500 text-[19px] font-black leading-3">
                          -
                        </div>
                      </div>
                    </td>
                    <td className="group-hover:underline group-hover:text-green-common">
                      <User
                        name={item?.name}
                        description={"@" + item?.username}
                        avatarProps={{
                          src: item?.avatar,
                          size: "sm",
                        }}
                      />
                    </td>
                    <td>
                      <div className="text-right text-green-common text-xl font-black leading-tight">
                        {tab === 1 ? top1?.point_vtr : top1?.point_vtr_solo}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Skeleton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TopRank;
