import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface CounterState {
  fav: [] | any;
}

const initialState: CounterState = {
  fav: [],
};

export const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addProductToFav: (state, action) => {
      const product: any = state.fav.find(
        (item: any) => item?.id === action.payload?.id
      );

      if (product) {
        // remove product
        state.fav = state.fav.filter(
          (item: any) => item.id !== action.payload?.id
        );
        toast.success("Product removed from fav!");
      } else {
        state.fav.push({
          ...action.payload,
        });
        toast.success("Product added to fav!");
      }
    },

    deleteProduct: (state, action) => {
      state.fav = state.fav?.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const favItem = (state: any) => state.fav.fav;
export const { addProductToFav, deleteProduct } = favSlice.actions;

export default favSlice.reducer;
