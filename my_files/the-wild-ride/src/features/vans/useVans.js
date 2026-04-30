import { useQuery } from '@tanstack/react-query';
import { getVans } from '../../services/apiVans';

function useVans() {
  const {
    isLoading,
    data: vans,
    error,
  } = useQuery({
    queryKey: ['vans'],
    queryFn: getVans,
  });
  console.log(name);
  return { isLoading, error, cabins };
}
