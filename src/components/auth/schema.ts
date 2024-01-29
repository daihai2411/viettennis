import { getMessSchema } from "@/helpers/schema";
import * as Yup from "yup";

export const schemaLogin = {
  username: Yup.string()
    .required(
      getMessSchema({ type: "MS_01", fieldName: "Tên tài khoản/ email" })
    )
    .max(
      256,
      getMessSchema({
        type: "MS_03_03",
        fieldName: "tên tài khoản/ email",
        max: 256,
      })
    ),
  password: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Mật khẩu" }))
    .min(
      8,
      getMessSchema({
        type: "MS_03_01",
        fieldName: "mật khẩu",
        min: 8,
        max: 35,
      })
    )
    .max(
      35,
      getMessSchema({
        type: "MS_03_01",
        fieldName: "mật khẩu",
        min: 8,
        max: 35,
      })
    ),
  // .matches(
  //   /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
  //   getMessSchema({ type: "MS_11" })
  // ),
};

export const schemaRegister = {
  username: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Tên đăng nhập" }))
    .max(
      100,
      getMessSchema({ type: "MS_03_03", fieldName: "tên đăng nhập", max: 100 })
    )
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Tên đăng nhập không được chứa khoảng trắng, ký tự đặc biệt hoặc ký tự tiếng Việt."
    ),
  password: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Mật khẩu" }))
    .min(
      8,
      getMessSchema({
        type: "MS_03_01",
        fieldName: "mật khẩu",
        min: 8,
        max: 35,
      })
    )
    .max(
      35,
      getMessSchema({
        type: "MS_03_01",
        fieldName: "mật khẩu",
        min: 8,
        max: 35,
      })
    )
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
      getMessSchema({ type: "MS_11" })
    ),
  confirmPassword: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Nhập lại mật khẩu" }))
    .oneOf(
      [Yup.ref("password"), ""],
      getMessSchema({ type: "MS_12", fieldName: "Nhập lại mật khẩu" })
    ),
  phone: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Số điện thoại" }))
    .length(
      10,
      getMessSchema({
        type: "MS_03_02",
        fieldName: "số điện thoại",
        length: 10,
      })
    )
    .matches(/^0\d{9}$/, getMessSchema({ type: "MS_02_01" })),
  email: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Email" }))
    .max(256, getMessSchema({ type: "MS_03_03", fieldName: "email", max: 256 }))
    .test({
      message: getMessSchema({ type: "MS_02_01" }),
      test: (value: any) => {
        if (!value) return true;
        const valueTest = (value || "").trim();
        const email = /^[\w-\\.-\\+]{4,64}@([\w-]+\.)+[\w-]{1,190}$/gi;
        return email.test(valueTest);
      },
    }),
};

export const schemaAdditionInformation = {
  email: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Email" }))
    .max(256, getMessSchema({ type: "MS_03_03", fieldName: "email", max: 256 }))
    .test({
      message: getMessSchema({ type: "MS_02_01" }),
      test: (value: any) => {
        if (!value) return true;
        const valueTest = (value || "").trim();
        const email = /^[\w-\\.-\\+]{4,64}@([\w-]+\.)+[\w-]{1,190}$/gi;
        return email.test(valueTest);
      },
    }),
  fullName: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Họ và tên" }))
    // .matches(
    //   /[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u,
    //   getMessSchema({ type: "MS_02_02", fieldName: "Họ và tên" })
    // )
    .max(
      100,
      getMessSchema({ type: "MS_03_03", fieldName: "họ và tên", max: 100 })
    ),
  username: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Tên đăng nhập" }))
    .max(
      100,
      getMessSchema({ type: "MS_03_03", fieldName: "tên đăng nhập", max: 100 })
    ),
  // .matches(
  //   /^[a-zA-Z0-9]+$/,
  //   "Tên đăng nhập không được chứa khoảng trắng, ký tự đặc biệt hoặc ký tự tiếng Việt."
  // ),
  dob: Yup.string().required(
    getMessSchema({ type: "MS_01", fieldName: "Ngày sinh" })
  ),
  phone: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Số điện thoại" }))
    .length(
      10,
      getMessSchema({
        type: "MS_03_02",
        fieldName: "số điện thoại",
        length: 10,
      })
    )
    .matches(/^0\d{9}$/, getMessSchema({ type: "MS_02_01" })),
  height: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .min(0, "Định dạng dữ liệu sai (ví dụ: 165)")
    .nullable(),
  weight: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .min(0, "Định dạng dữ liệu sai (ví dụ: 50)")
    .nullable(),
  backHand: Yup.string().nullable(),
  playSince: Yup.string().nullable(),
  racketSpecs: Yup.string().nullable(),
  shoesBrand: Yup.string().nullable(),
  clothesBrand: Yup.string().nullable(),
  address: Yup.string().nullable(),
  ward: Yup.string().required(
    getMessSchema({ type: "MS_01", fieldName: "Tỉnh/Thành phố" })
  ),
  district: Yup.string().required(
    getMessSchema({ type: "MS_01", fieldName: "Quận/Huyện" })
  ),
  province: Yup.string().required(
    getMessSchema({ type: "MS_01", fieldName: "Xã/Phường" })
  ),
  gender: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Giới tính" }))
    .nullable(),
  // identifyId: Yup.string()
  //   .required(getMessSchema({ type: "MS_01", fieldName: "Số CCCD" }))
  //   .length(
  //     12,
  //     getMessSchema({
  //       type: "MS_03_02",
  //       fieldName: "số CCCD",
  //       length: 12,
  //     })
  //   ),
  // identifyDate: Yup.string().required(
  //   getMessSchema({ type: "MS_01", fieldName: "Ngày cấp" })
  // ),
  // identifyAddress: Yup.string().required(
  //   getMessSchema({ type: "MS_01", fieldName: "Nơi cấp" })
  // ),
  termAndPolicy: Yup.bool()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Điều khoản và chính sách quyền riêng tư",
      })
    )
    .oneOf(
      [true],
      getMessSchema({
        type: "MS_01",
        fieldName: "Điều khoản và chính sách quyền riêng tư",
      })
    ),
  captcha: Yup.string().required(
    getMessSchema({ type: "MS_01", fieldName: "Xác thực" })
  ),
};

