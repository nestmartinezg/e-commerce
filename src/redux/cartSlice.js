import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts: localStorage.getItem('cartProducts')
    ? JSON.parse(localStorage.getItem('cartProducts'))
    : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        product => product.name === action.payload.name
      );

      if (productIndex >= 0) {
        state.cartProducts[productIndex].cantidad += 1;
      } else {
        const productTemp = {
          ...action.payload,
          cantidad: 1,
        };
        state.cartProducts.push(productTemp);
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    removeFromCart: (state, action) => {
      const newCart = state.cartProducts.filter(
        product => product.name !== action.payload.name
      );

      state.cartProducts = newCart;
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    decreaseCart: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        product => product.name === action.payload.name
      );

      if (state.cartProducts[productIndex].cantidad > 1) {
        state.cartProducts[productIndex].cantidad -= 1;
      } else if (state.cartProducts[productIndex].cantidad === 1) {
        const newCart = state.cartProducts.filter(
          product => product.name !== action.payload.name
        );

        state.cartProducts = newCart;
      }
      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
    increaseCart: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        product => product.name === action.payload.name
      );

      state.cartProducts[productIndex].cantidad += 1;

      localStorage.setItem('cartProducts', JSON.stringify(state.cartProducts));
    },
  },
});

export const { addToCart, removeFromCart, decreaseCart, increaseCart } =
  cartSlice.actions;
export default cartSlice.reducer;
