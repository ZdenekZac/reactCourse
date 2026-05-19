import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useCreateStaff } from './useCreateStaff';
import { useForm } from 'react-hook-form';

function CreateStaffForm({ staffToEdit = {} }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { id: editId, ...editValues } = staffToEdit;
  const { isCreating, createStaff } = useCreateStaff();
  const isEditSession = Boolean(editId);

  const isWorking = isCreating;

  function myOnSubmit(data) {
    if (isEditSession) {
      console.log('edit');
    } else {
      createStaff({ ...data });
    }
  }

  return (
    <Form onSubmit={handleSubmit(myOnSubmit)}>
      <FormRow label='Full name'>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow label='Email'>
        <Input
          type='text'
          id='email'
          disabled={isWorking}
          {...register('email', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow label='Phone'>
        <Input
          type='text'
          id='phone'
          disabled={isWorking}
          {...register('name', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow>
        <Button variation='secondary' type='reset'>
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession ? 'Edit cabin' : 'Create new cabin'}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateStaffForm;
