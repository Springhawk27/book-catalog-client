import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/books',
    }),
    getBooks: builder.query({
      query: () => '/books/?limit=10',
    }),
  }),
});

export const { useGetAllBooksQuery, useGetBooksQuery } = bookApi;
