import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({  // Fixed variable name casing (convention: camelCase)
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });  // Fixed typo: items → action.payload
      }
    },
    removeItem: (state, action) => {
      const itemNameToRemove = action.payload;  // Better variable name
      state.items = state.items.filter(
        (item) => item.name !== itemNameToRemove
      );
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;  // Destructure payload
      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;  // Fixed undefined variable
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export all actions correctly
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;