import { toast } from "react-toastify";

export const ToastError = (error: any) => {
  toast.error(error);
};

export const ToastSuccess = (mess: string) => {
  toast.success(mess);
};

export const ToastInfo = (mess: string) => {
  toast.success(mess);
};
