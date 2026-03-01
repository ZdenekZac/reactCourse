import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Tady definujeme, CO se má stát
    addItem(state, action) {
      // action.payload bude celý objekt pizzy
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
