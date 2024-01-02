import pageProxy from "@/core/proxies/page/PageProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getContentPrivacyPolicy(params: object) {
    return this.getData(() => pageProxy.getContentPrivacyPolicy(params));
  }

  getContentTermAndConditions(params: object) {
    return this.getData(() => pageProxy.getContentTermAndConditions(params));
  }

  getContentSupport(params: object) {
    return this.getData(() => pageProxy.getContentSupport(params));
  }
}

const playersService = new Service();
export default playersService;
