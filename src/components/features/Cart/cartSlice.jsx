import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
   name: 'list',
   initialState: {},
   reducers: {
      addProduct: (currentState, action) => {
         const listWithNewProduct = [...currentState, action.payload];
         return listWithNewProduct;
      },
      removeProduct: (currentState, action) => {
         const list = [...currentState.list].filter(
            (item, index) => item !== action.payload
         );
         return list;
      },
      applyVoucher: (currentState, action) => {
         const withVoucherList = currentState.map((item) =>
            item.title === action.payload ? { ...item, price: 2 } : item
         );
         return withVoucherList;
      },
   },
});
