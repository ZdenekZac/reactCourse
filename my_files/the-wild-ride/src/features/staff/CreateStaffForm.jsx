import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FormRow from '../../ui/FormRow';

import { useCreateStaff } from './useCreateStaff';
import { useForm } from 'react-hook-form';
import { useEditStaff } from './useEditStaff';

function CreateStaffForm({ staffToEdit = {} }) {
  const { id: editId, ...editValues } = staffToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;

  const { isCreating, createStaff } = useCreateStaff();
  const { isEditing, editStaff } = useEditStaff();

  const isWorking = isCreating || isEditing;

  function myOnSubmit(data) {
    if (isEditSession) {
      editStaff({ newStaffData: { ...data }, id: editId });
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
      <FormRow label='Full name' error={errors?.fullName?.message}>
        <Input
          type='text'
          id='name'
          disabled={isWorking}
          {...register('fullName', {
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
          {isEditSession ? 'Edit staff' : 'Add new staff'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateStaffForm;
