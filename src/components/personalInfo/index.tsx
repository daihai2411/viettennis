"use client";

import useUserProfile from "../common/hooks/useUserProfile";
import PersonalInfoCommon from "../common/personalInfoCommon";

const PersonalInfoModule = () => {
  const { dataProfile, loading } = useUserProfile();

  return <PersonalInfoCommon data={dataProfile} loading={loading} />;
};

export default PersonalInfoModule;
