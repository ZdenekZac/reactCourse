import { Form, redirect, useNavigation } from 'react-router-dom';
import React from 'react';

export default function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

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
