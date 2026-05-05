import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: 6.8rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  transform: scale(1.5);
  transition: transform 0.3s ease;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 0.8fr 0.6fr 0.6fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1rem;
  color: var(--color-grey-600);
  background-color: var(--color-emerald-200);
  border-bottom: 0.5px solid var(--color-grey-100);

  &:hover {
    background-color: var(--color-emerald-400);

    /* ${Img} {
      transform: scale(1.9) translateX(0.7rem) translateY(-0.4rem);
    } */
  }
`;

const Van = styled.div`
  font-size: 1.6rem;
  font-family: 'Sono';
`;
const Features = styled.div`
  overflow: scroll;
`;
const Price = styled.div``;
const Discount = styled.div``;

function VanRow({ van }) {
  const {
    id: vanId,
    registrationPlate: plate,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    features,
  } = van;

  return (
    <TableRow>
      <Img src={image} />
      <Van>{name}</Van>
      <Van>{plate}</Van>
      <div>Fits up to {maxCapacity} guests</div>
      <Price>{regularPrice} / day</Price>
      <Discount>{discount}</Discount>
      <Features>{features}</Features>
    </TableRow>
  );
}

export default VanRow;
