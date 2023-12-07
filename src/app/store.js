import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

let state = {
   value: null,
   list: [],
   owner: null,
};

export const addProduct = createAction('ADD_PRODUCT', (product) => ({
   payload: product,
}));

export const removeProduct = createAction('REMOVE_PRODUCT', () => ({}));

export const applyVoucher = createAction('APPLY_VOUCHER', (name) => ({
   payload: { price: 2, title: name },
}));

export const updateFirstName = createAction(
   'UPDATE_FIRSTNAME',
   (firstName) => ({
      payload: firstName,
   })
);

const reducer = createReducer(state, {
   [addProduct]: (currentState, action) => {
      const listWithNewProduct = [...currentState.list, action.payload];
      return { ...currentState, list: listWithNewProduct };
   },
   [removeProduct]: (currentState, action) => {
      const list = currentState.list.filter(
         (item, index) => index !== action.payload
      );
      return { ...currentState, list: list };
   },
   [applyVoucher]: (currentState, action) => {
      const withVoucherList = currentState.list.map((item) =>
         item.title === action.payload.title
            ? { ...item, price: action.payload.price }
            : item
      );
   },
   [updateFirstName]: (currentState, action) => {
      const owner = { ...currentState.owner, firstName: action.payload };
      return { ...currentState, owner };
   },
});

/* const reducer = (currentState, action) => {
   switch (action.type) {
      case 'ADD_PRODUCT': {
         const listWithNewProduct = [...currentState.list, action.payload];
         return { ...currentState, list: listWithNewProduct };
      }
      case 'REMOVE_PRODUCT': {
         const list = currentState.list.filter(
            (item, index) => index !== action.payload
         );
         return { ...currentState, list: list };
      }
      case 'APPLY_VOUCHER': {
         const withVoucherList = currentState.list.map((item) =>
            item.title === action.payload.title
               ? { ...item, price: action.payload.price }
               : item
         );
         return { ...currentState, list: withVoucherList };
      }

      case 'UPDATE_FIRSTNAME': {
         const owner = { ...currentState.owner, firstName: action.payload };
         return { ...currentState, owner };
      }
      default: {
         return currentState;
      }
   }
}; */

export const store = configureStore({
   preloadedState: state,
   reducer,
});
