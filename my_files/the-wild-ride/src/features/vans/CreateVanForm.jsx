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
  const { errors } = formState;

  const { isCreating, createVan } = useCreateVans();
  const { isEditing, editVan } = useEditVan();

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];

    console.log('Formulář data:', data);
    console.log('Formulář editId:', editId);

    if (isEditSession)
      editVan(
        { newVanData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
    else
      createVan(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
          },
        }
      );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Van name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register('name', {
            required: 'This field is required!!',
          })}
        />
      </FormRow>

      <FormRow label="Reg. plate" error={errors?.registrationPlate?.message}>
        <Input
          type="text"
          id="registrationPlate"
          disabled={isWorking}
          {...register('registrationPlate', {
            required: 'This field is required!!',
          })}
        />
      </FormRow>
      <FormRow label="Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register('maxCapacity', {
            required: 'This field is required!!',
          })}
        />
      </FormRow>

      <FormRow label="Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register('regularPrice', {
            required: 'This field is required!!',
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required!!',
            valueAsNumber: true,
            validate: (value) =>
              value <= Number(getValues().regularPrice) ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>

      <FormRow label="Features" error={errors?.features?.message}>
        <Input
          type="text"
          id="features"
          disabled={isWorking}
          {...register('features', {
            required: 'This field is required!!',
          })}
        />
      </FormRow>

      <FormRow label="Van photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'this field is required !!',
          })}
        />
      </FormRow>

      <FormRow>
        <Button $variation="third" type="reset">
          Cancel
        </Button>
        <Button $variation="secondary" disabled={isWorking}>
          {isEditSession ? 'Edit van' : 'Create new van'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateVanForm;
