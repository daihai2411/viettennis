import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";
import { BACK_HAND } from "../constants";

const ProfileHeaderRight = ({ data, loading = true }) => {
  return (
    <div className="w-[50%] border-l-4 border-white">
      <div className="w-[636px] h-full text-white pl-[43px] pt-[63px]">
        <Skeleton isLoaded={!loading}>
          <h1 className="text-[52px] leading-[52px] font-black mb-3">
            {checkEmptyVal(data?.full_name)}
          </h1>
        </Skeleton>
        <Skeleton isLoaded={!loading} className="mb-9 text-3xl">
          @{checkEmptyVal(data?.username)}
        </Skeleton>
        <>
          <div className="flex gap-6">
            <Skeleton isLoaded={!loading} className="">
              <div className="font-medium text-lg mb-1">Chiều cao</div>
              <div className="mb-2 text-3xl font-extrabold">
                {data?.height ? data?.height + "cm" : "--"}
              </div>

              <div className="mb-1 text-lg font-medium">Sở trường</div>
              <div className="font-medium text-[13px]">
                {data?.back_hand === BACK_HAND.SINGER
                  ? "Đấu đơn"
                  : data?.back_hand === BACK_HAND.DOUBLE
                  ? "Đấu đôi"
                  : "Đấu đơn và đấu đôi"}
              </div>
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <div className="font-medium text-lg mb-1">Ngày sinh</div>
              <div className="mb-2 text-3xl font-extrabold">
                {checkEmptyVal(data?.dob)}
              </div>

              <div className="mb-1 text-lg font-medium">Nơi sinh</div>
              <div className="font-medium text-[13px]">
                {data?.address
                  ? [
                      data?.address,
                      data?.ward_name,
                      data?.district_name,
                      data?.province_name,
                    ].join(", ")
                  : "--"}
              </div>
            </Skeleton>
            {/* <div >
            <div className="font-medium text-lg mb-1">Thông số vợt</div>
            <div className="mb-2 text-3xl font-extrabold">Image</div>
            <div className="font-medium text-[13px]">
              Head Extreme Team 2022
            </div>
          </div> */}
          </div>
        </>
        {/* <div className="mt-[29px] text-lg font-bold leading-[17.10px] mb-2">
          Huấn luyện viên tại
        </div>
        <div className="w-[166.96px] bg-white h-11 px-3 py-3 flex-col justify-start items-start inline-flex">
          <div className="flex">
            <span className="text-neutral-500 text-lg font-black uppercase leading-tight">
              Anton{" "}
            </span>
            <span className="text-black text-lg font-black uppercase leading-tight">
              Dubrov
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileHeaderRight;
