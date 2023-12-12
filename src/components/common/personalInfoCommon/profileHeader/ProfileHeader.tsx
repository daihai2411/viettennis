import style from "../style.module.scss";
import ProfileHeaderLeft from "./ProfileHeaderLeft";
import ProfileHeaderRight from "./ProfileHeaderRight";

const ProfileHeader = ({ data, loading }) => {
  return (
    <>
      <div
        className={`my-2 px-0 lg:px-2 mx-2 lg:mx-0 h-auto lg:h-[500px] block lg:flex ${style.bgTwoColorVertical}`}
      >
        <ProfileHeaderLeft data={data} loading={loading} />
        <ProfileHeaderRight data={data} loading={loading} />
      </div>
    </>
  );
};

export default ProfileHeader;
