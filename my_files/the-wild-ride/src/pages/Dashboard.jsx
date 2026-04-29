import Heading from '../ui/Heading';

import { getVans2 } from '../services/apiVans';

function Dashboard() {
  const { name, number: cislo } = getVans2();
  console.log(name, cislo);
  return (
    <div>
      <p>
        {name} {cislo}
      </p>
      <Heading as='h1'>Dashboard</Heading>
    </div>
  );
}

export default Dashboard;
