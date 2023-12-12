import style from "../style.module.scss";
import ProfileHeaderLeft from "./ProfileHeaderLeft";
import ProfileHeaderRight from "./ProfileHeaderRight";

const ProfileHeader = ({ data, loading }) => {
  return (
    <>
      <div
        className={`my-2 px-0 md:px-2 mx-2 md:mx-0 h-auto md:h-[500px] block md:flex ${style.bgTwoColorVertical}`}
      >
        <ProfileHeaderLeft data={data} loading={loading} />
        <ProfileHeaderRight data={data} loading={loading} />
      </div>
    </>
  );
};

export default ProfileHeader;
