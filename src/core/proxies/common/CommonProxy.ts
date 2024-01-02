import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getProvinces(params: any) {
    return this.get("get-provinces", params);
  }

  getDistricts(params: any) {
    return this.get("get-districts", params, undefined, true);
  }

  getWards(params: any) {
    return this.get("get-wards", params);
  }
}

const commonProxy = new Proxy();
export default commonProxy;
