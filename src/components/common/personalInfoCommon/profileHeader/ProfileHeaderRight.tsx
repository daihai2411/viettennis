import { ROUTERS } from "@/const/router";
import { checkEmptyVal } from "@/helpers/value";
import { Button, Skeleton } from "@nextui-org/react";
import Link from "next/link";

const ProfileHeaderRight = ({ data, loading = true, isUserLogged }) => {
  return (
    <div className="w-full md:w-[50%] border-none md:border-solid md:border-l-4 border-white">
      <div className="xl:w-[636px] w-auto h-full text-white p-4 md:pl-[36px] md:pt-[36px]">
        <Skeleton isLoaded={!loading}>
          <h1
            title={data?.full_name}
            className="text-4xl leading-9 sm:text-[52px] sm:leading-[60px] line-clamp-1 font-black mb-3"
          >
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
              <div className="text-base md:text-lg font-medium whitespace-nowrap">
                Chơi tennis từ năm
              </div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.play_since)}
              </div>
              <div className="text-base md:text-lg font-medium whitespace-nowrap">
                Ngày sinh
              </div>
              <div className="mb-4 text-2xl md:text-3xl font-extrabold">
                {checkEmptyVal(data?.dob)}
              </div>
              <div className="text-base md:text-lg font-medium whitespace-nowrap">
                Thông số kỹ thuật vợt
              </div>
              <div
                title={data?.racket_specs}
                className="mb-4 text-2xl line-clamp-1 md:text-3xl font-extrabold"
              >
                {checkEmptyVal(data?.racket_specs)}
              </div>
            </div>
          </div>
          {isUserLogged && (
            <Link href={ROUTERS.PERSONAL_INFO_UPDATE}>
              <Button
                radius="full"
                size="sm"
                className="bg-white text-green-common border border-green-common"
              >
                Cập nhật thông tin cá nhân
              </Button>
            </Link>
          )}
        </>
      </div>
    </div>
  );
};

export default ProfileHeaderRight;
