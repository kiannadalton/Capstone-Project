import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const capstone_api = createApi({
  reducerPath: "capstone_api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  tagTypes: ["user", "comment", "reviews"],
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (body) => ({
        url: "/api/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation({
      query: (body) => ({
        url: "/api/auth/login",
        method: "POST",
        body,
      }),
    }),
    getProducts: builder.query({
      query: () => "/api/items",
    }),
    getMyReviews: builder.query({
      query: (token) => ({
        url: "api/reviews/",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["reviews"],
    }),
    getMyComments: builder.query({
      query: ( token ) => ({
        url: "api/comments/",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["comment"],
    }),
    createReview: builder.mutation({
      query: ({ token, body }) => ({
        url: "api/reviews/",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["reviews"],
    }),
    createComment: builder.mutation({
      query: ({ token, body }) => ({
        url: "api/comments/",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProductsQuery,
  useGetMyReviewsQuery,
  useGetMyCommentsQuery,
  useCreateReviewMutation,
  useCreateCommentMutation,
} = capstone_api;
