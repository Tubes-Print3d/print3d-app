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
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({ url: "" }),
      transformResponse: (response) => response.payload,
      providesTags: (results) =>
        results
          ? [
              ...results.map(({ _id }) => ({ type: "Products", id: _id })),
              "Products",
            ]
          : ["Products"],
    }),
    addProduct: builder.mutation({
      query: (body) => ({ url: "", method: "POST", body }),
      transformResponse: (res) => res.payload,
      invalidatesTags: ["Products"],
    }),
    editProduct: builder.mutation({
      query: ({ id, body }) => {
        return { url: `/${id}`, method: "PUT", body };
      },
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({ url: `/${id}`, method: "DELETE" }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = api;
