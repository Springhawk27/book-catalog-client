import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/books',
    }),
    getBooks: builder.query({
      query: () => '/books/?limit=10',
    }),
    singleBook: builder.query({
      query: (id) => ({ url: `/books/${id}` }),
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBooksQuery,
  usePostBookMutation,
  useSingleBookQuery,
} = bookApi;
