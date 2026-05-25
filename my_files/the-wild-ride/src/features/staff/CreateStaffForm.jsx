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

  const { errors } = formState;
  const { id: editId, ...editValues } = staffToEdit;
  const { isCreating, createStaff } = useCreateStaff();
  const isEditSession = Boolean(editId);

  const isWorking = isCreating;

  function myOnSubmit(data) {
    if (isEditSession) {
      console.log('edit');
    } else {
      createStaff(
        { ...data },
        {
          onSuccess: (data) => {
            reset();
          },
        },
      );
    }
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(myOnSubmit, onError)}>
      <FormRow label='Full name' error={errors?.name?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('name', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow label='Email' error={errors?.email?.message}>
        <Input
          type='text'
          id='email'
          disabled={isWorking}
          {...register('email', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow label='Phone' error={errors?.phone?.message}>
        <Input
          type='text'
          id='phone'
          disabled={isWorking}
          {...register('phone', {
            required: 'this field is required!',
          })}
        />
      </FormRow>
      <FormRow>
        <Button $variation='third' type='reset'>
          Cancel
        </Button>
        <Button $variation='secondary' disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateStaffForm;
