"use client";

import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectLoading, selectTournamentDetail } from "../store/slice";

const OverviewTournamentModule = () => {
  const loading = useSelector(selectLoading);
  const tournamentDetail = useSelector(selectTournamentDetail);
  console.log(tournamentDetail);

  return (
    <div className="container mx-auto px-14 mt-6">
      <Skeleton isLoaded={!loading}>
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            {checkEmptyVal(tournamentDetail?.name)}
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            {[
              tournamentDetail?.address,
              tournamentDetail?.ward_name,
              tournamentDetail?.district_name,
              tournamentDetail?.province_name,
            ].join(",")}
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ngày bắt đầu
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {checkEmptyVal(tournamentDetail?.start_date)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Ngày kết thúc
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {checkEmptyVal(tournamentDetail?.end_date)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Chi phí
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {checkEmptyVal(tournamentDetail?.total_prize)} VNĐ
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nhà tài trợ
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {checkEmptyVal(tournamentDetail?.sponsor)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nội dung thi đấu
              </dt>
              <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-100 rounded-md border border-gray-200"
                >
                  {tournamentDetail?.tournaments &&
                  tournamentDetail?.tournaments?.length ? (
                    tournamentDetail.tournaments.map((item, index) => (
                      <li
                        key={item.name + index}
                        className="flex items-center group cursor-pointer justify-between py-4 pl-4 pr-5 text-sm leading-6"
                      >
                        <div className="flex w-0 flex-1 items-center">
                          <div className="ml-4 flex min-w-0 flex-1 gap-2">
                            <span className="line-clamp-2 font-medium">
                              {item?.name}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Chi tiết
                          </a>
                        </div>
                      </li>
                    ))
                  ) : (
                    <>--</>
                  )}
                </ul>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Chi tiết
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {tournamentDetail?.note ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: tournamentDetail?.note }}
                  ></div>
                ) : (
                  <>--</>
                )}
              </dd>
            </div>
          </dl>
        </div>
      </Skeleton>
    </div>
  );
};

export default OverviewTournamentModule;
