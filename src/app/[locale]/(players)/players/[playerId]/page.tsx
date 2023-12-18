import PlayerDetailModule from "@/components/playerDetail";

const PlayerDetailPage = ({ params }: { params: { playerId: string } }) => {
  return <PlayerDetailModule playerId={Number(params?.playerId)} />;
};

export default PlayerDetailPage;
