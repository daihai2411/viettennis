"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Image } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import InputCustom from "../common/InputCustom";
import { schemaAdditionInformation } from "../schema";

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

const AdditionalInformation = () => {
  const schemaValidation = () => Yup.object().shape(schemaAdditionInformation);

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

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl bg-white p-8 rounded-2xl">
        <div className="flex justify-start mb-4">
          <Image src="/logo.svg" alt="logo" className="h-10" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4 mx-auto">
          Nhập các thông tin cá nhân
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
            <div className="w-full">
              <InputCustom
                label={
                  <div className="flex gap-1">
                    Email
                    <div className="text-red-600">*</div>
                  </div>
                }
                register={register}
                errors={errors}
                placeholder="Nhập địa chỉ email"
                keyInput="email"
                type="email"
              />
              <InputCustom
                label={
                  <div className="flex gap-1">
                    Họ và tên
                    <div className="text-red-600">*</div>
                  </div>
                }
                register={register}
                errors={errors}
                placeholder="Nhập họ và tên"
                keyInput="fullName"
                type="text"
              />
              <InputCustom
                label={
                  <div className="flex gap-1">
                    Sinh ngày
                    <div className="text-red-600">*</div>
                  </div>
                }
                register={register}
                errors={errors}
                placeholder="Sinh ngày"
                keyInput="dob"
              />
              <InputCustom
                label="Số điện thoại"
                register={register}
                errors={errors}
                placeholder="Nhập số điện thoại"
                keyInput="phone"
              />
              <InputCustom
                label="Chiều cao"
                register={register}
                errors={errors}
                placeholder="Điền số. Ví dụ: 165, 170, ..."
                keyInput="height"
              />
              <InputCustom
                label="Cân nặng"
                register={register}
                errors={errors}
                placeholder="Điền số. Ví dụ: 45, 50, 60, ..."
                keyInput="weight"
              />
              <InputCustom
                label="Bạn thích đánh đơn hay đôi?"
                register={register}
                errors={errors}
                placeholder="Nhập thể loại bạn thích"
                keyInput="backHand"
              />
              <InputCustom
                label="Bắt đầu chơi tennis từ năm nào?"
                register={register}
                errors={errors}
                placeholder="Điền chính xác số năm. Vd: 2000, 2012, 2011"
                keyInput="playSince"
              />
            </div>
            <div className="w-full">
              <InputCustom
                label="Thông số kỹ thuật của vợt"
                register={register}
                errors={errors}
                placeholder="Nhập độ nặng, mặt vợt, độ rung đầu vợt"
                keyInput="racketSpecs"
              />
              <InputCustom
                label="Giày tennis đang đi của hãng nào?"
                register={register}
                errors={errors}
                placeholder="Giày tennis đang đi của hãng nào?"
                keyInput="shoesBrand"
              />
              <InputCustom
                label="Đang mặc đồ thể thao của hãng nào?"
                register={register}
                errors={errors}
                placeholder="Đang mặc đồ thể thao của hãng nào?"
                keyInput="clothesBrand"
              />
              <InputCustom
                label="Khu vực sinh sống"
                register={register}
                errors={errors}
                placeholder="Khu vực sinh sống"
                keyInput="address"
              />
              <InputCustom
                label="CMT/CCCD"
                register={register}
                errors={errors}
                placeholder="Nhập CMT/CCCD"
                keyInput="identifyId"
              />
              <InputCustom
                label="Ngày cấp"
                register={register}
                errors={errors}
                placeholder="Ngày cấp"
                keyInput="identifyDate"
              />
              <InputCustom
                label="Nơi cấp"
                register={register}
                errors={errors}
                placeholder="Nơi cấp"
                keyInput="identifyAddress"
              />
              <InputCustom
                label="Xác thực"
                register={register}
                errors={errors}
                placeholder="Xác thực GG Verify V2"
                keyInput="confirmPassword"
              />
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
