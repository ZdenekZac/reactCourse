import styled from 'styled-components';
import { useDeleteVan } from './useDeleteVan';
import { useCreateVans } from './useCreateVans';
import { useState } from 'react';

const Img = styled.img`
  display: block;
  width: 4.8rem;

  aspect-ratio: 3/2;
  object-fit: cover;
  transform: scale(1.5);
  transition: transform 0.3s ease;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 0.8fr 0.6fr 0.6fr minmax(0, 1fr);
  column-gap: 2.4rem;
  height: 6rem;
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
  overflow-y: auto;
  max-height: 100%;

  /* Šířka scrollbaru */
  &::-webkit-scrollbar {
    width: 6px;
  }

  /* Barva "kolejnice" */
  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
    border-radius: 5px;
  }

  /* Barva toho posuvníku (táhla) */
  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-400);
    border-radius: 5px;
  }

  /* Barva při najetí myší */
  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-grey-400);
  }
`;
const Price = styled.div``;
const Discount = styled.div``;

function VanRow({ van }) {
  const { showForm, setShowForm } = useState(false);
  const { isDeleting, deleteVan } = useDeleteVan();
  const { isCreating, createVan } = useCreateVans();

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
