import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';

const isValidPhone = (str) => /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(str);

export default function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
    error: errorAddress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === 'loading';

  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // tady jsem skoncil 11.03. 23:19
  const formErrors = useActionData();

  return (
    <div>
      <h2>Create and Order</h2>
      <Form method='POST'>
        <input type='text' name='customer' placeholder='name' required />
        <input type='text' name='number' placeholder='number' required />
        <input type='text' name='address' placeholder='address' required />
        <button disabled={isSubmitting}>{isSubmitting ? 'sending...' : 'Order now'}</button>
      </Form>
    </div>
  );
}

export async function createOrderAction({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  return redirect('/');
}
