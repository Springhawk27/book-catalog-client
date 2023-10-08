import { IBook } from '@/types/globalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IReadingList {
  books: IBook[];
}

const initialState: IReadingList = {
  books: [],
};

const readingListSlice = createSlice({
  name: 'readingList',
  initialState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<IBook>) => {
      const exists = state.books.some(
        (book) => book._id === action.payload._id
      );
      if (!exists) {
        state.books.push({ ...action.payload, finishedReading: false });
      }
    },

    removeFromReadingList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },

    markAsFinishedReading: (state, action: PayloadAction<IBook>) => {
      const book = state.books.find((book) => book._id === action.payload._id);
      if (book) {
        book.finishedReading = true;
      }
    },

    markAsUnfinishedReading: (state, action: PayloadAction<IBook>) => {
      const book = state.books.find((book) => book._id === action.payload._id);
      if (book) {
        book.finishedReading = false;
      }
    },
  },
});

export const {
  addToReadingList,
  removeFromReadingList,
  markAsFinishedReading,
  markAsUnfinishedReading,
} = readingListSlice.actions;
export default readingListSlice.reducer;
