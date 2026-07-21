import styled from 'styled-components';

import CreateStaffForm from './CreateStaffForm';
import { useState } from 'react';
import { useDeleteStaff } from './useDeleteStaff';
import { useCreateStaff } from './useCreateStaff';
import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';
import Modal from '../../ui/Modal';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr 1.2fr;
  column-gap: 2.4rem;
  align-items: start;
  padding: 1.6rem 2.4rem;
  color: var(--color-grey-600);
  background-color: var(--color-emerald-200);
  border-bottom: 0.5px solid var(--color-grey-100);
`;

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
`;

const Email = styled.div`
  font-size: 1.6rem;
  font-weight: 400;
  color: blue;
  font-family: 'Sono';
`;

function StaffRow({ staff }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteStaff } = useDeleteStaff();
  const { isCreating, createStaff } = useCreateStaff();
  console.log(staff);

  const { id: staffId, fullName, email, phone } = staff;

  function handleDuplicate() {
    createStaff({
      fullName: `Copy of ${fullName}`,
      email,
      phone,
    });
  }

  return (
    <>
      <TableRow role='row'>
        <p>{staffId}</p>
        <Name>{fullName}</Name>
        <Email>{email}</Email>
        <p>{phone}</p>
        <div>
          <button disabled={isCreating} onClick={handleDuplicate}>
            <HiSquare2Stack />
          </button>
          <button onClick={() => deleteStaff(staffId)} disabled={isDeleting}>
            <HiTrash />
          </button>
          <button onClick={() => setShowForm((s) => !s)}>
            <HiPencil />
          </button>
        </div>
      </TableRow>
      {showForm && <CreateStaffForm staffToEdit={staff} />}
    </>
  );
}

export default StaffRow;
