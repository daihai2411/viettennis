import { CardBody, CardHeader, Divider, Skeleton } from "@nextui-org/react";
import Image from "next/image";

const Top1 = ({ tab, data, loading = false }) => {
  return (
    <>
      <div className="group cursor-pointer">
        <CardHeader className="flex gap-3 justify-between">
          <div className="flex flex-col ml-2">
            <p className="text-neutral-900 text-2xl font-bold">
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
                {tab === 1 ? data?.point_vtr : data?.point_vtr_solo}
              </p>
            </Skeleton>
          </div>
          <Skeleton isLoaded={!loading}>
            {data?.avatar && (
              <Image src={data?.avatar} alt="avatar" height={120} width={120} />
            )}
          </Skeleton>
        </CardHeader>
        <Divider />
        <CardBody className="bg-[#E6E6E6] rounded-b-lg">
          <Skeleton isLoaded={!loading}>
            <div className="text-[34px] text-[#141414] font-semibold ml-2 group-hover:underline">
              {data?.name}
            </div>
          </Skeleton>
          <Skeleton isLoaded={!loading}>
            <div className="text-[#767676] text-2xl font-normal mb-2 ml-2">
              {data?.username ? "@" + data?.username : ""}
            </div>
          </Skeleton>
        </CardBody>
      </div>
    </>
  );
};

export default Top1;
