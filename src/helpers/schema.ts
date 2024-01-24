type SchemaType = {
  type: string;
  fieldName?: string;
  min?: number;
  max?: number;
  length?: number;
  minDate?: string;
  maxDate?: string;
  kindFormat?: string;
};

export const getMessSchema = ({
  type,
  fieldName,
  min,
  max,
  length,
  minDate,
  maxDate,
  kindFormat,
}: SchemaType) => {
  switch (type) {
    case "MS_01":
      return `${fieldName} là bắt buộc.`;

    case "MS_02_01":
      return `Định dạng dữ liệu sai.`;
    case "MS_02_02":
      return `${fieldName} chỉ chấp nhận các ký tự văn bản (không chứa chữ số 0-9 và cá ký tự đặc biệt ., # * &...) `;
    case "MS_02_03":
      return `${fieldName} chỉ chấp nhận các ký tự chữ số.`;

    case "MS_03_01":
      return `Độ dài của ${fieldName} phải nằm trong khoảng ${min} và ${max} ký tự.`;
    case "MS_03_02":
      return `Độ dài của ${fieldName} phải chứa ${length} ký tự.`;
    case "MS_03_03":
      return `Độ dài của ${fieldName} tối đa ${max} ký tự.`;

    case "MS_04":
      return `${fieldName} phải là số nằm giữa ${min} và ${max}.`;

    case "MS_05":
      return `${fieldName} phải là duy nhất. ${fieldName} đã tồn tại.`;

    case "MS_06":
      return `${fieldName} phải là ngày giữa ${minDate} và ${maxDate}`;

    case "MS_07":
      return `Vui lòng chọn giá trị cho ${fieldName}.`;

    case "MS_08":
      return `${fieldName} đã nhập chưa đăng ký.`;

    case "MS_09":
      return `${fieldName} đã nhập đã đăng ký.`;

    case "MS_10":
      return `Định dạng tệp không hợp lệ cho ${fieldName}. Vui lòng tải lên tệp ${kindFormat}.`;

    case "MS_11":
      return `Mật khẩu cần chứa 1 ký tự viết hoa, 1 ký tự viết thường, 1 chữ số.`;

    case "MS_12":
      return `${fieldName} đã nhập không trùng khớp.`;

    case "MS_13":
      return `${fieldName} đã hết hiệu lực`;

    default:
      return "";
  }
};
