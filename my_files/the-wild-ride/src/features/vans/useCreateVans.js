import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditVan } from '../../services/apiVans';
import toast from 'react-hot-toast';

export function useCreateVans() {
  const queryClient = useQueryClient();

  const { mutate: createVan, isPending: isCreating } = useMutation({
    mutationFn: createEditVan,
    onSuccess: () => {
      toast.success('new van successfully created !!');
      queryClient.invalidateQueries({ queryKey: ['vans'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createVan };
}
