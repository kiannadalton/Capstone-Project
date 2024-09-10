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
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `api/items/${id}`,
      }),
    }),
    getMyReviews: builder.query({
      query: (token) => ({
        url: "api/reviews/myreviews",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["reviews, items"],
    }),
    getMyComments: builder.query({
      query: (token) => ({
        url: "api/comments/mycomments",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["comment"],
    }),
    createReview: builder.mutation({
      query: ({ item_id, token, txt, score }) => ({
        url: `api/items/${item_id}/review`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {
          txt: txt,
          score: score,
        },
      }),
      invalidatesTags: ["reviews, items"],
    }),
    updateReview: builder.mutation({
      query: ({ id, token, txt, score }) => ({
        url: `api/reviews/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: {
          txt: txt,
          score: score,
        },
      }),
      invalidatesTags: ["items, reviews, review"],
    }),
    deleteReview: builder.mutation({
      query: ({ id, token }) => ({
        url: `api/reviews/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["items, reviews, review"],
    }),
    createComment: builder.mutation({
      query: ({ review_id, token, body }) => ({
        url: `api/comments/review/${review_id}`,
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["comments, review"],
    }),
    updateComment: builder.mutation({
      query: ({ id, token, body }) => ({
        url: `api/comments/${id}`,
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body,
      }),
      invalidatesTags: ["comments, review"],
    }),
    deleteComment: builder.mutation({
      query: ({ id, token }) => ({
        url: `api/comments/${id}`,
        method: "DELETE",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ["comments, review"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetProductsQuery,
  useGetSingleProductQuery,
  useGetMyReviewsQuery,
  useGetMyCommentsQuery,
  useUpdateReviewMutation,
  useUpdateCommentMutation,
  useDeleteReviewMutation,
  useDeleteCommentMutation,
  useCreateReviewMutation,
  useCreateCommentMutation,
} = capstone_api;
