import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getContentPrivacyPolicy(params: object) {
    return this.get("page/privacy_policy", params);
  }

  getContentTermAndConditions(params: object) {
    return this.get("page/term_and_conditions", params);
  }

  getContentSupport(params: object) {
    return this.get("page/support", params);
  }
}

const pageProxy = new Proxy();
export default pageProxy;
