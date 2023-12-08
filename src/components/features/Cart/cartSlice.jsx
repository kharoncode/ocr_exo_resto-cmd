import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListQuantityProductPerName } from '../../../app/selectors';
import * as ProductList from '@common/models';

const TIME_TO_RESET_ORDER = 5000;

export const resetOrderThunk = createAsyncThunk(
   'cart/resetOrderThunk',
   async () => {
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            reject();
         }, TIME_TO_RESET_ORDER);
      });
   }
);

export const addProductThunk = createAsyncThunk(
   'cart/addProductThunk',
   async (product, thunkApi) => {
      thunkApi.dispatch(cartSlice.actions.addProduct(product));
      thunkApi.dispatch(resetOrderThunk());
      return new Promise((resolve, reject) => {
         setTimeout(() => {
            const state = thunkApi.getState();
            const numberProductPerName = getListQuantityProductPerName(state);
            const numberForSpecialOffer = numberProductPerName.find(
               (item) => item.title === 'Poulet Croquant'
            )?.quantity;
            if (numberForSpecialOffer === 2) {
               if (
                  window.confirm(
                     'Voulez-vous ajouter une troisième fois ce produit à moitié prix ?'
                  )
               ) {
                  resolve();
               } else {
                  reject();
               }
            } else {
               reject();
            }
         }, 5000);
      });
   }
);

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
   extraReducers: function (builder) {
      builder.addCase(addProductThunk.fulfilled, (state) => {
         const specialOffert = ProductList.PouletCroquant;
         const reducedPrice =
            Math.round((ProductList.PouletCroquant.price / 2) * 100) / 100;
         return [...state, { ...specialOffert, price: reducedPrice }];
      }),
         builder.addCase(addProductThunk.rejected, (state) => {
            return [...state];
         }),
         builder.addCase(resetOrderThunk.rejected, () => {
            return [];
         });
   },
});
