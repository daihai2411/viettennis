import MatchItem from "./MatchItem";

const ListMatchItem = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <MatchItem item={item} key={JSON.stringify(item.game_detail)} />
      ))}
    </>
  );
};

export default ListMatchItem;
