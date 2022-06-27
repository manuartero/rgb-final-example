import CardPrice from "./card-price";

interface Props {
  showButton?: boolean;
  title: string;
  price: number;
  onClick: () => void;
}
const Card = ({ showButton, title, price, onClick }: Props): JSX.Element => {
  return (
    <div>
      {showButton && <button onClick={onClick}>press me</button>}
      {title}
      <CardPrice price={price} />
    </div>
  );
};

export default Card;
