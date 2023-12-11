import playersProxy from "@/core/proxies/players/PlayersProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getListPlayers(params: object) {
    return this.getData(() => playersProxy.getListPlayers(params));
  }
}

const playersService = new Service();
export default playersService;
