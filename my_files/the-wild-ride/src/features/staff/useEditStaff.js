import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditStaff } from '../../services/apiStaff';

export function useEditStaff() {
  const queryClient = useQueryClient();

  const { mutate: editStaff, isPending: isEditing } = useMutation({
    mutationFn: ({ newStaffData, id }) => createEditStaff(newStaffData, id),
    onSuccess: () => {
      toast.success('staff successfully edited!');
      queryClient.invalidateQueries({ queryKey: ['staff'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isEditing, editStaff };
}
