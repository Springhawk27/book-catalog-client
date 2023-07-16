import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './features/books/bookSlice';
import { api } from './api/apiSlice';

const store = configureStore({
  reducer: {
    book: bookSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
