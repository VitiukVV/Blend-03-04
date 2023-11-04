import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://64674adeba7110b663b466b2.mockapi.io/";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
    }),
    addComment: builder.mutation({
      query: (body) => ({
        url: API_ENDPOINT,
        method: "POST",
        body,
      }),

      invalidatesTags: ["Comments"],
    }),
    deleteComment: builder.mutation({
      query: (id) => ({
        url: `${API_ENDPOINT}/${id}`,
        method: "DELETE",
      }),

      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = commentApi;
