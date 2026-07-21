import VanRow from './VanRow';
import Spinner from '../../ui/Spinner';
import { useVans } from './useVans';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Table from '../../ui/Table';

function VanTable() {
  const { isLoading, vans } = useVans();
  const [searchParams] = useSearchParams();

  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get('discount') || 'all';

  let filteredVans;
  if (filterValue === 'all') filteredVans = vans;
  if (filterValue === 'no-discount') {
    filteredVans = vans.filter((van) => van.discount === 0);
  }
  if (filterValue === 'with-discount') {
    filteredVans = vans.filter((van) => van.discount > 0);
  }

  return (
    <Menus>
      <Table columns=' 0.4fr 0.4fr 0.4fr 0.5fr 0.5fr 0.4fr 2fr 0.3fr'>
        <Table.Header>
          <div>img</div>
          <div>Van</div>
          <div>Capacity</div>
          <div>Plate</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Features</div>
          <div></div>
        </Table.Header>
        <Table.Body data={filteredVans} render={(van) => <VanRow van={van} key={van.id} />} />
      </Table>
    </Menus>
  );
}

export default VanTable;
