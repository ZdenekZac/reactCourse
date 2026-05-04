import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteVan as deleteVanApi } from '../../services/apiVans';
import toast from 'react-hot-toast';

export function useDeleteVan() {
  const queryClient = useQueryClient();

  const { mutate: deleteCabin, isPending: isDeleting } = useMutation({
    mutationFn: deleteVanApi,
    onSuccess: () => {
      toast.success('van successfully deleted!');
      queryClient.invalidateQueries({ queryKey: ['vans'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
