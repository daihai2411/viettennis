import newProxy from "@/core/proxies/news/NewsProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getNews(params: object) {
    return this.getData(() => newProxy.getNews(params));
  }

  getNewsDetail(params: { newsId: string }) {
    return this.getData(() => newProxy.getNewsDetail(params));
  }

  getListCategory(params: object) {
    return this.getData(() => newProxy.getListCategory(params));
  }
}

const newsService = new Service();
export default newsService;
