import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  updateInformation(params: object) {
    return this.post("auth/update-information", params);
  }

  updatePersonalPoint(params: object) {
    return this.post("auth/update-personal-point", params);
  }

  getListPersonalPointCriteria() {
    return this.get("list-personal-point-criteria");
  }

  getListPersonalPointDetailByCriteria(params: object) {
    return this.get("list-personal-point-detail-by-criteria", params);
  }

  getProfile() {
    return this.get("auth/get-profile", {});
  }

  getProfileById(params: { id: number | string }) {
    return this.get("get-profile-by-id/" + params?.id, {});
  }
}

const profileProxy = new Proxy();
export default profileProxy;
