import ProfileHeader from "./profileHeader/ProfileHeader";
import ProfileTab from "./profileTab";

const PersonalInfoCommon = ({
  data = {},
  loading = true,
  isUserLogged = true,
}) => {
  return (
    <div>
      <ProfileHeader
        data={data}
        loading={loading}
        isUserLogged={isUserLogged}
      />
      <ProfileTab data={data} loading={loading} />
    </div>
  );
};

export default PersonalInfoCommon;
