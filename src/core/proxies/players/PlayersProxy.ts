import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getListPlayers(params: object) {
    return this.get("list-players", params);
  }
}

const playersProxy = new Proxy();
export default playersProxy;
