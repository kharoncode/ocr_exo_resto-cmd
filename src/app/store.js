import {
   applyMiddleware,
   combineReducers,
   configureStore,
} from '@reduxjs/toolkit';
import { cartSlice } from '../components/features/Cart/cartSlice';
import { ownerSlice } from '../components/features/owner/ownerSlice';
import { notesSlice } from '../components/features/note/noteSlice';

let state = {
   owner: {},
   list: [],
};

const middleware = [
   (store) => (next) => (action) => {
      console.log('Action', action);
      next(action);
   },
];

const myLogger = (store) => (next) => (action) => {
   console.log('Logged Action', action);
   next(action);
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      owner: ownerSlice.reducer,
      list: cartSlice.reducer,
      notes: notesSlice.reducer,
   }),
   //middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
   middleware: [applyMiddleware(myLogger)],
});
