import { ROUTERS } from "@/const/router";
import { getColorCell } from "@/helpers/common";
import { checkEmptyVal } from "@/helpers/value";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ItemPlayerDouble = ({ item }) => {
  return (
    <div className="mt-2">
      <Card radius="none" shadow="none" className="w-full">
        <CardBody className="relative p-0 pt-[30%]">
          <div className="bg-green-common min-h-[100px] p-3 block text-white">
            <div className="text-sm font-medium">Tổng điểm</div>
            <div className="text-lg font-bold">{item?.total_point}</div>
          </div>
          <div className="absolute top-[50%] left-[75%] w-[35%] -translate-x-1/2 -translate-y-1/2">
            <div className="aspect-square bg-[#e6e6e6] rounded-full ring-2 ring-white object-cover">
              <Image
                src={item?.second_player?.avatar || "/player.png"}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="absolute top-[60%] left-[55%] w-[35%] -translate-x-1/2 -translate-y-1/2">
            <div className="aspect-square bg-[#e6e6e6] rounded-full ring-2 ring-white object-cover">
              <Image
                src={item?.first_player?.avatar || "/player.png"}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-[#e6e6e6] block py-[22px] mt-2">
          <Link
            href={ROUTERS.PLAYERS + "/" + item?.first_player?.id}
            className="border-solid border-b-3 hover:border-green-common border-[#e6e6e6] hover:text-green-common mb-1 line-clamp-1 text-[#141414] text-[21px] font-semibold capitalize"
          >
            {checkEmptyVal(item?.first_player?.full_name)}
          </Link>
          <div className="text-[#767676] flex item-center gap-1 font-normal text-[13px] capitalize leading-[13px]">
            <div
              className="font-black"
              style={{ color: getColorCell(item?.first_player?.rank_point_id) }}
            >
              {checkEmptyVal(item?.first_player?.rank_point)}
            </div>
            {" - "}
            {checkEmptyVal(item?.first_player?.province)}
          </div>
          <Link
            href={ROUTERS.PLAYERS + "/" + item?.second_player?.id}
            className="border-solid border-b-3 hover:border-green-common border-[#e6e6e6] hover:text-green-common mb-1 line-clamp-1 text-[#141414] text-[21px] font-semibold capitalize"
          >
            {checkEmptyVal(item?.second_player?.full_name)}
          </Link>
          <div className="text-[#767676] flex item-center gap-1 font-normal text-[13px] capitalize leading-[13px]">
            <div
              className="font-black"
              style={{
                color: getColorCell(item?.second_player?.rank_point_id),
              }}
            >
              {checkEmptyVal(item?.second_player?.rank_point)}
            </div>
            {" - "}
            {checkEmptyVal(item?.second_player?.province)}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ItemPlayerDouble;
