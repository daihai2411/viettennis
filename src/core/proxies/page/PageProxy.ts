import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getPageSupport(params) {
    return this.get("page/" + params.id, {});
  }
}

const pageProxy = new Proxy();
export default pageProxy;
