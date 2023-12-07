import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../components/features/Cart/cartSlice';
import { ownerSlice } from '../components/features/owner/ownerSlice';
import { notesSlice } from '../components/features/note/noteSlice';

let state = {
   owner: {},
   list: [],
};

export const store = configureStore({
   preloadedState: state,
   reducer: combineReducers({
      owner: ownerSlice.reducer,
      list: cartSlice.reducer,
      notes: notesSlice.reducer,
   }),
});
