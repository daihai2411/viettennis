import videoProxy from "@/core/proxies/videos/VideosProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getListVideo(params: object) {
    return this.getData(() => videoProxy.getListVideo(params));
  }
}

const videosService = new Service();
export default videosService;
