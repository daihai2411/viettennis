import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getListRankPoint(params: object) {
    return this.get("list-rank-point", params);
  }
}

const proxy = new Proxy();
export default proxy;
