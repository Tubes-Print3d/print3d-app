import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const PROXY = process.env.REACT_APP_PROXY;

export const api = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: `${PROXY}/api/v1/` }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => ({ url: `products` }),
      transformResponse: (response) => response.payload,
    }),
  }),
});

export const { useGetProductsQuery } = api;
