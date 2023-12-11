import ItemPlayer from "./ItemPlayer";

const PlayerList = ({ list = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {list.map((item, index) => (
        <ItemPlayer item={item} key={index} />
      ))}
    </div>
  );
};

export default PlayerList;
