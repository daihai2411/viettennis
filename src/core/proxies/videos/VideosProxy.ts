import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getListVideo(params: object) {
    return this.get("video", params);
  }
}

const videoProxy = new Proxy();
export default videoProxy;
