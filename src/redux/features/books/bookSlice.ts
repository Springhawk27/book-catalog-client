import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IBook {
  genre: string | null;
  publicationDate: number | null;
}

const initialState: IBook = {
  genre: null,
  publicationDate: 2023,
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    setPublicationDate: (state, action: PayloadAction<number>) => {
      state.publicationDate = action.payload;
    },
  },
});

export default bookSlice.reducer;
