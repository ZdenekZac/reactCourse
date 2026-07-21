import styled from 'styled-components';

import CreateVanForm from './CreateVanForm';
import { useDeleteVan } from './useDeleteVan';
import { useCreateVans } from './useCreateVans';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

const Img = styled.img`
  display: block;
  width: 4.8rem;

  aspect-ratio: 3/2;
  object-fit: cover;
  transform: scale(1.5);
  transition: transform 0.3s ease;
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
  const { isDeleting, deleteVan } = useDeleteVan();
  const { createVan } = useCreateVans();
  console.log(van);
  const { id: vanId, registrationPlate: plate, name, maxCapacity, regularPrice, discount, image, features } = van;

  function handleDuplicate() {
    createVan({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      features,
    });
  }

  return (
    <Table.Row>
      <Img src={image} />
      <div>{name}</div>
      <div>{maxCapacity}</div>
      <div>{plate}</div>
      <Price>{regularPrice} / day</Price>
      <Discount>{discount}</Discount>
      <Features>{features}</Features>
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={vanId} />

            <Menus.List id={vanId}>
              <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens='edit'>
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens='delete'>
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name='edit'>
              <CreateVanForm vanToEdit={van} />
            </Modal.Window>

            <Modal.Window name='delete'>
              <ConfirmDelete resourceName='vans' disabled={isDeleting} onConfirm={() => deleteVan(vanId)} />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default VanRow;
