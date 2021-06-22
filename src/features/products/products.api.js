import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/api";

export const api = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/v1/products`,
    prepareHeaders: (headers, api) => {
      const token = api.getState().profile.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "" }),
      transformResponse: (response) => response.payload,
      providesTags: (results) =>
        results
          ? [...results.map((v) => ({ type: "Product", id: v._id })), "Product"]
          : ["Product"],
    }),
    addProduct: builder.mutation({
      query: (body) => ({ url: "", method: "POST", body }),
      transformResponse: (res) => res.payload,
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = api;
