import { useState } from 'react';
import StaffTable from '../features/staff/StaffTable';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CreateStaffForm from '../features/staff/CreateStaffForm';

function Staff() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Staff</Heading>
      </Row>
      <Row type='horizontal'>
        <StaffTable />
      </Row>
      <Button $size='medium' $variation='primary' onClick={() => setShowForm((show) => !show)}>
        Add new staff
      </Button>
      {showForm && <CreateStaffForm />}
    </>
  );
}

export default Staff;
