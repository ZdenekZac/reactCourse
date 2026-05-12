import { useState } from 'react';
import styled from 'styled-components';
import { useDeleteVan } from './useDeleteVan';
import { useCreateVans } from './useCreateVans';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 0.8fr 0.6fr 0.6fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1rem;
  color: var(--color-grey-600);
  background-color: var(--color-emerald-200);
  border-bottom: 0.5px solid var(--color-grey-100);

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:hover {
    background-color: var(--color-emerald-400);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3/2;
  object-fit: cover;
  transform: scale(1.5);
  transition: transform 0.3s ease;
`;

const Van = styled.div`
  font-size: 1.6rem;
  font-family: 'Sono';
`;
const Features = styled.div`
  overflow: scroll;
`;
const Price = styled.div`
  font-family: 'Sono';
`;
const Discount = styled.div``;

function VanRow({ van }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteVan } = useDeleteVan();
  const { isCreating, createVan } = useCreateVans();

  const { id: vanId, registrationPlate: plate, name, maxCapacity, regularPrice, discount, image, features } = van;

  function handleDuplicate() {
    createVan({
      name,
    });
  }

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
