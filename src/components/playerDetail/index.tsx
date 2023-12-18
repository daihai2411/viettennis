"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUserProfile from "../common/hooks/useUserProfile";
import PersonalInfoCommon from "../common/personalInfoCommon";
import { resetState, selectData, selectLoading } from "./store/slice";
import { getProfileByIdThunk } from "./store/thunk";

const PlayerDetailModule = ({ playerId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector(selectData);
  const loadingPlayerDetail = useSelector(selectLoading);
  const { dataProfile, loading } = useUserProfile();

  const isUserLogged = useMemo(() => {
    return dataProfile.id === playerId;
  }, [dataProfile.id, playerId]);

  useEffect(() => {
    if (playerId !== dataProfile.id) {
      dispatch(getProfileByIdThunk({ id: playerId }));
    }
  }, [playerId]);

  useEffect(() => {
    return () => {
      dispatch(resetState());
    };
  }, []);

  return (
    <PersonalInfoCommon
      data={isUserLogged ? dataProfile : data}
      loading={isUserLogged ? loading : loadingPlayerDetail}
      isUserLogged={isUserLogged}
    />
  );
};

export default PlayerDetailModule;
