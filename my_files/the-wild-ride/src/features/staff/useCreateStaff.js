import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditStaff } from '../../services/apiStaff';
import toast from 'react-hot-toast';

export function useCreateStaff() {
  const queryClient = useQueryClient();

  const { mutate: createStaff, isPending: isCreating } = useMutation({
    mutationFn: (data) => createEditStaff(data),
    onSuccess: () => {
      toast.success('New staff successfully created!');
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createStaff };
}