export const schemaSentInfo = {
  username: Yup.string()
    .required(getMessSchema({ type: "MS_01", fieldName: "Email" }))
    .max(256, getMessSchema({ type: "MS_03_03", fieldName: "email", max: 256 }))
    .test({
      message: getMessSchema({ type: "MS_02_01" }),
      test: (value: any) => {
        if (!value) return true;
        const valueTest = (value || "").trim();
        const email = /^[\w-\\.-\\+]{4,64}@([\w-]+\.)+[\w-]{1,190}$/gi;
        return email.test(valueTest);
      },
    }),
};

export const schemaRestorePass = {
  password: Yup.string()
    .required("Vui lòng nhập mật khẩu để đăng ký")
    .min(8, "Mật khẩu cần chứa từ 8 – 35 ký tự, vui lòng nhập giá trị hợp lệ")
    .max(35, "Mật khẩu cần chứa từ 8 – 35 ký tự, vui lòng nhập giá trị hợp lệ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*`])[A-Za-z\d!@#$%^&*`]+$/,
      "Mật khẩu cần chứa tối thiểu 1 ký tự viết hoa ,1 ký tự viết thường, 1 chữ số"
    ),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Mật khẩu xác nhận không trùng khớp, vui lòng nhập đúng giá trị mật khẩu đã tạo."
  ),
};

export const schemaAdditionPoint = {
  back_hand: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({ type: "MS_01", fieldName: "Thuận tay (Fore-hand)" })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Thuận tay (Fore-hand)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Thuận tay (Fore-hand)",
        min: 500,
        max: 1200,
      })
    ),
  fore_hand: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({ type: "MS_01", fieldName: "Trái tay (Back-hand)" })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Trái tay (Back-hand)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Trái tay (Back-hand)",
        min: 500,
        max: 1200,
      })
    ),
  service: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({ type: "MS_01", fieldName: "Giao bóng (Service)" })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Giao bóng (Service)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Giao bóng (Service)",
        min: 500,
        max: 1200,
      })
    ),
  service_return: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Trả giao bóng (Service return)",
      })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Trả giao bóng (Service return)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Trả giao bóng (Service return)",
        min: 500,
        max: 1200,
      })
    ),
  volley_smash: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Đánh bóng trên lưới (Volley & Smash)",
      })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Đánh bóng trên lưới (Volley & Smash)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Đánh bóng trên lưới (Volley & Smash)",
        min: 500,
        max: 1200,
      })
    ),
  strategy: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Chiến thuật/ Lối chơi (Strategy)",
      })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Chiến thuật/ Lối chơi (Strategy)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Chiến thuật/ Lối chơi (Strategy)",
        min: 500,
        max: 1200,
      })
    ),
  experience_psychology: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Kinh nghiệm/ Tâm lý thi đấu (Experience & Psychology)",
      })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Kinh nghiệm/ Tâm lý thi đấu (Experience & Psychology)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Kinh nghiệm/ Tâm lý thi đấu (Experience & Psychology)",
        min: 500,
        max: 1200,
      })
    ),
  physical: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required(
      getMessSchema({
        type: "MS_01",
        fieldName: "Thể lực (Physical)",
      })
    )
    .min(
      500,
      getMessSchema({
        type: "MS_04",
        fieldName: "Thể lực (Physical)",
        min: 500,
        max: 1200,
      })
    )
    .max(
      1200,
      getMessSchema({
        type: "MS_04",
        fieldName: "Thể lực (Physical)",
        min: 500,
        max: 1200,
      })
    ),
};
