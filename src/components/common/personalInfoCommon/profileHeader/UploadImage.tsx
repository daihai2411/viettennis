import { ROUTERS } from "@/const/router";
import profileService from "@/core/services/profile/ProfileService";
import { AppDispatch } from "@/redux/store";
import { Button, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ToastError, ToastSuccess } from "../../Toast";
import { changeAvatarProfile } from "../../hooks/store/slice";

const UploadImage = ({ avatar, isUserLogged }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [avatarState, setAvatarState] = useState(avatar);
  const [loading, setLoading] = useState(false);

  const handleInputChange = async (event) => {
    setLoading(true);
    try {
      const res = (await profileService.updateAvatar({
        avatar: event.target.files[0],
      })) as any;
      dispatch(changeAvatarProfile(res.data?.data));
      setAvatarState(res.data?.data);
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
        {isUserLogged && (
          <>
            <Button
              size="sm"
              radius="sm"
              startContent={<FaCamera width={20} height={20} />}
              className="absolute bg-black opacity-70 text-white cursor-pointer right-1 bottom-1"
            >
              <label className="cursor-pointer" htmlFor="avatar-upload">
                Cập nhật avatar
              </label>
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
      </Skeleton>

      {isUserLogged && (
        <Link href={ROUTERS.PERSONAL_INFO_UPDATE}>
          <Button
            radius="full"
            size="sm"
            className="mt-2 mx-auto flex bg-white text-green-common border border-green-common"
          >
            Cập nhật thông tin cá nhân
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UploadImage;
