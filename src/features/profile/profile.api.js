// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/api";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}v1/users`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().profile.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Cart", "User"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        body: data,
        method: "POST",
      }),
      transformResponse: (res) => res.payload,
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        body: data,
        method: "POST",
      }),
      transformResponse: (res) => res.payload,
    }),

    getKeranjang: builder.query({
      query: () => ({ url: "/carts" }),
      transformResponse: (res) => res.payload,
      providesTags: (results) =>
        results
          ? [...results.map(({ _id: id }) => ({ type: "Cart", id })), "Cart"]
          : ["Cart"],
    }),
    addToCart: builder.mutation({
      query: (productId) => ({
        url: "/carts",
        body: { productId },
        method: "POST",
      }),
      transformResponse: (res) => res.payload,
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: builder.mutation({
      query: (productId) => ({
        url: `/carts/${productId}`,
        method: "DELETE",
      }),
      transformResponse: (res) => res.payload,
      invalidatesTags: (result, error, id) => [{ type: "Cart", id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetKeranjangQuery,
  useLoginMutation,
  useRegisterMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
} = profileApi;
