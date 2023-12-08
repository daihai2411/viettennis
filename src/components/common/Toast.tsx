import { toast } from "react-toastify";

export const ToastError = (error: any) => {
  toast.error(
    <span
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{
        __html: error,
      }}
    ></span>
  );
};

export const ToastSuccess = (mess: string) => {
  toast.success(
    <span
      style={{ whiteSpace: "pre-line" }}
      dangerouslySetInnerHTML={{
        __html: mess,
      }}
    ></span>
  );
};
