"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

import profileService from "@/core/services/profile/ProfileServicee";
import { convertCamelCaseToLine } from "@/helpers/value";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import InputCustom from "../../common/InputCustom";
import { steps } from "../../constants";
import { schemaAdditionInformation } from "../../schema";
import { changeStep } from "../../store/slice";
import Address from "./Address";
import CheckRecaptcha from "./CheckRecaptcha";
import IdentifyCard from "./IdentifyCard";
import InfoAdvenced from "./InfoAdvenced";
import InfoBasic from "./InfoBasic";

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

const schemaValidation = () => Yup.object().shape(schemaAdditionInformation);

const AdditionalInformation = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onBlur",
    resolver: yupResolver(schemaValidation()) as any,
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      await profileService.updateInformation(convertCamelCaseToLine(data));
      dispatch(changeStep(steps.ADDITIONAL_POINTS));
    } catch (error: any) {
      setLoading(false);
      // ToastAntdError(error?.response?.data?.data?.error);
    }
  });

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
              <InfoBasic register={register} errors={errors} />
              <InfoAdvenced register={register} errors={errors} />
            </div>
            <div className="w-full">
              <InputCustom
                label="Đang mặc đồ thể thao của hãng nào?"
                register={register}
                errors={errors}
                placeholder="Đang mặc đồ thể thao của hãng nào?"
                keyInput="clothesBrand"
                required
              />
              <Address register={register} errors={errors} />
              <IdentifyCard register={register} errors={errors} />
              <CheckRecaptcha />
            </div>
          </div>
          <div className="text-black text-opacity-90 text-[13px] mb-3">
            *Lưu ý: Mọi thông tin của bạn sẽ được dùng để xác thực định danh
            trong mọi giải đấu của Viettennis
          </div>
          <Button
            type="submit"
            className="bg-green-common text-white mb-6 w-full"
          >
            Tiếp theo
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInformation;
