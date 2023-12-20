import { Image } from "@nextui-org/react";
import Videos from "./videos";

const VideoAndBanner = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-6">
      <div className="col-span-6 md:col-span-4 rounded-lg">
        <Videos />
      </div>
      <div className="col-span-2 hidden md:block rounded-lg">
        <Image
          radius="none"
          className="h-full"
          alt="banner"
          src="/banner-left.jpeg"
        />
      </div>
    </div>
  );
};

export default VideoAndBanner;
