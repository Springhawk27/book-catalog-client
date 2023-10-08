import { IBook } from '@/types/globalTypes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const LOCAL_STORAGE_KEY = 'readingList';

interface IReadingList {
  books: IBook[];
}

const loadReadingListFromLocalStorage = (): IReadingList => {
  const savedReadingList = localStorage.getItem(LOCAL_STORAGE_KEY);
  return savedReadingList ? JSON.parse(savedReadingList) : { books: [] };
};

const initialState: IReadingList = loadReadingListFromLocalStorage();

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
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      }
    },

    removeFromReadingList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
    },

    markAsFinishedReading: (state, action: PayloadAction<IBook>) => {
      const book = state.books.find((book) => book._id === action.payload._id);
      if (book) {
        book.finishedReading = true;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
      }
    },

    markAsUnfinishedReading: (state, action: PayloadAction<IBook>) => {
      const book = state.books.find((book) => book._id === action.payload._id);
      if (book) {
        book.finishedReading = false;
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
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

// without local storage
// import { IBook } from '@/types/globalTypes';
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface IReadingList {
//   books: IBook[];
// }

// const initialState: IReadingList = {
//   books: [],
// };

// const readingListSlice = createSlice({
//   name: 'readingList',
//   initialState,
//   reducers: {
//     addToReadingList: (state, action: PayloadAction<IBook>) => {
//       const exists = state.books.some(
//         (book) => book._id === action.payload._id
//       );
//       if (!exists) {
//         state.books.push({ ...action.payload, finishedReading: false });
//       }
//     },

//     removeFromReadingList: (state, action: PayloadAction<IBook>) => {
//       state.books = state.books.filter(
//         (book) => book._id !== action.payload._id
//       );
//     },

//     markAsFinishedReading: (state, action: PayloadAction<IBook>) => {
//       const book = state.books.find((book) => book._id === action.payload._id);
//       if (book) {
//         book.finishedReading = true;
//       }
//     },

//     markAsUnfinishedReading: (state, action: PayloadAction<IBook>) => {
//       const book = state.books.find((book) => book._id === action.payload._id);
//       if (book) {
//         book.finishedReading = false;
//       }
//     },
//   },
// });

// export const {
//   addToReadingList,
//   removeFromReadingList,
//   markAsFinishedReading,
//   markAsUnfinishedReading,
// } = readingListSlice.actions;
// export default readingListSlice.reducer;
