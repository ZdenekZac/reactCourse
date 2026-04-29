import { useQuery } from '@tanstack/react-query';
import { getVans } from '../../services/apiVans';

function useVans() {
  const { name } = getVans();
  console.log(name);
  return <div></div>;
}

export default useVans;
