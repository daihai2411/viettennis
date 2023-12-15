import { ROUTERS } from "@/const/router";
import profileService from "@/core/services/profile/ProfileService";
import { AppDispatch } from "@/redux/store";
import { Button, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastError, ToastSuccess } from "../../Toast";
import { getProfileThunk } from "../../hooks/store/thunk";

const UploadImage = ({ avatar }) => {
  const pathName = usePathname();
  const dispatch = useDispatch<AppDispatch>();

  const [avatarState, setAvatarState] = useState(avatar);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (event) => {
    setLoading(true);
    try {
      const res = (await profileService.updateAvatar({
        avatar: event.target.files[0],
      })) as any;
      setAvatarState(URL.createObjectURL(event.target.files[0]));
      dispatch(getProfileThunk({}));
      setLoading(false);
      ToastSuccess(res?.message);
    } catch (error: any) {
      setLoading(false);
      ToastError(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    return () => {
      setAvatarState(null);
    };
  }, []);

  useEffect(() => {
    setAvatarState(avatar);
  }, [avatar]);

  return (
    <div className="col-span-3">
      <Skeleton
        isLoaded={!loading}
        className="border-[7px] relative border-white mt-[48px] md:mt-[30%] mx-auto w-[180px] lg:w-[260px] h-[220px] lg:h-[300px]"
      >
        <Image
          fill
          src={avatarState || "/player.png"}
          alt="Avatar"
          layout="fill"
          objectFit="cover"
        />
      </Skeleton>

      {pathName === ROUTERS.PERSONAL_INFO && (
        <>
          <Button
            isLoading={loading}
            radius="full"
            size="sm"
            className="mt-2 mx-auto flex bg-white text-green-common border border-green-common"
          >
            <label htmlFor="avatar-upload">Thay đổi ảnh đại diện</label>
          </Button>
          <input
            type="file"
            className="hidden"
            id="avatar-upload"
            accept="image/png, image/jpeg"
            onChange={handleInputChange}
          />
        </>
      )}
    </div>
  );
};

export default UploadImage;
