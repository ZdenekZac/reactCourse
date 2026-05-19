import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditStaff } from '../../services/apiStaff';
import toast from 'react-hot-toast';

export function useCreateStaff() {
  const queryClient = useQueryClient();

  const { mutate: createStaff, isPending: isCreating } = useMutation({
    mutationFn: createEditStaff,
  });

  return { isCreating, createStaff };
}
