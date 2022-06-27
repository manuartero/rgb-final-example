interface Props {
  price: number
}


function CardPrice(p: Props): JSX.Element {
  return <div className="card-price">{p.price}</div>;
}

export default CardPrice;
