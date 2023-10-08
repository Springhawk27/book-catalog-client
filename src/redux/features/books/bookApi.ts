import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => '/books',
    }),
    getBooks: builder.query({
      query: () => '/books/?limit=10&sortBy=createdAt&sortOrder=desc',
    }),
    singleBook: builder.query({
      query: (id) => ({ url: `/books/${id}` }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: 'DELETE',
      }),
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
    }),
    postReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: review,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      // invalidatesTags: ['reviews'],
    }),
    getReview: builder.query({
      query: (id) => ({ url: `/review/${id}` }),
      // providesTags: ['reviews'],
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetBooksQuery,
  usePostBookMutation,
  useSingleBookQuery,
  usePostReviewMutation,
  useGetReviewQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;
