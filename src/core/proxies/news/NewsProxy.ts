import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getNews(params: object) {
    return this.get("news", params);
  }

  getNewsDetail(params: { newsId: string }) {
    return this.get("news/" + params.newsId);
  }

  getListCategory(params: object) {
    return this.get("list-category", params);
  }
}

const newProxy = new Proxy();
export default newProxy;
