import { useQuery } from '@tanstack/react-query';
import { getVans } from '../../services/apiVans';

export function useVans() {
  const {
    isLoading,
    data: vans,
    error,
  } = useQuery({
    queryKey: ['vans'],
    queryFn: getVans,
  });

  return { isLoading, error, vans };
}
