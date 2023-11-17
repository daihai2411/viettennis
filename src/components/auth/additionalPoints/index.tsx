"use client";

import { Button, Image } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputPoint from "./InputPoint";

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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({
    mode: "onBlur",
    shouldFocusError: false,
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-[#F2F2F2]">
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl bg-white p-8 rounded-2xl">
        <div className="flex justify-start mb-4">
          <Image src="/logo.svg" alt="logo" className="h-10" />
        </div>
        <div className="font-medium text-2xl text-green-common1 mb-4 mx-auto">
          Nhập điểm số
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputPoint
            label="Thuận tay (FORE-HAND)"
            register={register}
            errors={errors}
            placeholder="Nhập địa chỉ email"
            keyInput="email"
            type="email"
          />
          <InputPoint
            label="Trái tay (BACK-HAND)"
            register={register}
            errors={errors}
            placeholder="Nhập họ và tên"
            keyInput="fullName"
            type="text"
          />
          <InputPoint
            label="Giao bóng (SERVICE)"
            register={register}
            errors={errors}
            placeholder="Sinh ngày"
            keyInput="dob"
          />
          <InputPoint
            label="Trả giao bóng (SERVICE RETURN)"
            register={register}
            errors={errors}
            placeholder="Nhập số điện thoại"
            keyInput="phone"
          />
          <InputPoint
            label="Đánh bóng trên lưới (VOLLEY VÀ SMASH)"
            register={register}
            errors={errors}
            placeholder="Điền số. Ví dụ: 165, 170, ..."
            keyInput="height"
          />
          <InputPoint
            label="Chiến thuật/lối chơi (STRATEGY)"
            register={register}
            errors={errors}
            placeholder="Điền số. Ví dụ: 45, 50, 60, ..."
            keyInput="weight"
          />
          <InputPoint
            label="Kinh nghiệm/tâm lý thi đấu"
            register={register}
            errors={errors}
            placeholder="Nhập thể loại bạn thích"
            keyInput="backHand"
          />
          <InputPoint
            label="Thể lực (PHYSICAL)"
            register={register}
            errors={errors}
            placeholder="Điền chính xác số năm. Vd: 2000, 2012, 2011"
            keyInput="playSince"
          />
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

export default AdditionalPoints;
