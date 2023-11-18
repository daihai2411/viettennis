import ReCAPTCHA from "react-google-recaptcha";

const CheckRecaptcha = ({ captchaRef }) => {
  return (
    <>
      <div className="flex gap-1 text-small font-medium text-foreground pb-1.5">
        Xác thực
        <div className="text-red-600">*</div>
      </div>
      <ReCAPTCHA
        sitekey={"6Lf6mBMpAAAAACG_TlgS_JpBx4ijA6ttkj0RV_KI"}
        ref={captchaRef}
      />
    </>
  );
};

export default CheckRecaptcha;
