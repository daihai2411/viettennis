"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import { ToastError, ToastSuccess } from "@/components/common/Toast";
import profileService from "@/core/services/profile/ProfileService";
import { FORMAT, formatDateTime } from "@/helpers/datetime";
import { convertCamelCaseToLine } from "@/helpers/value";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import InputCustom from "../../common/InputCustom";
import { steps } from "../../constants";
import { schemaAdditionInformation } from "../../schema";
import { changeStep, selectEmail, selectPhoneNumber } from "../../store/slice";
import Address from "./Address";
import CheckRecaptcha from "./CheckRecaptcha";
import IdentifyCard from "./IdentifyCard";
import InfoAdvenced from "./InfoAdvenced";
import InfoBasic from "./InfoBasic";
import TermAndPolicy from "./TermAndPolicy";

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
  province: string | number;
  district: string | number;
  ward: string | number;
  captcha: string | undefined;
}

const schemaValidation = () => Yup.object().shape(schemaAdditionInformation);

const AdditionalInformation = () => {
  const dispatch = useDispatch();

  const phoneNumber = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmail);

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
    setValue,
  } = useForm<IFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onBlur",
    resolver: yupResolver(schemaValidation()) as any,
    defaultValues: {
      phone: phoneNumber,
      email: email,
    },
  });

  watch("province");
  watch("district");
  watch("ward");
  watch("phone");
  watch("captcha");

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const params = { ...data } as any;
      delete params.captcha;
      if (params?.dob) {
        params.dob = formatDateTime(params?.dob, FORMAT.DATE_SLASH);
      }
      if (params?.playSince) {
        params.playSince = formatDateTime(params?.playSince, FORMAT.YEAR);
      }
      if (params?.identifyDate) {
        params.identifyDate = formatDateTime(
          params?.identifyDate,
          FORMAT.DATE_SLASH
        );
      }
      const res = (await profileService.updateInformation(
        convertCamelCaseToLine(params)
      )) as any;
      if (res.success) {
        ToastSuccess(res?.message || "Cập nhật thông tin thành công");
        dispatch(changeStep(steps.ADDITIONAL_POINTS));
      }
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      ToastError(Object.values(error?.response?.data?.data).flat().join(","));
    }
  });

  useEffect(() => {
    if (phoneNumber) {
      setValue("phone", phoneNumber);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, [email]);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl bg-white p-8 rounded-2xl">
        <div className="flex justify-start mb-4">
          <Image src="/logo.svg" alt="logo" className="h-10" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4 mx-auto">
          Nhập các thông tin cá nhân
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex gap-6">
            <div className="w-full">
              <InfoBasic
                register={register}
                errors={errors}
                setValue={setValue}
              />
              <InfoAdvenced
                register={register}
                errors={errors}
                setValue={setValue}
              />
            </div>
            <div className="w-full">
              <InputCustom
                label="Đang mặc đồ thể thao của hãng nào?"
                register={register}
                errors={errors}
                placeholder="Đang mặc đồ thể thao của hãng nào?"
                keyInput="clothesBrand"
              />
              <Address
                register={register}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
              />
              <IdentifyCard
                register={register}
                errors={errors}
                setValue={setValue}
              />
              <CheckRecaptcha setValue={setValue} errors={errors} />
            </div>
          </div>
          <TermAndPolicy
            register={register}
            errors={errors}
            keyInput="termAndPolicy"
            setValue={setValue}
          />
          <div className="text-black text-opacity-90 text-[13px] mb-3">
            *Lưu ý: Mọi thông tin của bạn sẽ được dùng để xác thực định danh
            trong mọi giải đấu của Viettennis
          </div>
          <Button
            isLoading={loading}
            type="submit"
            className={`bg-green-common text-white mb-6 w-full`}
          >
            Tiếp theo
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInformation;
