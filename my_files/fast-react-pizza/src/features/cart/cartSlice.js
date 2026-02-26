import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //cart: [],
  totalPrice: 0,

  cart: [
    {
      pizzaId: 12,
      name: 'testPizza',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {},
    deleteItem(state, action) {},
    increaseItemQuantity(state, action) {},
    decreaseItemQuantity(state, action) {},
    clearCart(state, action) {},
  },
});
