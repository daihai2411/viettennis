import NewsModule from "@/components/news";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức - Viettennis",
  description: "Viettennis",
};

const NewsPage = () => {
  return <NewsModule />;
};

export default NewsPage;
