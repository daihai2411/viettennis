import ItemPlayer from "./common/ItemPlayer";

const PlayerListModule = () => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <ItemPlayer />
        <ItemPlayer />
        <ItemPlayer />
        <ItemPlayer />
        <ItemPlayer />
        <ItemPlayer />
        <ItemPlayer />
      </div>
    </div>
  );
};

export default PlayerListModule;
