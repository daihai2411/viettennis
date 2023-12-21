import ReCAPTCHA from "react-google-recaptcha";

const CheckRecaptcha = ({ setValue, errors, clearErrors }) => {
  const onChange = (val) => {
    setValue("captcha", val);
    clearErrors("captcha");
  };

  return (
    <>
      <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
        Xác thực
        <div className="text-red-600">*</div>
      </div>
      <div
        className="captcha scale-75 md:scale-100"
        style={{ transformOrigin: "0 0" }}
      >
        <ReCAPTCHA
          sitekey={"6Lf6mBMpAAAAACG_TlgS_JpBx4ijA6ttkj0RV_KI"}
          onChange={onChange}
        />
      </div>
      {errors["captcha"] && (
        <p className="text-red-500 text-xs" role="alert">
          {errors["captcha"]?.message as string}
        </p>
      )}
    </>
  );
};

export default CheckRecaptcha;
