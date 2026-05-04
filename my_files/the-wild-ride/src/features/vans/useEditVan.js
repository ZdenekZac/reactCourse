import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { createEditVan } from '../../services/apiVans';

export function useEditVan() {
  const queryClient = useQueryClient();

  const { mutate: editVan, isPending: isEditing } = useMutation({
    mutationFn: ({ newVanData, id }) => createEditVan(newVanData, id),
    onSuccess: () => {
      toast.success('Van successfully edited!');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, editVan };
}

export default useEditVan;
