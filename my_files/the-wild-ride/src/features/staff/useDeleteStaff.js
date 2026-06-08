import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteStaff as deleteStaffApi } from '../../services/apiStaff';
import toast from 'react-hot-toast';

export function useDeleteStaff() {
  const queryClient = useQueryClient();

  const { mutate: deleteStaff, isPending: isDeleting } = useMutation({
    mutationFn: deleteStaffApi,
    onSuccess: () => {
      toast.success('Staff deleted');
      queryClient.invalidateQueries({
        queryKey: ['staff'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteStaff };
}
