import { IBook } from '@/types/globalTypes';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const LOCAL_STORAGE_KEY = 'wishlist';

interface IWishList {
  books: IBook[];
}

const loadWishlistFromLocalStorage = (): IWishList => {
  const savedWishlist = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedWishlist ? JSON.parse(savedWishlist) : { books: [] };
};

const initialState: IWishList = loadWishlistFromLocalStorage();

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const exists = state.books.some(
        (book) => book._id === action.payload._id
      );
      if (!exists) {
        state.books.push(action.payload);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      }
    },

    removeFromWishList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },
  },
});

export const { addToWishlist, removeFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;

// without local storage
// import { IBook } from '@/types/globalTypes';
// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

// interface IWishList {
//   books: IBook[];
// }

// const initialState: IWishList = {
//   books: [],
// };

// const wishListSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action: PayloadAction<IBook>) => {
//       const exists = state.books.some(
//         (book) => book._id === action.payload._id
//       );
//       if (!exists) {
//         state.books.push(action.payload);
//       }
//     },

//     removeFromWishList: (state, action: PayloadAction<IBook>) => {
//       state.books = state.books.filter(
//         (book) => book._id !== action.payload._id
//       );
//     },
//   },
// })

// export const { addToWishlist, removeFromWishList } = wishListSlice.actions;
// export default wishListSlice.reducer;
