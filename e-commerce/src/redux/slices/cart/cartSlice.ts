import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface CounterState {
  cart: [] | any;
}

const initialState: CounterState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product: any = state.cart.find(
        (item: any) => item?.id === action.payload?.id
      );

      if (product) {
        // update quantity
        product.quantity += 1;
        toast.success("Product quantity updated!");
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
        toast.success("Product added to cart!");
      }
    },
    incrementProduct: (state, action) => {
      const productItem: any = state.cart?.find(
        (item: any) => item.id === action.payload?.id
      );

      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementProduct: (state, action) => {
      const productItem: any = state.cart?.find(
        (item: any) => item.id === action.payload?.id
      );
      if (productItem) {
        if (productItem.quantity > 1) {
          productItem.quantity -= 1;
        } else {
          productItem.quantity = 1;
        }
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart?.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartItem = (state: any) => state.cart.cart;
export const {
  addProductToCart,
  incrementProduct,
  decrementProduct,
  deleteProduct,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
