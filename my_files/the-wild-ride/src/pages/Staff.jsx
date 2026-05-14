import StaffTable from '../features/staff/StaffTable';
import Button from '../ui/Button';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Staff() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Staff</Heading>
      </Row>
      <Row type="horizontal">
        <StaffTable />
      </Row>
      <Button $size="small" $variation="primary">
        Add new staff
      </Button>
    </>
  );
}

export default Staff;
