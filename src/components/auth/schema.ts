import * as Yup from "yup";

export const schemaLogin = {
  username: Yup.string()
    .required("Vui lòng nhập họ tên tài khoản/ email để đăng nhập")
    .max(256, "Tối đa 256 ký tự, vui lòng nhập giá trị hợp lệ."),
  password: Yup.string()
    .required("Vui lòng nhập mật khẩu để đăng nhập")
    .max(35, "Tối đa 100 ký tự, vui lòng nhập giá trị hợp lệ."),
};

export const schemaRegister = {
  username: Yup.string()
    .required("Vui lòng nhập họ và tên để đăng ký")
    .max(100, "Tối đa 100 ký tự, vui lòng nhập giá trị hợp lệ."),
  // .matches(
  //   /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
  //   "Tên người dùng chỉ chấp nhận các ký tự văn bản (không chứa chữ số 0-9 và cá ký tự đặc biệt ., # * & ()) "
  // ),
  password: Yup.string()
    .required("Vui lòng nhập mật khẩu để đăng ký")
    .min(8, "Mật khẩu cần chứa từ 8 – 35 ký tự, vui lòng nhập giá trị hợp lệ")
    .max(35, "Mật khẩu cần chứa từ 8 – 35 ký tự, vui lòng nhập giá trị hợp lệ")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*`])[A-Za-z\d!@#$%^&*`]+$/,
      "Mật khẩu cần chứa tối thiểu 1 ký tự viết hoa ,1 ký tự viết thường, 1 chữ số"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Mật khẩu xác nhận không trùng khớp, vui lòng nhập đúng giá trị mật khẩu đã tạo."
  ),
  phoneNumber: Yup.string()
    .required("Vui lòng nhập số điện thoại để đăng ký")
    .matches(/^0\d{9}$/, "Số điện thoại không đúng định dạng")
    .length(10, "Số điện thoại không đúng định dạng"),
};

export const schemaSentInfo = {
  username: Yup.string()
    .required("Vui lòng nhập số điện thoại/ email để đặt lại mật khẩu")
    .max(256, "Tối đa 256 ký tự, vui lòng nhập giá trị hợp lệ.")
    .matches(
      /^0\d{9}$/,
      "Số điện thoại/ email không hợp lệ, vui lòng kiểm tra lại"
    ),
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
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Mật khẩu xác nhận không trùng khớp, vui lòng nhập đúng giá trị mật khẩu đã tạo."
  ),
};

export const schemaAdditionInformation = {
  email: Yup.string()
    .required("Vui lòng nhập email để đăng ký")
    .max(256, "Tối đa 256 ký tự, vui lòng nhập giá trị hợp lệ.")
    .test({
      message: "Email không hợp lệ, vui lòng kiểm tra lại",
      test: (value: any) => {
        if (!value) return true;
        const valueTest = (value || "").trim();
        const email = /^[\w-\\.-\\+]{4,64}@([\w-]+\.)+[\w-]{1,190}$/gi;
        return email.test(valueTest);
      },
    }),
  fullName: Yup.string()
    .required("Vui lòng nhập họ và tên để đăng ký")
    .max(100, "Tối đa 100 ký tự, vui lòng nhập giá trị hợp lệ."),
  dob: Yup.string().required("Vui lòng nhập ngày sinh để đăng ký"),
  phone: Yup.string()
    .required("Vui lòng nhập số điện thoại để đăng ký")
    .matches(/^0\d{9}$/, "Số điện thoại không đúng định dạng")
    .length(10, "Số điện thoại không đúng định dạng"),
  height: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Vui lòng nhập chiều cao để đăng ký"),
  weight: Yup.number()
    .transform((value) => (Number.isNaN(value) ? null : value))
    .nullable()
    .required("Vui lòng nhập cân nặng để đăng ký"),
  backHand: Yup.number().required("Vui lòng nhập để đăng ký"),
  playSince: Yup.string().required("Vui lòng nhập để đăng ký"),
  racketSpecs: Yup.string().required("Vui lòng nhập để đăng ký"),
  shoesBrand: Yup.string().required("Vui lòng nhập để đăng ký"),
  clothesBrand: Yup.string().required("Vui lòng nhập để đăng ký"),

  address: Yup.string().required("Vui lòng nhập để đăng ký"),
  ward: Yup.string().required("Vui lòng chọn xã/phường để đăng ký"),
  district: Yup.string().required("Vui lòng chọn quận/huyện nhập để đăng ký"),
  province: Yup.string().required("Vui lòng chọn tỉnh/thành để đăng ký"),

  identifyId: Yup.string()
    .required("Vui lòng nhập số CMT/CCCD để đăng ký")
    .length(12, "Số CMT/CCCD không đúng định dạng"),
  identifyDate: Yup.string().required(
    "Vui lòng nhập ngày cấp CMT/CCCD để đăng ký"
  ),
  identifyAddress: Yup.string().required(
    "Vui lòng nhập nơi cấp CMT/CCCD để đăng ký"
  ),
};
