import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";
import { BACK_HAND } from "../constants";

const ProfileHeaderRight = ({ data, loading = true }) => {
  return (
    <div className="w-full md:w-[50%] border-none md:border-solid md:border-l-4 border-white">
      <div className="xl:w-[636px] w-auto h-full text-white p-4 md:pl-[36px] md:pt-[36px]">
        <Skeleton isLoaded={!loading}>
          <h1 className="text-4xl leading-9 sm:text-[52px] sm:leading-[52px] font-black mb-3">
            {checkEmptyVal(data?.full_name)}
          </h1>
        </Skeleton>
        <Skeleton
          isLoaded={!loading}
          className="mb-6 sm:mb-9 text-2xl sm:text-3xl"
        >
          @{checkEmptyVal(data?.username)}
        </Skeleton>
        <>
          <div className="flex gap-6">
            <Skeleton isLoaded={!loading} className="">
              <div className="mb-1 text-base md:text-lg font-medium">
                Chiều cao
              </div>
              <div className="mb-2 text-2xl md:text-3xl font-extrabold">
                {data?.height ? data?.height + "cm" : "--"}
              </div>

              <div className="mb-1 text-base md:text-lg font-medium">
                Sở trường
              </div>
              <div className="font-medium text-[13px]">
                {!data?.back_hand
                  ? "--"
                  : Number(data?.back_hand) === BACK_HAND.SINGER
                  ? "Đấu đơn"
                  : Number(data?.back_hand) === BACK_HAND.DOUBLE
                  ? "Đấu đôi"
                  : "Đấu đơn và đấu đôi"}
              </div>

              <div className="mb-1 mt-4 text-lg font-medium">
                Chơi tennis từ năm
              </div>
              <div className="font-medium text-[13px]">
                {checkEmptyVal(data?.play_since)}
              </div>
            </Skeleton>
            <Skeleton isLoaded={!loading}>
              <div className="mb-1 text-base md:text-lg font-medium">
                Ngày sinh
              </div>
              <div className="mb-2 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.dob)}
              </div>

              <div className="mb-1 text-base md:text-lg font-medium">
                Nơi sinh
              </div>
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
              <div className="mb-1 mt-4 text-lg font-medium">
                Thông số kỹ thuật vợt
              </div>
              <div className="font-medium text-[13px]">
                {checkEmptyVal(data?.racket_specs)}
              </div>
            </Skeleton>
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
