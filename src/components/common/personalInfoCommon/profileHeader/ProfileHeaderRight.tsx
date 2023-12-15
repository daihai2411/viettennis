import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";

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
          <div className="flex gap-10">
            <div className="">
              <div className="text-base md:text-lg font-medium">Chiều cao</div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {data?.height ? data?.height + "cm" : "--"}
              </div>
              <div className="text-base md:text-lg font-medium">Cân nặng</div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {data?.weight ? data?.weight + "kg" : "--"}
              </div>
              <div className="text-base md:text-lg font-medium">Giới tính</div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.gender)}
              </div>
            </div>
            <div>
              <div className="text-lg font-medium whitespace-nowrap">
                Chơi tennis từ năm
              </div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.play_since)}
              </div>
              <div className="text-lg font-medium whitespace-nowrap">
                Ngày sinh
              </div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.dob)}
              </div>
              <div className="text-lg font-medium whitespace-nowrap">
                Thông số kỹ thuật vợt
              </div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.racket_specs)}
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ProfileHeaderRight;
