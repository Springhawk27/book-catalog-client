import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBook {
  genre: string | null;
  publicationDate: number | null;
  searchQuery: string;
}

const initialState: IBook = {
  genre: null,
  publicationDate: 2030,
  searchQuery: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.genre = action.payload;
    },
    setPublicationDate: (state, action: PayloadAction<number>) => {
      state.publicationDate = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setGenre, setPublicationDate, setSearchQuery } =
  bookSlice.actions;

export default bookSlice.reducer;
