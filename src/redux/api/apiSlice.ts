/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/v1' }),
  // baseQuery: fetchBaseQuery({
  //   baseUrl: 'https://book-catalog-backend-blush.vercel.app/api/v1',
  // }),
  endpoints: () => ({}),
});
