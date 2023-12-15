"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileThunk } from "../common/hooks/store/thunk";
import useUserProfile from "../common/hooks/useUserProfile";
import PersonalInfoCommon from "../common/personalInfoCommon";

const PersonalInfoModule = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { dataProfile, loading } = useUserProfile();

  useEffect(() => {
    dispatch(getProfileThunk({}));
  }, []);

  return <PersonalInfoCommon data={dataProfile} loading={loading} />;
};

export default PersonalInfoModule;
