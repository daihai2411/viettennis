import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getListRankPoint(params: object) {
    return this.get("list-rank-point", params);
  }

  getListAllFilterRanking() {
    return this.get("rank-point/list-all-filter", {});
  }
}

const proxy = new Proxy();
export default proxy;
