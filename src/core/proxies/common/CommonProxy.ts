import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getProvinces(params: any) {
    return this.get("getProvinces", params);
  }

  getDistricts(params: any) {
    return this.get("getDistricts", params, undefined, true);
  }

  getWards(params: any) {
    return this.get("getWards", params);
  }
}

const commonProxy = new Proxy();
export default commonProxy;
