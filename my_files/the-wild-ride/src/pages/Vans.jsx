import Heading from '../ui/Heading';
import Row from '../ui/Row';
import VanTable from '../features/vans/VanTable';
import Button from '../ui/Button';
import { useState } from 'react';
import CreateVanForm from '../features/vans/CreateVanForm';

function Vans() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Vans</Heading>
        <p>Filter/Sort</p>
      </Row>
      <Row type='vertical'>
        <VanTable />
        <Button $variation='primary' $size='medium' onClick={() => setShowForm((show) => !show)}>
          Add new Van{' '}
        </Button>
      </Row>
      {showForm && <CreateVanForm />}
    </>
  );
}

export default Vans;
