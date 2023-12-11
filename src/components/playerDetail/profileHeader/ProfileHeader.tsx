import style from "../style.module.scss";
import ProfileHeaderLeft from "./ProfileHeaderLeft";
import ProfileHeaderRight from "./ProfileHeaderRight";

const ProfileHeader = () => {
  return (
    <>
      <div
        className={`my-2 px-2 h-[500px] block md:flex relative ${style.bgTwoColorVertical}`}
      >
        <ProfileHeaderLeft />
        <ProfileHeaderRight />
      </div>
    </>
  );
};

export default ProfileHeader;
