const BASE_URL =  "http://localhost:5000"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include", 
  prepareHeaders: (headers, { getState }) => {
    const token = (getState()).auth?.token;

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  tagTypes: ["Auth", "SadqahCategory"],
  endpoints: (builder) => ({
    ApiLogin: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),

      invalidatesTags: ["Auth"],
    }),
    ApiSendOtp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/send-otp",
        method: "POST",
        body: credentials,
      }),

      invalidatesTags: ["Auth"],
    }),
    ApiVerifyOtp: builder.mutation({
      query: (credentials) => ({
        url: "/auth/verify-otp",
        method: "POST",
        body: credentials,
      }),

      invalidatesTags: ["Auth"],
    }),
    ApiGetAllCountries: builder.query({
      query: (credentials) => ({
        url: "/countries/all",
        method: "POST",
        body: credentials,
      }),

      providesTags: ["Auth"],
    }),
    ApiGetAllSadqahCategories: builder.query<any, void>({
      query: () => "/sadqah-category",
      providesTags: ["SadqahCategory"],
    }),
  }),
});

export const {
  useApiSendOtpMutation,
  useApiGetAllCountriesQuery,
  useApiVerifyOtpMutation,
  useLazyApiGetAllCountriesQuery,
  useApiGetAllSadqahCategoriesQuery,
} = api;
