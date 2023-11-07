import proxy from "@/core/proxies/rankings/RankingsSinglesProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getListRankPoint(params: object) {
    return this.getData(() => proxy.getListRankPoint(params));
  }
}

const service = new Service();
export default service;
