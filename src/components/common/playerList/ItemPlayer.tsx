import { ROUTERS } from "@/const/router";
import { checkEmptyVal } from "@/helpers/value";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const ItemPlayer = ({ item }) => {
  return (
    <Link
      href={ROUTERS.PLAYERS + "/" + item.id}
      className="mt-10 cursor-pointer"
    >
      <Card radius="none" shadow="none" className="w-full">
        <CardBody className="relative p-0 pt-[30%]">
          <div className="bg-green-common min-h-[82px] p-3 block text-white">
            {/* <div className="text-sm font-medium">SEED</div>
            <div className="text-lg font-bold">#1</div> */}
          </div>
          <div className="absolute top-[50%] left-[50%] w-[40%] -translate-x-1/2 -translate-y-1/2">
            <div className="aspect-square bg-[#e6e6e6] rounded-full ring-[6px] ring-white object-cover">
              <Image
                src={item?.avatar || "/empty.jpg"}
                alt="Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-[#e6e6e6] block py-[22px] mt-2">
          <div className="text-[#141414] text-[21px] font-semibold capitalize leading-[21px]">
            {checkEmptyVal(item?.full_name)}
          </div>
          <div className="text-[#767676] font-normal text-[13px] capitalize leading-[13px]">
            {item?.username && "@" + checkEmptyVal(item?.username)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ItemPlayer;
