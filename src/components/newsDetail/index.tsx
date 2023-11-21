"use client";

import { FORMAT, formatDateTime } from "@/helpers/datetime";
import { AppDispatch } from "@/redux/store";
import { Image, Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaFacebook, FaRegClock, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import ListNewsRecommend from "./ListNewsRecommend";
import { selectLoading, selectNewsDetail } from "./store/slice";
import { getNewsDetailThunk, getNewsThunk } from "./store/thunk";

const NewsDetailModule = () => {
  const dispatch = useDispatch<AppDispatch>();
  const params = useParams();

  const loading = useSelector(selectLoading);
  const newsDetail = useSelector(selectNewsDetail);

  const urlShare = `https://viettennis2.tdev.vn/news/${newsDetail?.id}`;

  useEffect(() => {
    if (params.newsId) {
      dispatch(getNewsDetailThunk({ newsId: params.newsId }));
    }
  }, [params.newsId]);

  useEffect(() => {
    dispatch(getNewsThunk({}));
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="pt-9 container mx-auto">
      {newsDetail.id ? (
        <>
          <div className="w-[50%] mx-auto">
            <div className="flex text-white text-xs items-center gap-3">
              <div className="font-bold">{newsDetail?.news_category_value}</div>
              <div className="flex items-center gap-1">
                <FaRegClock />
                <div className="font-extrabold">
                  {formatDateTime(newsDetail?.publish_date, FORMAT.DATE_SLASH)}
                </div>
              </div>
            </div>
            <div className="text-white text-[45px] font-bold mt-2 h-[200px] line-clamp-3">
              {newsDetail?.title}
            </div>
            <div className="flex items-center text-white text-base gap-2 mb-2">
              <span className="font-normal">Bởi</span>
              <span className="font-bold">
                {newsDetail?.created_by} - {newsDetail?.news_category_value}
              </span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[40px] h-[40px] bg-white group hover:bg-[#117df2] rounded-[20px] justify-center items-center inline-flex">
                <FacebookShareButton url={urlShare}>
                  <FaFacebook className="group-hover:text-white" size={22} />
                </FacebookShareButton>
              </div>
              <div className="w-[40px] h-[40px] bg-white group hover:bg-[#55acee] rounded-[20px] justify-center items-center inline-flex">
                <TwitterShareButton url={urlShare}>
                  <FaTwitter className="group-hover:text-white" size={22} />
                </TwitterShareButton>
              </div>
            </div>
          </div>
          <div className="w-[70%] mx-auto bg-white p-2">
            <Image
              radius="none"
              alt="image news"
              src={newsDetail?.banner_image}
              width={1200}
            />
          </div>
          <div className="w-[50%] mx-auto mt-10">
            <div dangerouslySetInnerHTML={{ __html: newsDetail?.content }} />
          </div>
        </>
      ) : (
        <div className="text-white text-[45px] flex justify-center pb-9">
          Tin tức không tồn tại !
        </div>
      )}
      <ListNewsRecommend />
    </div>
  );
};

export default NewsDetailModule;
