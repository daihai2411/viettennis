import proxy from "@/core/proxies/rankings/RankingsProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getListRankPoint(params: object) {
    return this.getData(() => proxy.getListRankPoint(params));
  }

  getListAllFilterRanking() {
    return this.getData(() => proxy.getListAllFilterRanking());
  }
}

const service = new Service();
export default service;
