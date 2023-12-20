import VideosModule from "@/components/videos";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video - Viettennis",
  description: "Viettennis",
};

const VideoPage = () => {
  return <VideosModule />;
};

export default VideoPage;
