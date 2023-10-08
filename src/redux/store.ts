import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/apiSlice';
import userReducer from './features/user/userSlice';
import bookReducer from './features/books/bookSlice';
import wishlistReducer from './features/books/wishListSlice';
import readinglistReducer from './features/books/readingListSlice';

const store = configureStore({
  reducer: {
    book: bookReducer,
    wishlist: wishlistReducer,
    readinglist: readinglistReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
