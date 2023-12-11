import style from "../style.module.scss";
import ProfileHeaderLeft from "./ProfileHeaderLeft";
import ProfileHeaderRight from "./ProfileHeaderRight";

const ProfileHeader = ({ data, loading }) => {
  return (
    <>
      <div
        className={`my-2 px-2 h-[500px] block md:flex relative ${style.bgTwoColorVertical}`}
      >
        <ProfileHeaderLeft data={data} loading={loading} />
        <ProfileHeaderRight data={data} loading={loading} />
      </div>
    </>
  );
};

export default ProfileHeader;
