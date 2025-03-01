import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1; // If item already exists, increase quantity
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // Update quantity of an item
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity; // Update quantity
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
