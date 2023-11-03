import * as Yup from "yup";

export const KIND_POPUP = {
  LOG_IN: "LOG_IN",
  REGISTER: "REGISTER",
};

export const STATUS_FORGET_PASS = {
  UNSENT: "UNSENT",
  SENT: "SENT",
};

export const STATUS_RESTORE_PASS = {
  RESTORE: "RESTORE",
  SUCCESS: "SUCCESS",
};

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
    .max(100, "Tối đa 100 ký tự, vui lòng nhập giá trị hợp lệ.")
    .matches(
      /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
      "Tên người dùng chỉ chấp nhận các ký tự văn bản (không chứa chữ số 0-9 và cá ký tự đặc biệt ., # * & ()) "
    ),
  nickname: Yup.string()
    .required("Vui lòng nhập tên nick (ID) để đăng ký")
    .max(100, "Tối đa 100 ký tự, vui lòng nhập giá trị hợp lệ."),
  mail: Yup.string()
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
  birthday: Yup.string().nullable(),
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
  identification: Yup.string()
    .required("Vui lòng nhập số cccd/ hộ chiếu để đăng ký ")
    .length(12, "Số cccd/ hộ chiếu không đúng định dạng"),
  issueDate: Yup.string().required(
    "Vui lòng nhập ngày cấp cccd/ hộ chiếu để đăng ký"
  ),
  issueAddress: Yup.string().required(
    "Vui lòng nhập nơi cấp cccd/ hộ chiếu để đăng ký "
  ),
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
