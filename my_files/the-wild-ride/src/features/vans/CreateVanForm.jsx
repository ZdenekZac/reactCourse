import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useForm } from 'react-hook-form';
import { useCreateVans } from './useCreateVans';
import { useEditVan } from './useEditVan';

function CreateVanForm({ vanToEdit = {} }) {
  const { id: editId, ...editValues } = vanToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
}

export default CreateVanForm;
