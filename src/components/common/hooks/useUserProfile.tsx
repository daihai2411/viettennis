"use client";

import { SESSION_KEY_SESSION_USER, getSessionStorage } from "@/helpers/storage";
import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoadingProfile, selectProfile } from "./store/slice";
import { getProfileThunk } from "./store/thunk";

const useUserProfile = (disableCallApi?: boolean) => {
  const dispatch = useDispatch<AppDispatch>();

  const dataProfile = useSelector(selectProfile);
  const loading = useSelector(selectLoadingProfile);

  const getUserProfile = (data = {}) => {
    const sessionUser = getSessionStorage(SESSION_KEY_SESSION_USER);
    if (sessionUser && !Object.keys(dataProfile).length) {
      dispatch(getProfileThunk(data));
    }
  };

  useEffect(() => {
    if (!disableCallApi && !Object.keys(dataProfile).length) {
      const user = getSessionStorage(SESSION_KEY_SESSION_USER);
      if (user) {
        getUserProfile(user);
      } else {
        dispatch(getProfileThunk({}));
      }
    }
  }, []);

  return {
    dataProfile,
    loading,
  };
};

export default useUserProfile;
