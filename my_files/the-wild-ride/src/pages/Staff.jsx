import StaffTable from '../features/staff/StaffTable';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Staff() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Staff</Heading>
      </Row>
      <Row type='horizontal'>
        <StaffTable />
      </Row>
    </>
  );
}

export default Staff;
