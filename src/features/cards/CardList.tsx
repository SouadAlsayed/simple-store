import CardItem from "./CardItem";

const arr = [1, 2, 3];

function CardList() {
  return (
    <div className="grid grid-cols-3 gap-7">
      {arr.map((i) => (
        <CardItem key={i} />
      ))}
    </div>
  );
}
export default CardList;
