"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { steps } from "../constants";
import {
  changeStep,
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

  const step = useSelector(selectStep);
  const phoneNumber = useSelector(selectPhoneNumber);
  const password = useSelector(selectPassword);

  useEffect(() => {
    return () => {
      dispatch(changeStep(steps.REGISTER));
    };
  }, []);

  const onBack = () => {
    dispatch(changeStep(steps.REGISTER));
  };

  const onNext = async () => {
    // signIn("credentials", {
    //   username: phoneNumber,
    //   password,
    //   redirect: false,
    // });
    // await saveSession();
    dispatch(changeStep(steps.ADDITIONAL_INFO));
  };

  if (step === steps.VERIFY) {
    return (
      <FormVerify phoneNumber={phoneNumber} onBack={onBack} onNext={onNext} />
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
