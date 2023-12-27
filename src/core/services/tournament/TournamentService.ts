import tournamentProxy from "@/core/proxies/tournament/TournamentProxy";
import ServiceBase from "../ServiceBase";

class Service extends ServiceBase {
  getListTournament(params: object) {
    return this.getData(() => tournamentProxy.getListTournament(params));
  }

  getDetailTournament(params: { id: string }) {
    return this.getData(() => tournamentProxy.getDetailTournament(params));
  }

  getTemplateTournament(params: object) {
    return this.getData(() => tournamentProxy.getTemplateTournament(params));
  }
}

const tournamentService = new Service();
export default tournamentService;
