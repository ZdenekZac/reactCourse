import styled from 'styled-components';
import Spinner from '../../ui/Spinner';
import StaffRow from './StaffRow';
import { useStaff } from './useStaff';

const Table = styled.div`
  border: 1px solid var(--color-grey-200);
  width: 100%;
  font-size: 1.4rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: start;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

function StaffTable() {
  const { isLoading, staff } = useStaff();
  if (isLoading) return <Spinner />;

  return (
    <Table role="table">
      <TableHeader role="row">
        <div>ID</div>
        <div>Full name</div>
        <div>Email</div>
        <div>Phone</div>
      </TableHeader>
      {staff.map((staff) => (
        <StaffRow staff={staff} key={staff.id} />
      ))}
    </Table>
  );
}

export default StaffTable;
