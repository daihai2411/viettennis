import profileProxy from "@/core/proxies/profile/ProfileProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  updateInformation(params: object) {
    return this.getData(() => profileProxy.updateInformation(params));
  }

  updatePersonalPoint(params: object) {
    return this.getData(() => profileProxy.updatePersonalPoint(params));
  }

  getListPersonalPointCriteria() {
    return this.getData(() => profileProxy.getListPersonalPointCriteria());
  }

  getListPersonalPointDetailByCriteria(params: object) {
    return this.getData(() =>
      profileProxy.getListPersonalPointDetailByCriteria(params)
    );
  }

  getProfile() {
    return this.getData(() => profileProxy.getProfile());
  }

  getProfileById(params: { id: string | number }) {
    return this.getData(() => profileProxy.getProfileById(params));
  }
}

const profileService = new Service();
export default profileService;
