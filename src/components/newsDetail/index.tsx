"use client";

import { FORMAT, formatDateTime } from "@/helpers/datetime";
import { AppDispatch } from "@/redux/store";
import { Avatar, Image, Spinner } from "@nextui-org/react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
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
    return (
      <div className="h-48 items-center flex">
        <Spinner className="w-full" />
      </div>
    );
  }

  return (
    <div className="pt-9 container mx-auto px-2 lg:px-0">
      {newsDetail.id ? (
        <div className="">
          <div className="flex justify-center font-bold text-4xl leading-10 text-green-950 mb-2">
            <h1 className="flex justify-center items-center text-center pb-3">
              {newsDetail?.title}
            </h1>
          </div>
          <div className="flex justify-center mt-4 mb-14">
            <Avatar className="mr-3 mt-2" name={newsDetail?.created_by} />
            <div className="">
              <div className="font-semibold text-base leading-7 text-[#505050]">
                {newsDetail?.created_by}
              </div>
              <div className="font-normal text-sm leading-5 text-[#ABB1BA]">
                {formatDateTime(
                  newsDetail?.publish_date,
                  FORMAT.DATE_TIME_TABLE
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[80%] mx-auto bg-white p-2">
            <Image
              radius="lg"
              alt="image news"
              src={newsDetail?.banner_image}
              width={1500}
            />
            <div className="flex justify-between mt-2 pb-2 border-b">
              <div className="italic">{newsDetail?.news_category_value}</div>
              <div className="gap-2 flex justify-end ">
                <div className="w-[30px] h-[30px] bg-white group hover:bg-[#117df2] rounded-[20px] justify-center items-center inline-flex">
                  <FacebookShareButton url={urlShare}>
                    <FaFacebook className="group-hover:text-white" size={16} />
                  </FacebookShareButton>
                </div>
                <div className="w-[30px] h-[30px] bg-white group hover:bg-[#55acee] rounded-[20px] justify-center items-center inline-flex">
                  <TwitterShareButton url={urlShare}>
                    <FaTwitter className="group-hover:text-white" size={16} />
                  </TwitterShareButton>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 w-[80%] lg:w-[60%] mx-auto">
            <div
              className="default"
              dangerouslySetInnerHTML={{ __html: newsDetail?.content }}
            />
          </div>
        </div>
      ) : (
        <div className="text-white text-[45px] bg-green-header flex justify-center py-9">
          Tin tức không tồn tại !
        </div>
      )}

      <ListNewsRecommend />
    </div>
  );
};

export default NewsDetailModule;
