import pageProxy from "@/core/proxies/page/PageProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getPageSupport(params) {
    return this.getData(() => pageProxy.getPageSupport(params));
  }
}

const pageService = new Service();
export default pageService;
