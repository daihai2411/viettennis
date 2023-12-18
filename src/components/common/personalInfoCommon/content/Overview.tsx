import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";

const Overview = ({ data, loading }) => {
  const listInfoPersonal = [
    { title: "Số điện thoại", value: data?.phone, key: "phone" },
    { title: "Địa chỉ email", value: data?.email, key: "email" },
    { title: "Sở trường", value: data?.back_hand, key: "back_hand" },
    {
      title: "Hãng giày tennis bạn đi",
      value: data?.shoes_brand,
      key: "shoes_brand",
    },
    {
      title: "Hãng đồ thể thao bạn mặc",
      value: data?.clothes_brand,
      key: "clothes_brand",
    },
    {
      title: "CMT/CCCD",
      value: data?.identify_id,
      key: "identify_id",
    },
    {
      title: "Ngày cấp",
      value: data?.identify_date,
      key: "identify_date",
    },
    {
      title: "Nơi cấp",
      value: data?.identify_address,
      key: "identify_address",
    },
    {
      title: "Nơi sinh",
      value: data?.address
        ? [
            data?.address,
            data?.ward_name,
            data?.district_name,
            data?.province_name,
          ].join(", ")
        : data?.ward_name
        ? [data?.ward_name, data?.district_name, data?.province_name].join(", ")
        : "--",
      key: "address",
    },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-10 block lg:flex lg:gap-10">
          <div className="w-full lg:w-[50%] mb-5 lg:mb-0">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                Thông tin cá nhân
              </h3>
            </div>
            <Skeleton
              isLoaded={!loading}
              className="mt-6 border-t border-gray-100"
            >
              <dl className="divide-y divide-gray-100">
                {listInfoPersonal.map((item) => (
                  <div
                    key={item.key}
                    className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0"
                  >
                    <dt className="text-lg font-medium leading-6 text-gray-900">
                      {item?.title}
                    </dt>
                    <dd className="mt-1 text-lg leading-6 text-gray-700 sm:mt-0 flex justify-end">
                      {checkEmptyVal(item.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            </Skeleton>
          </div>
          <div className="w-full lg:w-[50%] h-auto">
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">
                Điểm cá nhân
              </h3>
            </div>
            <Skeleton
              isLoaded={!loading}
              className="mt-6 border-t border-gray-100"
            >
              <dl className="divide-y divide-gray-100">
                {data?.personal_points &&
                  data?.personal_points.map(
                    (item: { code: number; title: string; point: number }) => (
                      <div
                        key={item?.code}
                        className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0"
                      >
                        <dt className="text-lg font-medium leading-6 col-span-2 text-gray-900">
                          {item?.title}
                        </dt>
                        <dd className="mt-1 text-lg leading-6 text-gray-700 flex justify-end sm:mt-0">
                          {checkEmptyVal(item?.point)}
                        </dd>
                      </div>
                    )
                  )}
              </dl>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
