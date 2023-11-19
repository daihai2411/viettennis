"use client";

import { ToastError, ToastSuccess } from "@/components/common/Toast";
import { ROUTERS } from "@/const/router";
import profileProxy from "@/core/proxies/profile/ProfileProxy";
import { AppDispatch } from "@/redux/store";
import { Button, Image, Spinner } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  selectListPersonalPoint,
  selectLoadingListPersonalPoint,
} from "../../store/slice";
import { getListPersonalPointCriteriaThunk } from "../../store/thunk";
import InputPoint from "./InputPoint";
import RowTotalPoints from "./RowTotalPoints";

interface IFormInput {
  fullName: string;
  email: string;
  dob: string;
  address: string;
  height: string;
  weight: string;
  backHand: number;
  playSince: string;
  racketSpecs: string;
  shoesBrand: string;
  clothesBrand: string;
  phone: string;
  identifyId: string;
  identifyDate: string;
  identifyAddress: string;
}

const AdditionalPoints = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const [loadingBtn, setLoadingBtn] = useState(false);

  const loading = useSelector(selectLoadingListPersonalPoint);
  const listPersonalPoint = useSelector(selectListPersonalPoint);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<IFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoadingBtn(true);
    try {
      await profileProxy
        .updatePersonalPoint(data)
        .then((data: any) => {
          ToastSuccess(data?.message || "Cập nhật thông tin thành công");
        })
        .catch(() => {});
      router.push(ROUTERS.HOME);
      setLoadingBtn(false);
    } catch (error: any) {
      setLoadingBtn(false);
      ToastError(
        Object.values(error?.response?.data?.data).flat().join(",") || "Lỗi"
      );
    }
  });

  useEffect(() => {
    dispatch(getListPersonalPointCriteriaThunk({}));
  }, []);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      {loading ? (
        <Spinner />
      ) : (
        <div className="sm:mx-auto sm:w-full sm:max-w-2xl bg-white p-8 rounded-2xl">
          <div className="flex justify-start mb-4">
            <Image src="/logo.svg" alt="logo" className="h-10" />
          </div>
          <div className="font-medium text-2xl text-green-common1 mb-4 mx-auto">
            Nhập điểm số
          </div>
          <form onSubmit={onSubmit}>
            {listPersonalPoint && listPersonalPoint.length
              ? listPersonalPoint.map(
                  (item: {
                    code: string;
                    id: number;
                    percent: number;
                    title: string;
                  }) => (
                    <>
                      <InputPoint
                        key={item.id}
                        itemInput={item}
                        register={register}
                        errors={errors}
                        placeholder="Nhập điểm"
                        type="number"
                        isShowQuickSelect={item.id <= 4}
                        setValueForm={setValue}
                      />
                    </>
                  )
                )
              : null}
            <RowTotalPoints />
            <div className="text-black text-opacity-90 text-[13px] mb-3">
              *Lưu ý: Mọi thông tin của bạn sẽ được dùng để xác thực định danh
              trong mọi giải đấu của Viettennis
            </div>
            <Button
              isLoading={loadingBtn}
              type="submit"
              className="bg-green-common text-white mb-6 w-full"
            >
              Hoàn thành
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdditionalPoints;
