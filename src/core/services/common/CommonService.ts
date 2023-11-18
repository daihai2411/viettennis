import commonProxy from "@/core/proxies/common/CommonProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getProvinces(params: any) {
    return this.getData(() => commonProxy.getProvinces(params));
  }

  getDistricts(params: any) {
    return this.getData(() => commonProxy.getDistricts(params));
  }

  getWards(params: any) {
    return this.getData(() => commonProxy.getWards(params));
  }
}

const profileService = new Service();
export default profileService;
