import style from "../style.module.scss";
import ProfileHeaderLeft from "./ProfileHeaderLeft";
import ProfileHeaderRight from "./ProfileHeaderRight";

const ProfileHeader = ({ data, loading, isUserLogged }) => {
  return (
    <>
      <div
        className={`my-2 px-0 md:px-2 mx-2 md:mx-0 h-auto md:h-[530px] block md:flex ${style.bgTwoColorVertical}`}
      >
        <ProfileHeaderLeft
          data={data}
          loading={loading}
          isUserLogged={isUserLogged}
        />
        <ProfileHeaderRight
          data={data}
          loading={loading}
          isUserLogged={isUserLogged}
        />
      </div>
    </>
  );
};

export default ProfileHeader;
