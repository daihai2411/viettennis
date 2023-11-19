import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  updateInformation(params: object) {
    return this.post("auth/update-information", params);
  }

  updatePersonalPoint(params: object) {
    return this.get("auth/update-personal-point", params);
  }

  getListPersonalPointCriteria() {
    return this.get("list-personal-point-criteria");
  }

  getListPersonalPointDetailByCriteria(params: object) {
    return this.get("list-personal-point-detail-by-criteria", params);
  }
}

const profileProxy = new Proxy();
export default profileProxy;
