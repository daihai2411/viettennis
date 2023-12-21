"use client";

import { saveSession } from "@/helpers/session";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { steps } from "../constants";
import {
  changeEmail,
  changePhoneNumber,
  changeStep,
  selectEmail,
  selectPassword,
  selectPhoneNumber,
  selectStep,
} from "../store/slice";
import AdditionalInformation from "./additionalInformation";
import AdditionalPoints from "./additionalPoints";
import FormRegister from "./formRegister";
import { FormVerify } from "./formVerify";

const RegisterModule: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const step = useSelector(selectStep);
  const phoneNumber = useSelector(selectPhoneNumber);
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  // useEffect(() => {
  //   return () => {
  //     dispatch(changeStep(steps.ADDITIONAL_INFO));
  //   };
  // }, []);

  const onBack = () => {
    dispatch(changeStep(steps.REGISTER));
  };

  const onNext = async () => {
    signIn("credentials", {
      username: phoneNumber,
      password,
      redirect: false,
    });
    await saveSession();
    dispatch(changeStep(steps.ADDITIONAL_INFO));
  };

  const handleCheckRedirect = async () => {
    const user = (await saveSession()) as any;
    if (user?.id) {
      if (!user?.is_phone_verified) {
        dispatch(changeStep(steps.VERIFY));
        dispatch(changePhoneNumber(user?.phone));
        dispatch(changeEmail(user?.email));
        router.push("/auth/register");
      } else if (!user?.personal_info_updated) {
        dispatch(changeStep(steps.ADDITIONAL_INFO));
        dispatch(changePhoneNumber(user?.phone));
        dispatch(changeEmail(user?.email));
        router.push("/auth/register");
      } else if (!user?.personal_point_updated) {
        dispatch(changeStep(steps.ADDITIONAL_POINTS));
        router.push("/auth/register");
      } else {
        router.push("/");
      }
    }
  };

  useEffect(() => {
    handleCheckRedirect();
  }, []);

  if (step === steps.VERIFY) {
    return (
      <FormVerify
        phoneNumber={phoneNumber}
        email={email}
        onBack={onBack}
        onNext={onNext}
      />
    );
  }

  if (step === steps.ADDITIONAL_INFO) {
    return <AdditionalInformation />;
  }

  if (step === steps.ADDITIONAL_POINTS) {
    return <AdditionalPoints />;
  }

  return <FormRegister />;
};

export default RegisterModule;
