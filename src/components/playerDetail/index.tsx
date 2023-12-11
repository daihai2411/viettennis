"use client";

import { AppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PersonalInfoCommon from "../common/personalInfoCommon";
import { selectData, selectLoading } from "./store/slice";
import { getProfileByIdThunk } from "./store/thunk";

const PlayerDetailModule = ({ playerId }) => {
  const dispatch = useDispatch<AppDispatch>();

  const data = useSelector(selectData);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    if (playerId) {
      dispatch(getProfileByIdThunk({ id: playerId }));
    }
  }, [playerId]);

  return <PersonalInfoCommon data={data} loading={loading} />;
};

export default PlayerDetailModule;
