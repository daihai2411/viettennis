import ProxyBase from "../ProxyBase";

class Proxy extends ProxyBase {
  getListTournament(params: object) {
    return this.get("tournaments/list", params);
  }

  getDetailTournament(params: { id: string }) {
    return this.get("tournaments/detail/" + params.id, {});
  }

  getTemplateTournament(params: any) {
    return this.get("tournaments/template", params);
  }

  getTournamentResult(params: any) {
    return this.get("tournaments/result", params);
  }

  getFullFilterTournament() {
    return this.get("tournaments/all-filters");
  }
}

const tournamentProxy = new Proxy();
export default tournamentProxy;
