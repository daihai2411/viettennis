import profileProxy from "@/core/proxies/profile/ProfileProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  updateInformation(params: object) {
    return this.getData(() => profileProxy.updateInformation(params));
  }

  updatePersonalPoint(params: object) {
    return this.getData(() => profileProxy.updatePersonalPoint(params));
  }

  getListPersonalPointCriteria(params: object) {
    return this.getData(() =>
      profileProxy.getListPersonalPointCriteria(params)
    );
  }
}

const profileService = new Service();
export default profileService;
