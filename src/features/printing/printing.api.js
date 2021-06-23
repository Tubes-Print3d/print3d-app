import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/api";

export const printingApi = createApi({
  reducerPath: "machineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}/v1/machines`,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().profile.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["Machines"],

  endpoints: (builder) => ({
    getMyMachines: builder.query({
      query: (id) => ({
        url: `?pemilik=${id}`,
      }),
      transformResponse: (res) => res.payload,
      providesTags: ["Machines"],
    }),
    getMachines: builder.query({
      query: () => ({ url: "" }),
      transformResponse: (res) => res.payload,
      // providesTags: ["Machines"],
    }),
    addMachine: builder.mutation({
      query: (data) => ({
        url: "",
        body: data,
        method: "POST",
      }),
      transformResponse: (res) => res.payload,
      invalidatesTags: ["Machines"],
    }),
    deleteMachines: builder.mutation({
      query: (idList) => ({ url: "", body: idList, method: "DELETE" }),
      transformResponse: (res) => res.payload,
      invalidatesTags: ["Machines"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMyMachinesQuery,
  useAddMachineMutation,
  useDeleteMachinesMutation,
  useGetMachinesQuery,
} = printingApi;
