"use client";

import { formatVal } from "@/helpers/value";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import useUserProfile from "../common/hooks/useUserProfile";

const PersonalInfoModule = () => {
  const { dataProfile } = useUserProfile();

  const getStatus = (status: number) => {
    if (status) {
      return <FaCheckCircle color="#28a745" />;
    } else {
      return <FaExclamationCircle color="#ffc107" />;
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Thông tin cá nhân
          </h3>
          <div className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Trạng thái tài khoản
            <ul>
              <li className="flex items-center gap-1">
                {getStatus(dataProfile?.is_phone_verified)} Xác thực OTP
              </li>
              <li className="flex items-center gap-1">
                {getStatus(dataProfile?.personal_info_updated)} Điền thông tin
                cá nhân
              </li>
              <li className="flex items-center gap-1">
                {getStatus(dataProfile?.personal_point_updated)} Điền thông tin
                điểm
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Tên đăng nhập
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {formatVal(dataProfile?.username)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Họ và tên
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {formatVal(dataProfile?.fullName)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Số điện thoại
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {formatVal(dataProfile?.phone)}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Địa chỉ email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {formatVal(dataProfile?.email)}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoModule;
