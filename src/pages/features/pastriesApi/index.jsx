import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const uri = 'http://localhost:3001/game/'

export const pastriesApi = createApi({
    reducerPath: 'pastriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: uri }),
    endpoints: (builder) => ({
      getAllPastries: builder.query({
        query: () => `pastries`,
      }),
    }),
});

  export const { useGetAllPastriesQuery } = pastriesApi

  